/*
 * @Date: 2024-01-17 16:27:28
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-01-17 17:09:21
 * @FilePath: /app-edu-course-detail/Users/a58/work/my-project/2023/code/139.单词拆分.js
 */
/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    var dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    const set = new Set(wordDict);
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            const str = s.substring(j, i);
            if (set.has(str) && dp[j]) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
};
var s = "leetcode";
var wordDict = ["leet", "code"];
const res = wordBreak(s, wordDict);
console.log("res :>> ", res);
// @lc code=end
