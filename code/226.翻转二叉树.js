/*
 * @Date: 2023-11-11 14:30:39
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-11-11 15:04:46
 * @FilePath: /miniprogram-58zhaopin-toc/Users/a58/work/my-project/2023/code/226.翻转二叉树.js
 */
/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
// 递归
var invertTree = function (root) {
    if (root == null) {
        return null;
    }
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return node;
};

// 使用栈来实现
// 本质思想是，左右节点进行交换，循环翻转每个节点的左右子节点，将未翻转的子节点存入栈中，循环直到栈里所有节点都循环交换完为止。
var invertTree = function (root) {
    if (root == null) {
        return null;
    }
    const stack = [];
    stack.push(root);
    while (stack.length > 0) {
        const node = stack.pop();
        const temp = node.left;
        node.left = node.right;
        node.right = temp;
        if (node.left !== null) {
            stack.push(node.left);
        }
        if (node.right !== null) {
            stack.push(node.right);
        }
    }
    return root;
};

// @lc code=end
