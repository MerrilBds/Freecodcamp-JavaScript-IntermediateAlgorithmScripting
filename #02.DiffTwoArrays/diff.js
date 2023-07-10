//Compare two arrays and return a new array with any items only found 
//in one of the two given arrays, but not both. 

function diffArray(arr1, arr2) {
    var newArr = [];

    // Check elements in arr1 that are not in arr2
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            newArr.push(arr1[i]);
        }
    }

    // Check elements in arr2 that are not in arr1
    for (let j = 0; j < arr2.length; j++) {
        if (arr1.indexOf(arr2[j]) === -1) {
            newArr.push(arr2[j]);
        }
    }

    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);