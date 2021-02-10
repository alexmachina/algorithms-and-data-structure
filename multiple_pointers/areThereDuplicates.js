function areThereDuplicates(...args) {
  const strArgs = String(args).replace(/,/g, "");
  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (strArgs[start] === strArgs[next]) {
      return true;
    }

    start++;
    next++;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3, 4));
