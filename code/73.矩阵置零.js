/*
 * @Date: 2023-10-16 20:01:19
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-17 19:26:15
 * @FilePath: /vite-project/Users/a58/work/my-project/2023/code/73.矩阵置零.js
 */
/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const n = matrix.length;
    const res = new Array(n);
    for (let i = 0; i < n; i++) {
        const m = n[i].length;
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                res[i] = new Array(m).fill(0);
                continue;
            } else {
            }
        }
    }
};
const matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
];
setZeroes(matrix);
// @lc code=end
