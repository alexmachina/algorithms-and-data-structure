function averagePair(arr, avgWanted) {
  /*
      Solution: 
       avgWanted = 4
       [1, 2, 3, 4, 5] avg=3
        i           j
       // to small, move i
       
       [1, 2, 3, 4, 5] avg=3.5
           i        j
       // to small, move i
       
       [1, 2, 3, 4, 5] avg=4
              i     j
       // found! return current pair
       
       avgWanted = 2
       [1, 2, 3, 4, 5] avg=3
        i           j
       // to big, move j
       
       [1, 2, 3, 4, 5] avg=2.5
        i        j
       // to big, move j
       
       [1, 2, 3, 4, 5] avg=2
        i     j
       // found! return current pair
       
       
       avgWanted = 4.5
       [1, 3, 3, 6] avg=3.5
        i        j
        too small, move i
       [1, 3, 3, 6] // avg=4.5
           i     j
       // found, return pair
       
    */

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === avgWanted) return true;
    if (avg < avgWanted) start++;
    if (avg > avgWanted) end--;
  }

  return false;
}
