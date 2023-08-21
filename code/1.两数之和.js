/*
 * @LastEditTime: 2023-04-26 11:16:24
 */
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (hash[target - n] !== undefined) {
            return [hash[target - n], i];
        }
        hash[n] = i;
    }
    return [];
};

var twoSum2 = function (nums, target) {
    let map = new Map();
    let length = nums.length;

    for (let i = 0; i < length; i++) {
        const n = nums[i];
        if (map.has(target - n)) {
            return [map.get(target - n), i];
        }
        map.set(n, i);
    }
    return [];
};

const result = twoSum2([2, 7, 11, 15], 9);
console.log("result :>> ", result);
// @lc code=end
