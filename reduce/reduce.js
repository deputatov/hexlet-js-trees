const reduce = (f, node, acc) => {
  const newAcc = f(acc, node);
  if (node.type === 'file') {
    return newAcc;
  }
  return node.children.reduce((iAcc, n) => reduce(f, n, iAcc), newAcc);
};

export default reduce;
