const convert = arr => Object.assign(
    {}, ...arr.map(([key, value]) => {
      if (value instanceof Array) {
        return { [key]: convert(value) };
      }
      return { [key]: value };
    }),
  );
  
export default convert;

// Teacher's solution
// const convert = items => items.reduce(
//     (acc, [key, value]) => ({ ...acc, [key]: value instanceof Array ? convert(value) : value }),
//     {},
//   );
  
//   export default convert;