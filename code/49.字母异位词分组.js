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
var groupAnagrams = function(strs) {
  const map = new Map();
  for (let str of strs) {
      let array = Array.from(str);
      array.sort();
      let key = array.toString();
      let list = map.get(key) ? map.get(key) : new Array();
      list.push(str);
      map.set(key, list);
  }
  return Array.from(map.values());
};
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
const result = groupAnagrams(strs)
console.log('result', result)
// @lc code=end

