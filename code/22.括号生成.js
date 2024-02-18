/*
 * @Date: 2024-01-29 19:06:05
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-01-30 11:35:24
 * @FilePath: /vite/Users/a58/work/my-project/2023/code/22.括号生成.js
 */
/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    var res = [];
    backtracking(n, 0, 0, "");
    function backtracking(n, leftNum, rightNum, path) {
        if (path.length >= n * 2) {
            res.push(path);
            return;
        }
        if (leftNum < n) {
            path += "(";
            leftNum++;
            backtracking(n, leftNum, rightNum, path);
            path = path.substring(0, path.length - 1);
            leftNum--;
        }
        if (rightNum < leftNum) {
            path += ")";
            rightNum++;
            backtracking(n, leftNum, rightNum, path);
            path == path.substring(0, path.length - 1);
            rightNum--;
        }
    }
    return res;
};
var result = generateParenthesis(3);
// ((( )))
// (( )
console.log("result :>> ", result);
// @lc code=end
