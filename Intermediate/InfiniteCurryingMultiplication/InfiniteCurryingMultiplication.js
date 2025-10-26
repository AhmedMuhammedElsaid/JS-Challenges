
// 🤯 JavaScript Interview Challenge: Can you write this polyfill ?
// "Infinite Currying Multiplication in JavaScript
// console.log(sum(1)(2)(3)());  // ?
// console.log(sum(1, 2)(3, 4)());  // ?
// console.log(sum(5)());     // ?
// Explanation: The function sum should be able to take any number of arguments
// in each invocation and return the sum when invoked with no arguments.



function InfiniteCurryingMultiplication(...args) {
    let sum = args.reduce((acc, curr) => acc + curr, 0);

    function Inner(...innerArgs) {
        if (innerArgs.length === 0) return sum
        sum += innerArgs.reduce((acc, curr) => acc + curr, 0);
        return Inner
    }
    return Inner
}
console.log(InfiniteCurryingMultiplication(1)(2)(3)());
console.log(InfiniteCurryingMultiplication(1, 2)(3, 4)());
console.log(InfiniteCurryingMultiplication(5)());    
