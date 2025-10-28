/*
find the first occurrence of true in an array of boolean values
example:
Input: [false, false, true, true, true]
Output: 2
example 2:
Input: [false, false, false]
Output: -1
*/

// it also applys to find the minimual value in a rotated sorted array
function findIndexOfFirstTrueValue(values) {
    let left = 0;
    let right = values.length - 1;
    let indexOfFirstTruthyValue = -1;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (values[mid]) {
            indexOfFirstTruthyValue = mid ;
            right = mid - 1;
        }else left=mid+1
    }
    return indexOfFirstTruthyValue
}
console.log(findIndexOfFirstTrueValue( [false, false, true, true, true]))
console.log(findIndexOfFirstTrueValue( [false, false,false,false,true,true]))
console.log(findIndexOfFirstTrueValue( [true,true,true,false,false]))
console.log(findIndexOfFirstTrueValue( [false, false, false])) //edge case
