/*
 * @Date: 2023-10-24 14:26:44
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-01-22 19:16:19
 * @FilePath: /code/203.移除链表元素.js
 */
// class ListNode {
//     val;
//     next = null;
//     constructor(value) {
//         this.val = value;
//         this.next = null;
//     }
// }

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : val;
}
// 移除链表元素
// 输入：head = [1,2,6,3,4,5,6], val = 6 输出：[1,2,3,4,5]
function fn(head, val) {
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let temp = dummyHead;
    while (temp.next) {
        if (temp.next.val === val) {
            temp.next = temp.next.next;
            continue;
        } else {
            temp = temp.next;
        }
    }
    return dummyHead.next;
}
