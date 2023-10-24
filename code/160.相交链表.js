/*
 * @Date: 2023-10-24 15:43:49
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-10-24 17:16:12
 * @FilePath: /hx-personal-center/Users/a58/work/my-project/2023/code/160.相交链表.js
 */
/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 时间复杂度O(m+n)，空间复杂度：O(m),m是链表headA的长度，需要Set存储
function getIntersectionNode1(headA, headB) {
    const visited = new Set();
    let temp = headA;
    while (temp !== null) {
        visited.add(temp);
        temp = temp.next;
    }
    let temps = headB;
    while (temps != null) {
        if (visited.has(temps)) {
            return temps;
        }
        temps = temps.next;
    }
    return null;
}
// 进阶版：主要思想是在尾部补平长度差
// 时间复杂度 O(m+n),空间复杂度 O(1)
// listA = [4,1,8,4,5] + [5,6,1,8,4,5]
// listB = [5,6,1,8,4,5] + [4,1,8,4,5]
// a:4,1,8,4,5+5,6,1,8,4,5
// b:5,6,1,8,4,5+4,1,8,4,5
// pA走过的路listA + listB
// pB走过的路listB + listA
// pA和pB走过的路相同，如果有相交则会在交点相遇，如果没有会在最后相遇
var getIntersectionNode = function (headA, headB) {
    let pA = headA;
    let pB = headB;
    while (pA || pB) {
        if (pA === pB) return pA;
        pA = pA == null ? (pA = headB) : pA.next;
        pB = pB == null ? (pB = headA) : pB.next;
    }
    return null;
};
const listA = [1, 9, 1, 2, 4];
const listB = [3, 2, 4];
const result = getIntersectionNode(listA, listB);
console.log("result :>> ", result);
// @lc code=end
