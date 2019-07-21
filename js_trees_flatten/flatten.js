const reduce = (f, list, acc) => (Array.isArray(list)
  ? list.reduce((iAcc, n) => reduce(f, n, iAcc), acc)
  : f(acc, list));

export default list => reduce((acc, n) => [...acc, n], list, []);

// Teacher's solution
// const flatten = list => list.reduce((acc, element) => {
//   const result = (Array.isArray(element) ? [...acc, ...flatten(element)] : [...acc, element]);
//   return result;
// }, []);

// export default flatten;
