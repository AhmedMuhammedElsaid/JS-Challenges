// 2️⃣ Flatten an Array without Array.flat()
// 👉 Input: [1,2,3,[4,5,6,[7,8,[10,11]]],9]
// 👉 Output: [1,2,3,4,5,6,7,8,10,11,9]


function flatten(arr) {
    if (!Array.isArray(arr))  return [arr]
    const flatenArr = [];
    arr.forEach(item => flatenArr.push(...flatten(item)))
    return flatenArr;
}

console.log(flatten([1,2,3,[4,[[[36,[[[[[[5]]],11],23],69],11,0],4]],5,6,[7,8,[10,11]]],9]))
