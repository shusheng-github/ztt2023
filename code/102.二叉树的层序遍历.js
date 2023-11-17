/*
 * @Date: 2023-11-17 14:26:35
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-11-17 15:15:31
 * @FilePath: /miniprogram-58zhaopin-toc/Users/a58/work/my-project/2023/code/102.二叉树的层序遍历.js
 */
/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) {
        return [];
    }
    const res = new Array();
    const q = new Array();
    q.push(root);
    while (q.length > 0) {
        const currentLevelSize = q.length;
        res.push([]);
        for (let i = 0; i < currentLevelSize; i++) {
            const node = q.shift();
            res[res.length - 1].push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }
    return res;
};
// @lc code=end
