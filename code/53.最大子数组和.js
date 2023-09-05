/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // sum用于记录当前位置的最大子数组和，如果当前位置前面的最大数组和sum小于0，
    // 说明前面的最大子数组和对当前位置是副作用，
    // 直接将当前位置作为本身位置的最大子数组和
    let sum = 0;
    // ans是用于记录每个位置上的最大子数组和，取其中的最大值，
    // 起始值为数组的第一个元素
    let ans = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (sum > 0) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }
        ans = Math.max(ans, sum);
    }
    return ans;
};

// 动态规划，和上面的思路一样
var maxSubArray2 = function (nums) {
    let dp = [];
    dp[0] = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // dp[i]的值取nums[i]以及之前的和 与 nums[i] 的最大值
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        max = Math.max(max, dp[i]);
    }
    console.log('max :>> ', max);
    return max
};

maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// @lc code=end
