/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    // 顺序区间
    if (nums[left] <= nums[mid]) {
      // left 到 mid 是顺序区间
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid;
      } else {
        left = mid + 1
      }
    } else {
      // mid 到 right 是顺序区间
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid;
      } else {
        right = mid - 1
      }
    }
  }
  return -1
};
search([5, 1, 3], 3)