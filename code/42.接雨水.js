/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const length = height.length;
    let left = 0;
    let right = left + 1;
    let totals = 0;
    let add = 0;
    while (left < length - 2 && right < length - 1) {
        if (height[left] <= height[left]) {
            left++;
            right++;
        } else {
            right++;
            if (height[left] > height[left]) {
                add += height[left] - height[right];
            } else {
                totals += add;
                left = right;
                right = left + 1;
            }
        }
    }
    console.log('totals :>> ', totals);
};
var height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; // 6
var height2 = [4, 2, 0, 3, 2, 5]; // 9
trap(height);
// @lc code=end
