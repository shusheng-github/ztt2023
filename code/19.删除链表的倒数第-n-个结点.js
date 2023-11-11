/*
 * @Date: 2023-02-13 15:02:48
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-11-10 19:12:45
 * @FilePath: /miniprogram-58zhaopin-toc/Users/a58/work/my-project/2023/code/19.删除链表的倒数第-n-个结点.js
 */
/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // 利用快慢指针
    let dummy = new ListNode();
    dummy.next = head;
    let fast = dummy;
    let last = dummy;
    while (n !== 0) {
        fast = fast.next;
        n--;
    }
    while (fast.next) {
        fast = fast.next;
        last = last.next;
    }
    last = last.next.next;
    // 返回头结点
    return dummy.next;
};
// @lc code=end
