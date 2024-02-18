/*
 * @Date: 2023-09-19 10:37:26
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-01-17 19:30:08
 * @FilePath: /app-edu-course-detail/Users/a58/work/my-project/2023/code/300.最长递增子序列.js
 */
/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 公式：如果nums[i]>nums[i-1], fn=f(n-1)+1
// 如果nums[i]<=nums[i-1], fn=f(n-1)
function fn(nums) {
    var length = nums.length;
    var dp = new Array(length).fill(1);

    for (let i = 1; i < length; i++) {
        if (nums[i] > nums[i - 1]) {
            dp[i] = dp[i - 1] + 1;
        } else {
            dp[i] = dp[i - 1];
        }
    }
    console.log("dp :>> ", dp);
    return dp[length - 1];
}
var nums = [10, 9, 2, 5, 3, 7, 101, 18];
//          1,  1, 1, 2, 2, 3,  4,   4,
var res = fn(nums);
console.log("res :>> ", res);
