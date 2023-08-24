/*
 * @lc app=leetcode.cn id=15 lang=leftavascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum2 = function (nums) {
    nums = nums.sort((a, b) => {
        return a - b;
    });
    const length = nums.length;
    const result = [];
    for (let i = 0; i < length - 2; i++) {
        // 如果最小值都大于0，那肯定不会有相加等于0的结果，直接退出循环
        if (nums[i] > 0) break;
        // 左指针
        let left = i + 1;
        // 右指针
        let right = length - 1;
        // 去重处理，如果本次的i值和上次相等，说明上次循环中肯定拿到了结果，本次如果再处理就会重复
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            }
        }
    }
    console.log("result :>> ", result);
    return result;
};
threeSum2([-1, 0, 1, 2, -1, -4]);
// @lc code=end
