/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const length = p.length;
    let left = 0;
    const res = [];
    for (let i = length - 1; i < s.length; i++) {
        const str = s.slice(left, i + 1);
        const result = trans(str);
        const target = trans(p);
        if (result === target) {
            res.push(left);
        }
        left++;
    }

    function trans(str) {
        const arr = str.split("");
        arr.sort();
        return arr.join("");
    }
    return res
};
findAnagrams("abab", "ab");
// @lc code=end