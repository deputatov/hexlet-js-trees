// const sortDeps = (deps) => {

//   const keys = Object.keys(deps);

// }

// console.log(sortDeps(deps1));

// const reduce = (f, tree, acc) => {
//   const [, children] = tree;
//   const newAcc = f(acc, tree);

//   if (!children) {
//     return newAcc;
//   }
//   console.log(tree)
//   return children.reduce((iAcc, n) => reduce(f, n, iAcc), newAcc);
// };

// const tree = ['A', [
//   ['B', [['E'], ['F']]],
//   ['C'],
//   ['D', [['G'], ['J']]],
// ]];

// reduce((acc, n) => acc + 1, tree, 0);

const deps1 = {
  mongo: [],
  tzinfo: ['thread_safe'],
  uglifier: ['execjs'],
  execjs: ['thread_safe', 'json'],
  redis: []
};

// const sortDeps = deps => {
//   const reduce = (f, node, acc) => {
//     const children = deps1[node];
//     if (!children || children.length === 0) {
//       return f(acc, node);
//     }
//     children.reduce((iAcc, n) => reduce(f, n, iAcc), acc);
//     return f(acc, node);
//   };
//   const keys = Object.keys(deps);
//   const func = (acc, n) => (acc.includes(n) ? acc : [...acc, n]);
//   // keys.reduce()
//   return keys.reduce((acc, n) => reduce(func, n, acc), []);
// };


const sortDeps = deps => {
  const dfs = (f, node, acc) => {
    const children = deps[node];
    if (children) {
      children.reduce((iAcc, n) => dfs(f, n, iAcc), acc);
    }
    return f(acc, node);
  };
  return [...Object.keys(deps).reduce((acc, n) => dfs((acc, n) => acc.add(n), n, acc), new Set())];
};

console.log(sortDeps(deps1));

// ['mongo', 'thread_safe', 'tzinfo', 'json', 'execjs', 'uglifier', 'redis']