/*
 * @Date: 2023-08-24 17:24:56
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-09-21 11:51:26
 * @FilePath: /common-business-yanzhen-buy/Users/a58/work/my-project/2023/code/42.接雨水.js
 */
/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

const { max } = require("lodash");

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 使用动态规划来预处理左右两侧的最大高度
// 分别使用两个数组 leftMax 和 rightMax 来记录每个位置左侧和右侧的最大高度
// 分别计算每个位置的积水量，最后将所有的积水量加起来就是答案。

var trap = function (height) {
    const length = height.length;
    let maxLeft = [];
    let maxRight = [];
    maxLeft[0] = height[0];
    maxRight[length - 1] = height[length - 1];
    let res = 0;
    for (let i = 1; i < length; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
    }
    for (let i = length - 2; i >= 0; i--) {
        maxRight[i] = Math.max(height[i], maxRight[i + 1]);
    }
    for (let i = 0; i < length - 1; i++) {
        const value = Math.min(maxLeft[i], maxRight[i]) - height[i];
        res = res + value;
    }
    console.log("res :>> ", res);
};

// 双指针
// 当左边最大挡板＜右边最大挡板，左边向前挺近，
// 最终值加上当前左最大挡板-当前左指针所指值
// 相当于左边只要不超过右边，右边最大挡板稳定兜底，左边无脑挺近累加
// 大于则反之
var trap2 = function (height) {
    let lMax = 0;
    let rMax = 0;
    let left = 0;
    let right = height.length - 1;
    let res = 0;
    while (left < right) {
        lMax = Math.max(lMax, height[left]);
        rMax = Math.max(rMax, height[right]);
        if (lMax < rMax) {
            res += lMax - height[left];
            left++;
        } else {
            res += rMax - height[right];
            right--;
        }
    }
    console.log("res :>> ", res);
    return res;
};
var height = [0, 1, 0, 2, 1, 0]; // 1
var height2 = [4, 2, 0, 3, 2, 5]; // 9
trap2(height2);
// @lc code=end
