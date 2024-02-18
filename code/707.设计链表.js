/*
 * @Date: 2024-01-22 19:29:36
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-01-22 19:31:16
 * @FilePath: /code/707.设计链表.js
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
function MyListNode() {
    this.head = new ListNode();
}
MyListNode.prototype.addAtHead = function (val) {};
