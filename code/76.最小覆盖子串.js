/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=star
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (s.length < t.length) return "";
    let map = new Map();
    let map2 = new Map();
    for (let value of t) {
        if (!map.has(value)) {
            map.set(value, 1);
        } else {
            map.set(value, map.get(value) + 1);
        }
    }
    for (let i = 0; i < s.length; i++) {}
};

// s = "ADOBECODEBANC", t = "ABC", 输出："BANC"
// @lc code=end
