/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const length = nums.length;
    if (length === 1) {
        return nums[1];
    }
    nums.sort((a, b) => a - b);
    for (let i = 0; i < length; i = i + 2) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
};

var nums = [4, 1, 2, 1, 2];
const result = singleNumber(nums);
// @lc code=end
