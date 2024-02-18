/*
 * @Date: 2023-10-23 16:41:23
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-12-07 10:35:29
 * @FilePath: /m-edu-course-detail/Users/a58/work/my-project/2023/code/49.字母异位词分组.js
 */
/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Object();
    for (let str of strs) {
        const count = new Array(26).fill(0);
        for (let s of str) {
            count[s.charCodeAt() - "a".charCodeAt()]++;
        }
        map[count] ? map[count].push(str) : (map[count] = [str]);
    }
    return Object.values(map);
};
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(strs);
console.log("result", result);
// @lc code=end
