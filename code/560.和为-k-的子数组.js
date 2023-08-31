/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    var preNums = 0;
    var count = 0;
    var map = new Map();
    map.set(0, 1);
    for (item of nums) {
        preNums += item;
        if (map.has(preNums - k)) {
            count += map.get(preNums - k);
        }
        if (map.has(preNums)) {
            map.set(preNums, map.get(preNums) + 1);
        } else {
            map.set(preNums, 1);
        }
        console.log("item :>> ", item);
    }
    console.log("count :>> ", count);
    return count;
};

subarraySum([1, 2, 3], 3);
// 1,1
// 1,1  count = 1   3,1
// 1,1  3,1   count = 1+1=2
// @lc code=end
