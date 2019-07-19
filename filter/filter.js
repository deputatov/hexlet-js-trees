const filter = (f, node) => {
  if (!f(node)) return null;
  return node.type === 'directory'
    ? { ...node, children: node.children.map(c => filter(f, c)).filter(v => v) }
    : node;
};

export default filter;

// Techer's solution
// const filter = (f, node) => {
//   if (!f(node)) {
//     return null;
//   }
//   if (node.type !== 'directory') {
//     return node;
//   }

//   const children = node.children.map(n => filter(f, n)).filter(v => v);
//   return { ...node, children };
// };

// export default filter;
