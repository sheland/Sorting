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
    let pivotIndex = end //last value in arr
    let pivotValue = arr[end]
    let endPointer = arr[-2] //end pointer start w/ value left of pivot

    
    while (start < end) { // if start reaches value > than piviot, stops incrementing  
        while (arr[start] < pivotValue) { 
            start++
        } 
        while (arr[endPointer] > pivotValue) { //if endPointer reaches value < than piviot, stops decrementing 
            endPointer--
        }
        if (start >= endPointer) { //if start pointer passes endPointer || both pointers meet, pointers stop moving 
            break //exit while loop 
        } else {
            swap(arr,start, endPointer) //start pointer & endPointer swap values 
        }
        
    }
    
    swap(arr,start, pivotIndex) //start pointer's position swaps w/ pivotIndex
    return pivotIndex 

    
}

function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp 
}

let arr = [0,5,2,1,6,3]
console.log(quickSort(arr, 0, arr.length - 1))
