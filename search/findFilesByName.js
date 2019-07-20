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
