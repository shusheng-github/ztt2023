/*
 * @Date: 2023-09-19 10:37:26
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-02-28 16:37:29
 * @FilePath: /2023/code/300.最长递增子序列.js
 */
/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const length = nums.length;
    let max = 1;
    // dp[i] 存储的是下标为i的递增子序列的长度
    let dp = new Array(length).fill(1);
    for (let i = 1; i < length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        max = Math.max(max, dp[i]);
    }
    return max;
};
//           0, 1, 2, 3, 4, 5, 6, 7, 8
lengthOfLIS([0, 1, 0, 3, 2, 3]);
// @lc code=end

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

function getSequence(arr) {
    const p = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                // 存储在 result 更新前的最后一个索引的值
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            // 二分搜索，查找比 arrI 小的节点，更新 result 的值
            while (u < v) {
                c = ((u + v) / 2) | 0;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                } else {
                    v = c;
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1];
                }
                result[u] = i;
            }
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    console.log("result :>> ", result);
    return result;
}
getSequence([0, 1, 0, 3, 2, 3]);
