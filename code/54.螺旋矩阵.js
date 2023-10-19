/*
 * @Date: 2023-10-19 16:41:12
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-19 17:32:48
 * @FilePath: /hx-personal-center/Users/a58/work/my-project/2023/code/54.螺旋矩阵.js
 */
/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let ans = [];
    let cow = matrix[0].length;
    let col = matrix.length;
    let left = 0,
        top = 0,
        right = cow - 1,
        bottom = col - 1;

    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) ans.push(matrix[top][i]);
        if (++top > bottom) break;
        for (let i = top; i <= bottom; i++) ans.push(matrix[i][right]);
        if (--right < left) break;
        for (let i = right; i >= left; i--) ans.push(matrix[bottom][i]);
        if (bottom-- < top) break;
        for (let i = bottom; i >= top; i--) ans.push(matrix[i][left]);
        if (++left > right) break;
    }
    console.log("ans :>> ", ans);
    return ans;
};
//
const result = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
spiralOrder(matrix);
// @lc code=end
