// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
// Input: strs = ["flower","flow","flight"]  - Output: "fl"
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: "" - Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0 && prefix.length > 0) {
            console.log({prefix,strs,strsI:strs[i],index:strs[i].indexOf(prefix)})
            prefix = prefix.substring(0, prefix.length - 1);
        }
        if (prefix === "") return "";
    }
    console.log("Return",prefix)
    return prefix;
};
console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
