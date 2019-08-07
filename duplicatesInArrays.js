function hasDuplicateValue(array) {
    let existingNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if(existingNumbers[array[i]] === undefined) { 
            existingNumbers[array[i]] = 1;  //stores 1 inside corresponding index if new # is found 
        } else {
            return true;
            
        }
    }
    return existingNumbers
}

let list = [3,4,8,8]
console.log(hasDuplicateValue(list))

//Time complexity is O(n) because is makes N comparisons for N data elements in worst case scenario 