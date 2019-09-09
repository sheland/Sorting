function quickSort(arr, start, end) {
    if (start >= end) {
        return
    }
     

    let index = partition(arr, start, end)

    quickSort(arr, start, index - 1)
    quickSort(arr, index + 1, end)
    return arr
}

function partition(arr, start, end) {
    let pivotIndex = end 
    let pivotValue = arr[end]
    let endPointer = arr[end - 1] //end pointer start w/ value left of pivot
    
    while (start <= end) {
        if (arr[start] < pivotValue) { //increment until value > than pivot is found
            start++
        } else {
            swap(arr,start, endPointer)
        }
        if (arr[endPointer] > pivotValue) { //decrement until value < than pivot is found
            endPointer--
        } else {
            swap(arr,start, endPointer)
        }
    }
    
    swap(arr,start, pivotIndex)
    return start

    
}

function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp 
}

let arr = [0,5,2,1,6,3]
console.log(quickSort(arr, 0, arr.length - 1))
