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
//  队列：保证队列中第一项是最大项，判断最大项是否还合法。
var maxSlidingWindow2 = function (nums, k) {
    let res = new Array(nums.length - k + 1).fill(0);
    let queue = [];
    for (let i = 0; i < nums.length; i++) {
        while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
            queue.pop();
        }
        queue.push(i);
        if (queue[0] <= i - k) {
            queue.shift();
        }
        if (i + 1 >= k) {
            res[i + 1 - k] = nums[queue[0]];
        }
    }
    console.log('res :>> ', res);
    return res;
};
maxSlidingWindow2([1, 3, -1, -3, 5, 3, 6, 7], 3);
// @lc code=end
