const calculateFilesSize = tree =>
  reduce((acc, n) => (n.type === 'file' ? acc + n.meta.size : acc), tree, 0);

export default tree =>
  tree.children
    .map(n => [n.name, calculateFilesSize(n)])
    .sort(([, size1], [, size2]) => size2 - size1);

// Teacher's solution
// const calculatefilesSize = node => reduce((acc, n) => {
//     if (n.type === 'directory') {
//       return acc;
//     }

//     return acc + n.meta.size;
//   }, node, 0);

//   const du = (node) => {
//     const result = node.children.map(n => [n.name, calculatefilesSize(n)]);
//     // Обычный дестракчеринг. JS позволяет пропускать имена если они не используются
//     result.sort(([, size1], [, size2]) => size2 - size1);
//     return result;
//   };

//   export default du;

