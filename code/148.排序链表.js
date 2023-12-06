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
// 归并排序
var sortList = function (head) {
  if (head == null || head.next == null) return head;
  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  const mid = slow.next; // 中间节点
  slow.next = null; //
  const leftList = sortList(head);
  const rightList = sortList(mid);
  return merge(leftList, rightList)
};
var merge = function (left, right) {
  const head = new ListNode();
  let cur = head;
  while (left && right) {
    if (left.val <= right.val) {
      cur.next = left;
      left = left.next;
    } else {
      cur.next = right;
      right = right.next;
    }
    cur = cur.next;
  }
  if (left) cur.next = left;
  if (right) cur.next = right;
  return head.next;
}