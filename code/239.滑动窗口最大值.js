/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const length = nums.length;
    const ans = [];
    var max_ans = undefined;
    if (k > length) return [];
    for (let i = 0; i <= length - k; i++) {
        let max = nums[i];
        let left = i + 1;
        let right = i + k;
        if (max_ans && nums[right - 1] >= max_ans) {
            ans.push(nums[right - 1]);
        } else {
            while (left < right) {
                max = Math.max(max, nums[left]);
                left++;
            }
            max_ans = Math.max(max_ans, max);
            ans.push(max);
        }
    }
    return ans;
};
maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
// @lc code=end
