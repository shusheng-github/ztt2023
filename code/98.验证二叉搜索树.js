/*
 * @Date: 2023-12-04 16:18:58
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-12-04 19:13:06
 * @FilePath: /miniprogram-58zhaopin-toc/Users/a58/work/my-project/2023/code/98.验证二叉搜索树.js
 */
/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
const helper = (root, lower, upper) => {
    if (root === null) {
        return true;
    }
    if (root.val <= lower || root.val >= upper) {
        return false;
    }
    return (
        helper(root.left, lower, root.val) &&
        helper(root.right, root.val, upper)
    );
};
var isValidBST = function (root) {
    return helper(root, -Infinity, Infinity);
};

// 中序遍历
var isValidBST2 = function (root) {
    const stack = [];
    let val = -Infinity;
    while (stack.length > 0 || root) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.val <= val) {
            return false;
        }
        val = root.val;
        root = root.right;
    }
    return true;
};

// @lc code=end
