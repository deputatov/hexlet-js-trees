const convert = arr => Object.assign(
    {}, ...arr.map(([k, v]) => (v instanceof Array ? { [k]: convert(v) } : { [k]: v })),
  );
  
export default convert;

// Teacher's solution
// const convert = items => items.reduce(
//     (acc, [key, value]) => ({ ...acc, [key]: value instanceof Array ? convert(value) : value }),
//     {},
//   );
  
//   export default convert;