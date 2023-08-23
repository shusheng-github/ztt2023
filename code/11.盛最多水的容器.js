/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针
var maxArea = function (height) {
    // const length = height.length;
    // let max = 0;
    // for (let i = 0; i < length; i++) {
    //     let j = length - 1;
    //     while (j > i) {
    //         const minHeight = Math.min(height[i], height[j]);
    //         const cur = minHeight * (j - i);
    //         max = Math.max(max, cur);
    //         j--;
    //     }
    // }
    // return max;
    const length = height.length;
    let i = 0;
    let j = length - 1;
    let res = 0;
    while (i < j) {
        if (height[i] < height[j]) {
            res = Math.max(res, height[i] * (j - i));
            i = i + 1;
        } else {
            res = Math.max(res, height[j] * (j - i));
            j = j - 1;
        }
    }
    return res;
};
const result = maxArea([1,8,6,2,5,4,8,3,7]);
console.log("result :>> ", result);
// @lc code=end
