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
  for (let row of matrix) {
    const index = search(row, target);
    if (index >= 0) return true
  }
  return false
};
var search = function (arr, target) {
  let right = arr.length - 1;
  let left = 0;
  while (left <= right) {
    const midIndex = Math.floor((right - left) / 2) + left;
    const midValue = arr[midIndex];
    if (midValue === target) {
      return midIndex;
    } else if (midValue > target) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }
  return -1;
};
// 从左向右增大，从上到下增大
var searchMatrix2 = function (arr, target) {
  let i = arr.length - 1;
  let j = 0;
  while (i >= 0 && j < arr[0].length) {
    if (arr[i][j] > target) i--;
    else if (arr[i][j] < target) j++;
    else return true
  }
  return false
}
const arr = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]];
const result = searchMatrix2(arr, 5);
console.log("result :>> ", result);
// @lc code=end
