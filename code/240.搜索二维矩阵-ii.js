/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 对每一行进行二分查找法
var searchMatrix = function (matrix, target) {
    const m = matrix.length;
    const n = matrix[1].length;
    for (let row of matrix) {
        const index = search(row, target);
        console.log("index :>> ", index);
        return index === -1 ? false : true;
    }
};
//[0,1,2,3,4,5,6]
var search = function (arr, target) {
    let right = arr.length - 1;
    let left = 0;
    console.log("target :>> ", target);
    while (left <= right) {
        const midIndex = Math.floor((right - left) / 2);
        const midValue = arr[midIndex];
        if (midValue === target) {
            return midIndex;
        } else if (midValue > target) {
            right = midIndex;
        } else {
            left = midIndex;
        }
    }
    return -1;
};
const arr = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];
const result = searchMatrix(arr, 5);
console.log("result :>> ", result);
// @lc code=end
