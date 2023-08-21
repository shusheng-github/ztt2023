/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => {
        return a - b;
    });
    console.log("nums :>> ", nums);
    let arr = [];
    const length = nums.length;
    for (var i = 0; i < length - 2; i++) {
        // 左指针
        let j = i + 1;
        // 右指针
        let k = length - 1;
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
                // 若右指针元素重复，跳过
                // while (j < k && nums[k] === nums[k + 1]) {
                //     k--;
                // }
            } else if (nums[i] + nums[j] + nums[k] < 0) {
                j++;
                // 若左指针元素重复，跳过
                // while (j < k && nums[j] === nums[j - 1]) {
                //     j++;
                // }
            } else {
                arr.push([nums[i], nums[j], nums[k]]);
                k--;
                j++;
                // 若左指针元素重复，跳过
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
                // 若右指针元素重复，跳过
                while (j < k && nums[k] === nums[k + 1]) {
                    k--;
                }
            }
        }
    }
    console.log("arr :>> ", arr);
};
threeSum([-1, 0, 1, 2, -1, -4]);
// @lc code=end
