/*
    write a function that takes a sorted array of numbers
    and returns the count of unique values of the array

    Solution:

    define the first pointer (i) as 0
    define the second pointer (j) as 1

    loop through the array with j
    check if the item of i and the item of j are different
    if they do, set the value of i to the value of j and move i by one position.
    move j by one position

    return i
                 i     
    [1, 2, 3, 4, 5, 4, 4, 5]
                          j
    
*/

function countUnique(array) {
  if (array.length === 0) {
    return 0;
  }

  var i = 0;
  var j = 1;

  while (j < array.length) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }

    j++;
  }

  return i + 1;
}

console.log(countUnique([]));
