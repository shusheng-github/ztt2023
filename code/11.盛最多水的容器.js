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
// 面积 = 短板 * 宽度
// 每次移动，宽度肯定是减少的
// 为什么每次要移动短板？因为如果要移动长版的话：下一个版有两种情况:
// 1. 比原短板低 ==》那么此时宽度也减少了，短板更短了，面积肯定减少   
// 2. 比原短板高 ==》那么最短板还是原来的短板不变，但是宽度减少，所以面积还是减少
// 所以每次要移动短板，虽然宽度减少，但是短板有可能变的长些，面积才有可能变大
// 
// 双指针
var maxArea = function (height) {
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
