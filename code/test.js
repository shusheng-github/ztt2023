/*
 * @Date: 2023-10-24 14:26:44
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-11-20 16:13:58
 * @FilePath: /2023/code/test.js
 */
// 对称二叉树
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
