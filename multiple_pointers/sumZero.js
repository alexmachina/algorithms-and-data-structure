/* write a function that takes a sorted array an returns the pair of numbers
inside that array which the sum is equal to zero */

// Solution:
// define the first pointer as 0
// define the second pointer as array.length - 1

// while the first pointer is greater than the second
// check if sum of their items is equal to zero
// if is equal to zero, return a pair with the two items
// else, increase the first pointer by 1 and decrease the second by -1

function sumZero(arr) {
  var startPointer = 0;
  var endPointer = arr.length - 1;

  while (startPointer < endPointer) {
    var sum = arr[startPointer] + arr[endPointer];
    if (sum === 0) {
      return [arr[startPointer], arr[endPointer]];
    } else {
      startPointer++;
      endPointer--;
    }
  }
}

var result = sumZero([-2, -1, 0, 1, 2]);
