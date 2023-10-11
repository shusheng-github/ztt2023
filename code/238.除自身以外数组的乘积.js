/*
 * @Date: 2023-10-11 17:20:37
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-11 18:25:31
 * @FilePath: /common-business-yanzhen-buy/Users/a58/work/my-project/2023/code/238.除自身以外数组的乘积.js
 */
/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length;
    const arr = new Array(n);
    const arr2 = new Array(n);
    const result = new Array(n);
    arr[0] = 1;
    arr2[n - 1] = 1;
    for (let i = 1; i < n; i++) {
        arr[i] = arr[i - 1] * nums[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        arr2[i] = arr2[i + 1] * nums[i + 1];
    }
    for (i = 0; i < n; i++) {
        result[i] = arr[i] * arr2[i];
    }
    return result;
};

// 官方
var productExceptSelf2 = function (nums) {
    const n = nums.length;
    const arr = new Array(n);
    let k = 1;
    for (let i = 0; i < nums.length; i++) {
        arr[i] = k;
        k = k * nums[i]; //此时数组存储的是除去当前元素左边的元素乘积
    }
    k = 1;
    for (let i = n - 1; i >= 0; i--) {
        arr[i] = k * arr[i]; //k为该数右边的乘积。
        k = k * nums[i]; //此时数组等于左边的 * 该数右边的。
    }
    return arr;
};
productExceptSelf2([1, 2, 3, 4, 5]);
// @lc code=end
