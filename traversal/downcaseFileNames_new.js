const downcaseFileNames = (tree) => {
  const name = getName(tree);
  const newMeta = _.cloneDeep(getMeta(tree));
  if (isFile(tree)) {
    return mkfile(name.toLowerCase(), newMeta);
  }
  const children = getChildren(tree);
  const newChildren = children.map((child) => downcaseFileNames(child));
  const newTree = mkdir(name, newChildren, newMeta);
  return newTree;
};

export default downcaseFileNames;