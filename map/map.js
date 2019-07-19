const map = (f, node) => {
  if (node.type === "directory") {
    return { ...f(node), children: node.children.map(c => map(f, c)) };
  }
  return f(node);
};
// export default map;

// Teacher's solution
// const map = (f, node) => {
//   const updatedNode = f(node);
//   return node.type === "directory"
//     ? { ...updatedNode, children: node.children.map(n => map(f, n)) }
//     : updatedNode;
// };
// export default map;
