export default deps => {
  const dfs = (f, node, acc) => {
    const children = deps[node];
    if (children) {
      children.reduce((iAcc, n) => dfs(f, n, iAcc), acc);
    }
    return f(acc, node);
  };
  const keys = Object.keys(deps);
  const func = (acc, n) => acc.add(n);
  return [...keys.reduce((acc, n) => dfs(func, n, acc), new Set())];
};


// Teacher's solution
// export default (deps) => {
//   const add = (acc, node) => {
//     const subDeps = deps[node] || [];
//     const subAcc = subDeps.reduce(add, []);
//     return { ...acc, ...subAcc, [node]: true };
//   };
//   const set = Object.keys(deps).reduce(add, {});
//   return Object.keys(set);
// };