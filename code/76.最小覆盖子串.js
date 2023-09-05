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
    let result = "";
    let curStr = "";
    for (let value of t) {
        if (!map.has(value)) {
            map.set(value, 1);
        } else {
            map.set(value, map.get(value) + 1);
        }
    }
    let size = map.size;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            map.set(s[right], map.get(s[right]) - 1);
        }
        if (map.get(s[right]) === 0) {
            size--;
        }
        while (!size) {
            curStr = s.substring(left, right + 1);
            if (map.has(s[left])) {
                map.set(s[left], map.get(s[left]) + 1);
                if (map.get(s[left]) === 1) {
                    size++; // 跳出while,进行下次for循环
                    if (!result || result.length > curStr.length) {
                        result = curStr;
                    }
                }
            }
            left++;
        }
    }
    console.log("result", result);
};

minWindow("ADOBECODEBANC", "ABC");

// s = "ADOBECODEBANC", t = "ABC", 输出："BANC"
// @lc code=end
