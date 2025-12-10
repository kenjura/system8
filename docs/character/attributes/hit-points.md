---
name: Hit Points
abbr: HP
brief: A measure of your character's current health and vitality
formula: "(maxHP, damage) => maxHP - damage"
---

# Hit Points (HP)

Hit Points represent your character's current health, stamina, and ability to continue fighting. As you take damage, your HP decreases. When your HP reaches 0, you fall unconscious and may die if not stabilized.

## How It Works

- **Starting HP**: Your HP starts at your Maximum Hit Points (MaxHP) after a full rest.
- **Taking Damage**: When you take damage, subtract it from your current HP.
- **Healing**: Various effects can restore HP, up to your MaxHP.
- **Reaching 0 HP**: When your HP drops to 0, you fall unconscious. You must make death saving throws to stabilize, or allies can stabilize you with healing or a Medicine check.
- **Negative HP**: Some effects may reduce you below 0 HP. Massive damage that reduces you to negative HP equal to your MaxHP results in instant death.

## Temporary Hit Points

Some abilities grant Temporary Hit Points (Temp HP). These are a buffer that absorbs damage before your actual HP. Temp HP:
- Cannot be healed; they are granted by specific effects
- Do not stack; if you gain new Temp HP, choose which pool to keep
- Expire after a rest or as specified by the granting effect

## Recovery

- **Short Rest**: You may spend Hit Dice to recover HP during a short rest.
- **Long Rest**: You recover all HP and half your spent Hit Dice after a long rest.
