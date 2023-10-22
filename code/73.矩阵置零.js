/*
 * @Date: 2023-10-16 20:01:19
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-18 16:14:02
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
// 方案1：O(m+n),空间复杂度O(m+n)
var setZeroes = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const row = new Array(m).fill(false);
    const column = new Array(n).fill(false);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                row[i] = column[j] = true;
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++)
            if (row[i] || column[j]) {
                matrix[i][j] = 0;
            }
    }
    return matrix;
};

// 方案2：空间复杂度常数级别
// 思路： 我们可以用矩阵的第一行和第一列代替方法一中的两个标记数组，以达到 O(1)的额外空间。但这样会导致原数组的第一行和第一列被修改
// 无法记录它们是否原本包含0,因此我们需要额外使用两个标记变量分别记录第一行和第一列是否原本包含0
var setZeroes2 = function (matrix) {
    const m = matrix.length,
        n = matrix[0].length;
    let flagCol0 = false,
        flagRow0 = false;
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            flagCol0 = true;
        }
    }
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            flagRow0 = true;
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (flagCol0) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
    if (flagRow0) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
    console.log("matrix :>> ", matrix);
};
// 1
const aa = [
    [2, 0, 0, 3],
    [0, 1, 0, 2],
    [1, 3, 4, 5]
];
// 2
const aa2 = [
    [2, 0, 0, 3],
    [0, 0, 0, 0],
    [1, 0, 0, 5]
];
const matrix = [
    [2, 0, 2, 3],
    [3, 1, 0, 2],
    [1, 3, 4, 5]
];
setZeroes2(matrix);
// @lc code=end
