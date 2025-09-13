// 2️⃣ Flatten an Array without Array.flat()
// 👉 Input: [1,2,3,[4,5,6,[7,8,[10,11]]],9]
// 👉 Output: [1,2,3,4,5,6,7,8,10,11,9]

// Recursive 1
function flatten(arr) {
    if (!Array.isArray(arr))  return [arr]
    const flatenArr = [];
    arr.forEach(item => flatenArr.push(...flatten(item)))
    return flatenArr;
}

console.log(flatten([1, 2, 3, [4, [[[36, [[[[[[5]]], 11], 23], 69], 11, 0], 4]], 5, 6, [7, 8, [10, 11]]], 9]))

// Recursive 2
function flattenDeep(arr) {
  const out = [];
  (function dfs(a) {
    for (const x of a) Array.isArray(x) ? dfs(x) : out.push(x);
  })(arr);
  return out;
}

//Iterative (stack, safer for huge depth):

function flattenDeepIter(arr) {
  const out = [];
  const stack = [...arr].reverse();
  while (stack.length) {
    const v = stack.pop();
    if (Array.isArray(v)) stack.push(...v.reverse());
    else out.push(v);
  }
  return out;
}

