/*
write a function that takes a nums which is an integer array and a target , 
it returns the indices of the two numbers such that they add up to a specific target.

exmaple:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]

You may assume that each input would have exactly one solution,
    and you may not use the same element twice.

*/

function twoSum(nums, target) { 
    const indicesSum = new Map();
    for (let i = 0; i < nums.length; i++){
        const diff = target - nums[i];
        if (indicesSum.has(diff)) {
            return [indicesSum.get(diff),i]
        }else indicesSum.set(nums[i],i)
    }
    return []
}
console.log(twoSum([1,2,3],5))
console.log(twoSum([4,6,6],10))
console.log(twoSum([1,2,4],7))
