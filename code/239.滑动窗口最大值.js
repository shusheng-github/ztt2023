/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 简单解法
var maxSlidingWindow = function (nums, k) {
  var ans = [];
  var ans_max = undefined;
  for (let i = 0; i <= nums.length - k; i++) {
    let left = i;
    let right = i + k;
    let max = nums[left];
    if (ans_max && nums[right - 1] >= ans_max) {
      ans.push(nums[right - 1])
      ans_max = nums[right - 1]
    } else {
      while (left < right) {
        max = Math.max(max, nums[left]);
        left++;
      }
      max_ans = Math.max(max, max_ans)
      ans.push(max);
    }
  }
  console.log('ans', ans)
}

// 队列写法
// 维护一个单调递减队列，如果队尾元素小于即将进来的元素，则将队尾元素移除
//  队列： 保存当前窗口最大值的数组位置 保证队列中数组位置的数值按从大到小排序
var maxSlidingWindow2 = function (nums, k) {
  let res = new Array(nums.length - k + 1).fill(0);
  let queue = [];
  for (let i = 0; i < nums.length; i++) {
    while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop();
    }
    queue.push(i);
    if (queue[0] < i - k + 1) {
      queue.shift(); // 刪除數組第一個元素的值
    }
    // 每次拿区间的最大值
    if (i - k + 1 >= 0) { // 前提条件是区间形成，区间形成的条件是i-k+1>=0
      res[i - k + 1] = nums[queue[0]];
    }
  }
  console.log('queue', queue)
  console.log('res :>> ', res);
  return res;
};
// 视频讲解 https://www.bilibili.com/video/BV1Y94y1k7G7/?buvid=YA48B4A3FFDDAAD54BE0B5262488CB1C5FA8&is_story_h5=false&mid=09cMrOwrL2kbHC5CVRg7Yg%3D%3D&p=1&plat_id=116&share_from=ugc&share_medium=iphone&share_plat=ios&share_session_id=E7EBE465-CAB2-4C96-9646-A4C0DA58A55E&share_source=COPY&share_tag=s_i&timestamp=1692520396&unique_k=GSwktwi&up_id=183494627&vd_source=098c507ef20afacc8f1afa24a3966cec

maxSlidingWindow3([1, 3, -1, -3, 5, 3, 6, 7], 3);
// @lc code=end
