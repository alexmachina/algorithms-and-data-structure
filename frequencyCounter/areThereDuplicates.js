function areThereDuplicates(...args) {
  const strArgs = String(args).replace(/,/g, "");
  const frequency = {};

  for (let key of strArgs) {
    if (frequency[key]) {
      return true;
    }

    frequency[key] = true;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3, 3));
