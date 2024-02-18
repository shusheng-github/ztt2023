/*
 * @Date: 2023-12-11 19:29:04
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-12-12 10:55:04
 * @FilePath: /m-edu-course-detail/Users/a58/work/my-project/2023/code/74.搜索二维矩阵.js
 */
/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let column = matrix.length - 1;
    let row = 0;
    while (column >= 0 && row <= matrix[0].length - 1) {
        if (matrix[column][row] === target) {
            return true;
        } else if (matrix[column][row] > target) {
            column--;
        } else {
            row++;
        }
    }
    return false;
};
var matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
];
var target = 21;
const result = searchMatrix(matrix, target);
console.log("result :>> ", result);
// true
// @lc code=end
