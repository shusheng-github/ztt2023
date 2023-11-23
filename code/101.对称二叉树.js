/*
 * @Date: 2023-11-20 16:14:28
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-11-20 16:14:39
 * @FilePath: /miniprogram-58zhaopin-toc/Users/a58/work/my-project/2023/code/101.对称二叉树.js
 */
/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
// 递归
function check(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    return (
        left.val === right.val &&
        check(left.left, right.right) &&
        check(left.right, right.left)
    );
}
function isSymmetric(root) {
    return check(root, root);
}

// 迭代
function isSymmetric2(root) {
    if (!root) {
        return false;
    }
    const stack = [];
    stack.push(root.left);
    stack.push(root.right);
    while (stack.length > 0) {
        const nodeR = stack.shift();
        const nodeL = stack.shift();
        if (!nodeR && !nodeL) {
            continue;
        }
        if (!nodeR || !nodeL || nodeL.val !== nodeR.val) {
            return false;
        }
        stack.push(nodeL.left);
        stack.push(nodeR.right);
        stack.push(nodeL.right);
        stack.push(nodeR.left);
    }
    return true;
}
// @lc code=end
