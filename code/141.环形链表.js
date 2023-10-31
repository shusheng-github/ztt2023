/*
 * @Date: 2023-10-27 14:14:53
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-31 14:14:53
 * @FilePath: /2023/code/141.环形链表.js
 */
/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 快慢指针
// 如果有环,指针肯定会相遇
var hasCycle = function (head) {
    if (head == null || head.next == null) {
        return false;
    }
    let fast = head.next;
    let last = head;
    while (fast !== last) {
        if (fast.next == null || fast.next.next == null) {
            return false;
        }
        fast = fast.next.next;
        last = last.next;
    }
    return true;
};
// @lc code=end
