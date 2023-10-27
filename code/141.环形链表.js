/*
 * @Date: 2023-10-27 14:14:53
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-27 14:53:51
 * @FilePath: /hx-personal-center/Users/a58/work/my-project/2023/code/141.环形链表.js
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
    if (!head || !head.next) return false;
    let slow = head;
    let fast = head.next;
    while (slow !== fast) {
        if (!fast || !fast.next) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};
// @lc code=end
