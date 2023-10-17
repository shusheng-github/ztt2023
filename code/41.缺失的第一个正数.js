/*
 * @Date: 2023-10-12 15:22:51
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-12 17:50:02
 * @FilePath: /common-business-yanzhen-buy/Users/a58/work/my-project/2023/code/41.缺失的第一个正数.js
 */
/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 时间复杂度O(n)
var firstMissingPositive = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        while (
            nums[i] >= 1 &&
            nums[i] < nums.length &&
            nums[i] != nums[nums[i] - 1]
        ) {
            //while里面放置 下标i 的元素
            var tmp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = tmp;
        }
    }
    console.log("nums :>> ", nums);

    for (let i = 0; i < nums.length; i++) {
        //遍历判断
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }
    return nums.length + 1;
};
firstMissingPositive([3, 4, -1, -2, 1, 1, 2]);
// @lc code=end
