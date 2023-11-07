/*
 * @Date: 2023-11-03 14:25:05
 * @LastEditors: Shusheng
 * @LastEditTime: 2023-11-07 22:30:48
 * @FilePath: /core/Users/a58/work/my-project/2023/code/94.二叉树的中序遍历.js
 */
/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
// 递归
var inorderTraversal = function (root) {
    const res = [];
    const inorder = function (node, res) {
        if (!node) {
            return res;
        }
        inorder(node.left, res);
        res.push(node.val);
        inorder(node.right, res);
    };
    inorder(root, res);
    return res;
};

// 迭代
var inorderTraversal = function (root) {
    if (!root) {
        return [];
    }
    const res = [];
    const stack = [];
    while (root || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        const node = stack.pop();
        res.push(node.val);
        root = node.right;
    }
    return res;
};

// @lc code=end
