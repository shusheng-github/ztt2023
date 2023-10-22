/*
 * @Date: 2023-10-08 14:50:53
 * @LastEditors: Shusheng
 * @LastEditTime: 2023-10-22 23:29:10
 * @FilePath: /common-business-yanzhen-buy/Users/a58/work/my-project/2023/code/189.轮转数组.js
 */
/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const n = nums.length;
    const newArr = new Array(n);
    for (let i = 0; i < n; i++) {
        newArr[(i + k) % n] = nums[i];
    }
    for (let i = 0; i < n; i++) {
        nums[i] = newArr[i];
    }
};
var rotate2 = function (nums, k) {
    const n = nums.length;
    k = k % n;
    let newArr = nums.splice(0, k + 1);
    newArr = [...nums, ...newArr];
    for (let i = 0; i < n; i++) {
        nums[i] = newArr[i];
    }
};

const arr = [1, 2, 3, 4, 5, 6, 7];
[5, 6, 7, 1, 2, 3, 4];
rotate(arr, 3);
// @lc code=end
