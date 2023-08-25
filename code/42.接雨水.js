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
    console.log("maxLeft :>> ", maxLeft);
    for (let i = length - 2; i >= 0; i--) {
        maxRight[i] = Math.max(height[i], maxRight[i + 1]);
    }
    for (let i = 0; i < length - 1; i++) {
        const value = Math.min(maxLeft[i], maxRight[i]) - height[i];
        res = res + value;
    }
    console.log("maxRight :>> ", maxRight);
    console.log("res :>> ", res);
};

// 双指针
var trap2 = function (height) {
    const length = height.length;
    let left = 0;
    let right = length - 1;
    let lMax = 0;
    let rMax = 0;
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
    return res
};
var height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; // 6
var height2 = [4, 2, 0, 3, 2, 5]; // 9
trap2(height2);
// @lc code=end
