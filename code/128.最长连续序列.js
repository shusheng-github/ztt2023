/*
 * @Date: 2023-08-22 14:17:33
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-25 14:38:41
 * @FilePath: /hx-personal-center/Users/a58/work/my-project/2023/code/128.最长连续序列.js
 */
/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 解法1
var longestConsecutive1 = function (nums) {
    if (nums.length <= 0) return [];
    nums.sort((a, b) => a - b); //升序排序
    let currentLength = 1;
    let maxLength = 0;
    for (let i = 0; i < nums.length; i++) {
        // 这里再判断一遍判断大于 而不是直接else 是因为有可能有重复的
        // 为了防止重复的进入判断条件而重新计数
        if (nums[i] - 1 > nums[i - 1]) {
            currentLength = 1;
        } else if (nums[i] - 1 === nums[i - 1]) {
            currentLength++;
        }
        if (maxLength < currentLength) {
            maxLength = currentLength;
        }
    }
    return maxLength;
};

// 解法2 最佳解法
var longestConsecutive = function (nums) {
    let num_set = new Set();
    // 对nums去重
    for (let num of nums) {
        num_set.add(num);
    }
    // 记录数字连续的最长序列长度
    let maxStreak = 0;
    // 遍历哈希表
    for (let num of num_set) {
        // 判断num的前序元素num-1是否在数组中
        // 如果不在，即从当前num开始找序列
        if (!num_set.has(num - 1)) {
            let currNum = num;
            let currStreak = 1;
            // 继续找序列
            while (num_set.has(currNum + 1)) {
                currNum += 1;
                currStreak += 1;
            }
            // 选取序列长度最长的
            maxStreak = Math.max(maxStreak, currStreak);
        }
    }
    return maxStreak;
};

const arr = [100, 4, 200, 101, 1, 3, 102, 103];
const arr2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const arr3 = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
const arr4 = [0];
const arr5 = [1, 2, 0, 1];
const result = longestConsecutive(arr);
console.log("result :>> ", result);
// @lc code=end
