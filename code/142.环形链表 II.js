/*
 * @Date: 2023-10-31 11:15:26
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-31 11:33:09
 * @FilePath: /2023/code/142.环形链表 II.js
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 时间复杂度：O(N)
// 空间复杂度：O(N)
var detectCycle = function (head) {
    let set = new Set();
    while (head !== null) {
        if (set.has(head)) {
            return head;
        }
        set.add(head);
        head = head.next;
    }
    return null;
};

// 时间复杂度：O(N)
// 空间复杂度：O(1)
var detectCycle = function (head) {
    if (head == null) {
        return null;
    }
    let fast = head;
    let slow = head;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            let pre = head;
            while (pre !== slow) {
                slow = slow.next;
                pre = pre.next;
            }
            return pre;
        }
    }
    return null;
};
