// write a function that receives two arrays
// the function should return true if the elements of the first array
// exists squared in the second array and if the elements of the first array
// exists squared the same amount of times in the second array.

// Examples
// in: [1, 2, 3], [1, 4, 9]
// out: true

// in [1, 2, 2, 3], [1, 4, 9, 4]
// out: true

// in [1, 2, 2], [1, 4]
// out false

function same(arr1, arr2) {
  // check if arrays have different length
  if (arr1.length !== arr2.length) {
    // if they do, return false.
    return false;
  }

  // loop through first array
  for (n of arr1) {
    // check if the element squared exists in second array
    var nSquaredIdx = arr2.indexOf(n ** 2);
    if (nSquaredIdx > -1) {
      // if they do
      // remove the element squared from the second array
      arr2.splice(nSquaredIdx, 1);
    }
    // if they don't, return false
    else {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3], [1, 9, 9]));
