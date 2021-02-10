const areThereDuplicates = (...arguments) =>
  new Set(arguments).size !== arguments.length;

console.log(areThereDuplicates(1, 1, 2, 3, 3));
