/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 深度优先遍历
var maxDepth = function (root) {
  if (root == null) {
    return 0
  }
  const lHeight = maxDepth(root.left)
  const rHeight = maxDepth(root.right)
  const max = Math.max(lHeight, rHeight) + 1
  return max
};