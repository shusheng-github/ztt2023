/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 双指针
var moveZeroes = function (nums) {
    if (nums == null) return;
    let length = nums.length;
    let j = 0;
    for (let i = 0; i < length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            j++;
        }
    }
    for (let i = j; i < length; i++) {
        nums[i] = 0;
    }
    return nums;
};

// 双指针
var moveZeroes2 = function (nums) {
    if (nums == null) return;
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;
        }
    }
    return nums;
};
// console.log("object :>> ", moveZeroes([0, 1, 4, 0, 12]));
// console.log("object2 :>> ", moveZeroes2([0, 1, 4, 0, 12]));
// @lc code=end
// 0,1,4,0,12
// 1,0,4,0,12
//   j i
// 1,4,0,0,12
//     j i
