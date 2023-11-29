/*
 * @Date: 2023-11-28 16:53:02
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-11-29 15:23:54
 * @FilePath: /2023/code/148.排序链表.js
 */
/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {git
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 归并排序
var sortList = function (head) {
    if (head == null || head.next == null) return head;
    let fast = head;
    let slow = head;
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    const mid = slow.next; // 中间节点
    slow.next = null; //
    const leftList = sortList(head);
    const rightList = sortList(mid);
    return merge(leftList, rightList);
};
var merge = function (left, right) {
    const head = new ListNode();
    let cur = head;
    while (left && right) {
        if (left.val <= right.val) {
            cur.next = left;
            left = left.next;
        } else {
            cur.next = right;
            right = right.next;
        }
        cur = cur.next;
    }
    if (left) cur.next = left;
    if (right) cur.next = right;
    return head.next;
};
sortList(head);
// @lc code=end
