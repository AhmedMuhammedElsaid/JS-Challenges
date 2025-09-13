// create a function that order the array according to the frequency of the elements
// if two elements have the same frequency, order them according to
// their first appearance in the array
// example [4,5,4,3,2,5] => '4,4, 5, 5,2,3'


function repeatationArr(arr) {
    
    if (arr.length <= 0) return '';

    const freqMap = new Map();
    arr.forEach(item => {
        if (!freqMap.has(item)) freqMap.set(item, 0);
        freqMap.set(item, freqMap.get(item) + 1)
    })
    
    const sorted = arr.sort((a, b) => {
        const freqA=freqMap.get(a)
        const freqB = freqMap.get(b)
        if(freqA !== freqB) return b-a
        return a-b
    })
    console.log(sorted)
    return sorted.join(",")
}
console.log(repeatationArr([4,5,4,3,2,5]))
