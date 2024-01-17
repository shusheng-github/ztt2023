/*
 * @Date: 2023-09-19 10:37:26
 * @LastEditors: Shusheng
 * @LastEditTime: 2024-01-07 22:31:36
 * @FilePath: /common-business-yanzhen-buy/Users/a58/work/my-project/2023/code/300.最长递增子序列.js
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
var lengthOfLIS = function (nums) {
  const length = nums.length;
  let max = 1;
  // dp[i] 存储的是下标为i的递增子序列的长度
  let dp = new Array(length).fill(1);
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    console.log("dp[i] :>> ", dp[i]);
    max = Math.max(max, dp[i]);
  }
  console.log("max :>> ", max);
  return max;
};
//           0, 1, 2, 3, 4, 5, 6, 7, 8
lengthOfLIS([0, 1, 0, 3, 2, 3]);
// @lc code=end


/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  var dp = new Array(nums.length + 1).fill(0);
  dp[0] = 0;
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    max = Math.max(max, dp[i])
  }
  return max;
};
