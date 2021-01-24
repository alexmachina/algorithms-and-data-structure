function same(arr1, arr2) {
  // if arrays have differente length, return false.
  if (arr1.length !== arr2.length) {
    return false;
  }

  // create a frequency object for the first array
  // using the element as key and the times it appears as value.
  const frequency1 = {};
  for (n of arr1) {
    frequency1[n] = (frequency1[n] > 0 && ++frequency1[n]) || 1;
  }

  // create a frequency object for the second array
  // using the element as key and the times it appears as value.
  const frequency2 = {};
  for (n of arr2) {
    frequency2[n] = (frequency2[n] > 0 && ++frequency2[n]) || 1;
  }

  // loop through the first frequency object
  for (key in frequency1) {
    // check if the current key squared is NOT present in the second frequency object
    // OR
    // check if the current key's value is NOT the same as in the second object
    // return false
    if (!frequency2[key ** 2] || frequency2[key ** 2] !== frequency1[key]) {
      return false;
    }
  }

  // return true
  return true;
}

console.log(same([1, 2, 3], [1, 4, 8]));
