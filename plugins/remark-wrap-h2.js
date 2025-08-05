import {visit} from 'unist-util-visit';

module.exports = function remarkHeaderWrap() {
  return (tree) => {
    visit(tree, 'heading', (node, index, parent) => {
      if (node.depth === 2 && parent) {
        // Wrap the heading node in an MDX JSX element: <Header>...</Header>
        const wrapped = {
          type: 'mdxJsxFlowElement',
          name: 'header',
          attributes: [],
          children: [node],
        };

        parent.children[index] = wrapped;
      }
    });
  };
};
