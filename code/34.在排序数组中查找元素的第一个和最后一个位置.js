/*
 * @Date: 2023-12-13 10:13:44
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2023-12-13 19:05:30
 * @FilePath: /m-edu-course-detail-new/Users/a58/work/my-project/2023/code/34.在排序数组中查找元素的第一个和最后一个位置.js
 */
/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 情况一：target 在数组范围的右边或者左边，例如数组{3, 4, 5}，target为2或者数组{3, 4, 5},target为6，此时应该返回{-1, -1}
// 情况二：target 在数组范围中，且数组中不存在target，例如数组{3,6,7},target为5，此时应该返回{-1, -1}
// 情况三：target 在数组范围中，且数组中存在target，例如数组{3,6,7},target为6，此时应该返回{1, 1}

var searchRange = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let leftIndex = -1;
    let rightIndex = -1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            leftIndex = mid;
            right = mid - 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    left = 0;
    right = nums.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            rightIndex = mid;
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return [leftIndex, rightIndex];
};

var nums = [5, 7, 7, 8, 8, 10];
var target = 7;
var result = searchRange(nums, target);
console.log("result :>> ", result);

// @lc code=end
