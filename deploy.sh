#!/usr/bin/env bash
set -euo pipefail

########################################
# CONFIG — EDIT THESE
########################################
BUCKET="ursa.bertball.com"        # your S3 bucket name
DIST_ID="ET7MFK85DZYF3"           # your CloudFront Distribution ID
REGION="us-west-2"                # your S3 bucket region

########################################
# INPUT — DIST FOLDER
########################################
# Usage: ./deploy.sh [dist-folder]
# If not provided, defaults to "dist"
DIST_DIR="${1:-dist}"

if [ ! -d "$DIST_DIR" ]; then
  echo "Error: dist folder '$DIST_DIR' does not exist."
  echo "Usage: $0 [dist-folder]"
  exit 1
fi

echo "Deploying from '$DIST_DIR' to s3://$BUCKET (region: $REGION)"
echo

########################################
# 1. Sync all files to S3
########################################
aws s3 sync "$DIST_DIR" "s3://$BUCKET" \
  --region "$REGION" \
  --delete

########################################
# 2. (Optional) Override cache-control for HTML
#    Short cache for HTML, longer/default for assets
########################################
echo
echo "Updating Cache-Control headers for HTML files..."

# Find all .html files under DIST_DIR and re-upload them with short cache
while IFS= read -r file; do
  # strip leading DIST_DIR/ to get the key
  key="${file#$DIST_DIR/}"

  echo "  -> s3://$BUCKET/$key (Cache-Control: max-age=60)"
  aws s3 cp "$file" "s3://$BUCKET/$key" \
    --region "$REGION" \
    --cache-control "max-age=60"
done < <(find "$DIST_DIR" -type f -name "*.html")

########################################
# 3. Invalidate CloudFront cache
########################################
echo
echo "Creating CloudFront invalidation for /* on distribution $DIST_ID ..."
aws cloudfront create-invalidation \
  --distribution-id "$DIST_ID" \
  --paths "/*"

echo
echo "✅ Deploy complete."