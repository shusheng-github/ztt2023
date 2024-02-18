/*
 * @Date: 2024-01-08 19:42:31
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-01-09 12:33:06
 * @FilePath: /app-edu-course-detail/Users/a58/work/my-project/2023/code/152.乘积最大子数组.js
 */
/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    var dpMax = new Array(nums.length);
    var dpMin = new Array(nums.length);
    dpMax[0] = nums[0];
    dpMin[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dpMax[i] = Math.max(
            Math.max(dpMax[i - 1] * nums[i], nums[i]),
            dpMin[i - 1] * nums[i]
        );
        dpMin[i] = Math.min(
            Math.min(dpMin[i - 1] * nums[i], nums[i]),
            dpMax[i - 1] * nums[i]
        );
    }
    let max = dpMax[0];
    for (let i = 1; i < dpMax.length; i++) {
        max = Math.max(max, dpMax[i]);
    }
    return max;
};

// 优化
var maxProduct2 = function (nums) {
    var dpMax = nums[0];
    var dpMin = nums[0];
    var ans = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let temp = dpMax;
        dpMax = Math.max(Math.max(dpMax * nums[i], nums[i]), dpMin * nums[i]);
        dpMin = Math.min(Math.min(dpMin * nums[i], nums[i]), temp * nums[i]);
        ans = Math.max(dpMax, ans);
    }
    return ans;
};
maxProduct2([2, 3, -2, 4]);

// @lc code=end
