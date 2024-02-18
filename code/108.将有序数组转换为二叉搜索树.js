/*
 * @Date: 2023-12-04 15:15:37
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-12-04 16:07:37
 * @FilePath: /miniprogram-58zhaopin-toc/Users/a58/work/my-project/2023/code/108.将有序数组转换为二叉搜索树.js
 */
/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    return sort(nums, 0, nums.length - 1);
};
var sort = function (nums, start, end) {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2); // nums数组的寻找中心点
    const node = new TreeNode(nums[mid]);
    node.left = sort(nums, start, mid - 1);
    node.right = sort(nums, mid + 1, end);
    return node;
};
// @lc code=end
