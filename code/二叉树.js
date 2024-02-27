/*
 * @Date: 2023-10-24 14:26:44
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-02-25 18:05:27
 * @FilePath: /2023/code/二叉树.js
 */
// 所有遍历函数的入参都是树的根结点对象
const root = {
    val: "A",
    left: {
        val: "B",
        left: {
            val: "D"
        },
        right: {
            val: "E"
        }
    },
    right: {
        val: "C",
        right: {
            val: "F"
        }
    }
};

// 先序遍历 根左右
function preorderLeft(root) {
    if (!root) return;
    console.log("object :>> ", root.val);
    preorderLeft(root.left);
    preorderLeft(root.right);
}
// preorderLeft(root);
// 中序遍历 左根右
function center(root) {
    if (!root) return;
    center(root.left);
    console.log("object :>> ", root.val);
    center(root.right);
}
// center(root);
// 后序遍历 左右根
function center(root) {
    if (!root) return;
    center(root.left);
    center(root.right);
    console.log("object :>> ", root.val);
}
center(root);
