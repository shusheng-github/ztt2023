/*
 * @Date: 2023-11-24 20:24:08
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-11-28 15:36:01
 * @FilePath: /2023/code/543.二叉树的直径.js
 */
/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let maxLen = 0;
    function deep(root) {
        if (!root) return 0;
        const left = deep(root.left);
        const right = deep(root.right);
        const max = left + right;
        maxLen = Math.max(max, maxLen);
        return Math.max(left, right) + 1;
    }
    deep(root);
    return maxLen;
};
// @lc code=end
