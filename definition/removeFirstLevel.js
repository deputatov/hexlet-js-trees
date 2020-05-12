const removeFirstLevel = (tree) => tree
.reduce((acc, element) => (Array.isArray(element)
  ? [...acc, element]
  : acc), [])
.flat();
  
console.log(removeFirstLevel([]));

console.log(removeFirstLevel([1, 100, 3]));

console.log(JSON.stringify(removeFirstLevel([[1, [3, 2]], 2, { a: 1 }, [3, 5], 2])));