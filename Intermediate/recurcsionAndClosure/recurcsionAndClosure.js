
// 🤯 JavaScript Interview Challenge: Can you write this polyfill ?
// console.log(sum(1)(2)(3)());  // ?
// console.log(sum(1, 2)(3, 4)());  // ?
// console.log(sum(5)());     // ?




const sum = (...args) => {
    let total = args.reduce((acc, curr) => acc + curr, 0)
    const inner = (...nextArgs) => {
        if (nextArgs.length === 0) return total;
        total += nextArgs.reduce((acc, curr) => acc + curr, 0)
        return inner
    }
    return inner
}
console.log(sum(1)(2)(3)());
console.log(sum(1, 2)(3, 4)());  
console.log(sum(5)());    
