/*
 * @Date: 2023-10-25 14:42:53
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-25 15:22:21
 * @FilePath: /hx-personal-center/Users/a58/work/my-project/2023/code/206.反转链表.js
 */
/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
// 我们使用while循环对链表进行遍历，直到current变为null时停止循环。
// 在每一次循环中，我们将next指向current的下一个节点，
// 然后将current的next指向prev，将prev更新为current，将current更新为next。
// 最终，我们返回prev作为反转后的链表头部节点。
var reverseList = function (head) {
    // prev用于存储当前节点的前一个节点
    let prev = null;
    // curr用于遍历整个链表
    let curr = head;
    while (curr) {
        // next用于存储当前节点的下一个节点。
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};
// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]
// @lc code=end
