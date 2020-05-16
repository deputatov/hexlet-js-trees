const findFilesByName = (root, substr) => {
  const iter = (n, acc, currentPath) => {
    const newPath = path.join(currentPath, n.name);
    if (n.type === 'file') {
      return n.name.includes(substr) ? [...acc, newPath] : acc;
    }
    return n.children.reduce((cAcc, nn) => iter(nn, cAcc, newPath), acc);
  };
  return iter(root, [], '');
};

export default findFilesByName;

const findFilesByName = (tree, substr) => {
  const iter = (node, ancestry) => {
    const name = getName(node);
    const newAncestry = path.join(ancestry, name);
    if (isFile(node)) {
      return name.includes(substr) ? newAncestry : [];
    }
    const children = getChildren(node);
    return children.flatMap((child) => iter(child, newAncestry));
  };
  return iter(tree, '');
};

export default findFilesByName;
