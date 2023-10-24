/*
 * @Date: 2023-10-08 14:50:53
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-24 15:39:42
 * @FilePath: /hx-personal-center/Users/a58/work/my-project/2023/code/189.轮转数组.js
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
var rotate3 = function (nums, k) {
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
// 翻转数组
let reverse = function (nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
};
let rotate = function (nums, k) {
    k %= nums.length;
    // 先将整个数组翻转
    reverse(nums, 0, nums.length - 1);
    // k之前的翻转
    reverse(nums, 0, k - 1);
    // 之后的翻转
    reverse(nums, k, nums.length - 1);
    return nums;
};
// k = 3
// i=0; i+k=3; newArr[3]=nums[0]
// i=1; i+k=4; newArr[4]=nums[1]
// i=3; i+k=6; newArr[0]=nums[3]
// i=4; i+k=7; newArr[1]=nums[4]
const arr = [1, 2, 3, 4, 5, 6, 7];
[5, 6, 7, 1, 2, 3, 4];
rotate(arr, 3);
// @lc code=end
