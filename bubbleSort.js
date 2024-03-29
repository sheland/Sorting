function bubbleSortBasic(array) {
  for(var i = 0; i < array.length; i++) { //#of passthroughs 
    for(var j = 1; j < array.length; j++) { //comparison 
      if(array[j - 1] > array[j]) {
        let temp = array[j - 1]
        array[j - 1] = array[j]
        array[j] = temp
      }
    }
  }
  return array;
}
let list = [9, 2, 5, 6, 4, 3, 7, 10, 8];
console.log(bubbleSortBasic(list))

//Time complexity is O(n^2) because for N elements, you perform n^2 comparisons. Perform outer loop N times to get through
//entire array & for each iteration, must iterate another N times w/ inner loop. N steps * N steps = N^2
