var selectionSort = function (arr) {
    let arrLast = arr.length 

    for(let i = 0; i < arrLast; i++) {
        let lowestNumberIndex = i

        for(let j = i + 1; j< arrLast; j++) {
            if (arr[j] < arr[lowestNumberIndex]) { //comparison 
                lowestNumberIndex = j
            }      
        }
        if (lowestNumberIndex != i) { //add condition check 
            let temp = arr[i] 
            arr[i] = arr[lowestNumberIndex] //swap
            arr[lowestNumberIndex] = temp
        }
    }
    return arr

}
let arr = [2,6,1,3]
console.log(selectionSort(arr))

//Time complexity O(n^2) b/c O(n^2) in comparisons & O(n) in swaps. Space complexity O(1) bc no extra space is need since this 
//is a in-place sorting algo
