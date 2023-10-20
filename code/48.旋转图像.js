/*
 * @Date: 2023-10-20 15:05:27
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-20 19:02:19
 * @FilePath: /hx-personal-center/Users/a58/work/my-project/2023/code/48.旋转图像.js
 */
/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 1.借助辅助函数
var rotate = function (matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    // 原数组第i行第j个数旋转之后变为倒数第i列第j个位置
    // 原来的第几列是现在的第几行
    // matrix[row][col] => matrix[col][n-row-1]
    const arrNew = new Array(n).fill(0).map(() => new Array(m).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            arrNew[j][n - i - 1] = matrix[i][j];
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            matrix[i][j] = arrNew[i][j];
        }
    }
    console.log("matrix :>> ", matrix);
};
// 2.原地翻转
// 先通过水平轴翻转，值翻转上半部分即可
// 再通过主对角线翻转，只翻转对角线左侧部分即可
var rotate2 = function (matrix) {
    const n = matrix.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[n - i - 1][j];
            matrix[n - i - 1][j] = temp;
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    return matrix;
};
const matrix = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
];

// 结果
const result = [
    [15, 13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7, 10, 11]
];
rotate2(matrix);
// @lc code=end
