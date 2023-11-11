/*
 * @Date: 2023-11-11 10:19:57
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-11-11 11:10:22
 * @FilePath: /miniprogram-58zhaopin-toc/Users/a58/work/my-project/2023/code/24.两两交换链表中的节点.js
 */
/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 1.迭代
// 思路
// temp -> node1 -> node2 变成
// temp -> node2 -> node1
var swapPairs = function (head) {
    var dummy = new ListNode();
    dummy.next = head;
    var temp = dummy;
    while (temp.next && temp.next.next) {
        var node1 = temp.next;
        var node2 = temp.next.next;
        temp.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        temp = node1;
    }
    return dummy.next;
};

// 2.递归
var swapPairs2 = function (head) {
    if (head == null || head.next == null) {
        return head;
    }
    let newHead = head.next;
    head.next = swapPairs2(newHead.next);
    newHead.next = head;
    return newHead;
};
// @lc code=end
