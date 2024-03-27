/*
 * @Date: 2024-03-09 19:59:07
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-03-09 21:01:46
 * @FilePath: /2023/code/94.中序遍历.js
 */
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
// 先序 根左右
var preorderTraversal = function (root) {
    if (!root) return [];
    const res = [];
    const stack = [];
    stack.push(root);
    while (stack.length) {
        const node = stack.pop();
        res.push(node.val);
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
    return res;
};
