const getHiddenFilesCount = (tree) => {
  const name = getName(tree);
  const hidden = _.startsWith(name, '.')
  if (isFile(tree)) {
    return hidden ? 1 : 0;
  }
  const children = getChildren(tree);
  const descendantCounts = children.map(getHiddenFilesCount);
  return _.sum(descendantCounts);
};

export default getHiddenFilesCount;