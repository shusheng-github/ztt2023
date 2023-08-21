/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // 定义头结点，确保链表可以被访问到
    const head = new ListNode();
    // cur 这里就是咱们那根“针”
    const cur = head;
    // “针”开始在 l1 和 l2 间穿梭了
    while (list1 && list2) {
        if (list1.val < list2.val) {
            cur.next = list1;
            list1 = list1.next;
        } else {
            cur.next = list2;
            list2 = list2.next;
        }
        // “针”在串起一个结点后，也会往前一步
        cur = cur.next;
    }
    // 处理链表不等长的情况
    cur = list1 === null ? list2 : list1;
    return head.next;
};
// @lc code=end
