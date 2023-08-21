/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var head = new ListNode(0);
    var cur = head;
    var curry = 0; // 进位
    while (l1 !== null || l2 !== null) {
        var sum = curry + l1.val + l2.val;
        curry = sum / 10; // 进位
        cur = new ListNode(sum % 10); // 当前的值
        cur = cur.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    if (curry > 0) {
        cur.next = new ListNode(curry);
    }
    return head.next;
};
// @lc code=end
