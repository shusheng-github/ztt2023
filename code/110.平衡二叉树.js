/*
 * @Date: 2023-11-28 15:46:48
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-11-28 16:14:47
 * @FilePath: /2023/code/110.平衡二叉树.js
 */
/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
    let result = true;
    deep(root);
    function deep(root) {
        if (!root) return 0;
        const lHeight = deep(root.left);
        const rHeight = deep(root.right);
        if (Math.abs(lHeight - rHeight) > 1) {
            result = false;
        }
        return Math.max(lHeight, rHeight) + 1;
    }
    return result;
};
// @lc code=end
