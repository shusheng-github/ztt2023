/*
 * @Date: 2023-10-23 16:41:23
 * @LastEditors: Shusheng
 * @LastEditTime: 2024-02-18 21:39:10
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
var groupAnagrams1 = function (strs) {
  const map = new Map();
  for (let str of strs) {
    const array = Array.from(str);
    array.sort()
    const key = array.toString();
    let res = map.has(key) ? map.get(key) : new Array();
    res.push(str)
    map.set(key, res)
  }
  console.log('map.values', map.values())
  return Array.from(map.values())
};
var groupAnagrams2 = function (strs) {
  const map = new Object();
  for (let str of strs) {
    const count = new Array(26).fill(0);
    for (let s of str) {
      count[s.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    console.log('count', count)
    map[count] ? map[count].push(str) : map[count] = [str]
  }
  return Object.values(map)
};
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
const result = groupAnagrams2(strs)
console.log('result', result)
// @lc code=end
