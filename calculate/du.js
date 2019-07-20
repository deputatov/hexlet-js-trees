const calculateFilesSize = tree =>
  reduce((acc, n) => (n.type === 'file' ? acc + n.meta.size : acc), tree, 0);

export default tree =>
  tree.children
    .map(n => [n.name, calculateFilesSize(n)])
    .sort(([, size1], [, size2]) => size2 - size1);

// Teacher's solution
