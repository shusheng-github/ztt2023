/*
 * @Date: 2023-02-12 17:57:33
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-11-02 10:52:43
 * @FilePath: /core/Users/a58/work/my-project/2023/code/21.合并两个有序链表.js
 */
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
    let cur = head;
    // “针”开始在 l1 和 l2 间穿梭了
    while (list1 && list2) {
        if (list1.val <= list2.val) {
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
    cur.next = list1 === null ? list2 : list1;
    return head.next;
};
var mergeTwoLists = function (list1, list2) {
    const head = new ListNode();
    let cur = head;
    while (list1 && list2) {
        if (list1 <= list2) {
            cur.next = list1;
            list1 = list.next;
        } else {
            cur.next = list2;
            list2 = list2.next;
        }
        cur = cur.next;
    }
    cur.next = list1 === null ? list2 : list1;
    return head.next;
};
// @lc code=end
