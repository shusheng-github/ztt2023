/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let result = strs[0];
    for (var i = 0; i < strs.length; i++) {
        while (strs[i].indexOf(result) < 0) {
            result = result.substring(0, result.length - 1);
            if (strs.length == 0) {
                return "";
            }
        }
    }
    console.log("result :>> ", result);
    return result;
};
const strs = ["c", "acc", "ccc"];
longestCommonPrefix(strs);
// @lc code=end
