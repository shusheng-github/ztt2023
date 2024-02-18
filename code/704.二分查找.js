/*
 * @Date: 2023-12-13 11:10:17
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-12-13 11:13:55
 * @FilePath: /core/Users/a58/work/my-project/2023/code/704.二分查找.js
 */
/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (target === mid) {
            return mid;
        } else if (target < mid) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};
// @lc code=end
