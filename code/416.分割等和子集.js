/*
 * @Date: 2024-01-18 11:01:31
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-01-18 15:34:21
 * @FilePath: /erwa-service/Users/a58/work/my-project/2023/code/416.分割等和子集.js
 */
/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 看是否能拆出来一个数组的和等于总和的一半
// dp[i][j] 代表 数组0-i之间能不能组成和为j
// dp[i][j]=dp[i-1][j] || dp[i-1][j-nums[i]]
var canPartition = function (nums) {
    var total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    if (total % 2 === 1) return false;
    var target = total / 2;
    var dp = new Array(nums.length)
        .fill(0)
        .map(() => new Array(target + 1).fill(false));
    if (nums[0] <= target) {
        dp[0][nums[0]] = true;
    }
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j <= target; j++) {
            dp[i][j] = dp[i - 1][j];
            if (nums[i] === j) {
                dp[i][j] = true;
            }
            if (nums[i] < j) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
            }
        }
    }
    return dp[nums.length - 1][target];
};
var nums = [1, 5, 5, 11];
var res = canPartition(nums);
console.log("res :>> ", res);
// @lc code=end
