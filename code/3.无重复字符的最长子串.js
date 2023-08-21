/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // abc bc
    var length = s.length;
    var i = 0;
    var map = new Map();
    var ans = 0;
    for (var j = 0; j < length; j++) {
        if (map.has(s.charAt(j))) {
            i = Math.max(map.get(s.charAt(j)), i);
            console.log("s.charAt(j) :>> ", s.charAt(j));
            console.log("i :>> ", i);
        }
        ans = Math.max(ans, j - i + 1);
        map.set(s.charAt(j), j + 1);
        console.log("map :>> ", map);
    }
    return ans;
    ////////////
    // const length = s.length;
    // var rk = 0;
    // var set = new Set();
    // var max = 0;
    // for (var i = 0; i < length; i++) {
    //     if (i > 0) {
    //         set.delete(s.charAt(i - 1));
    //     }
    //     while (rk < length && !set.has(s.charAt(rk))) {
    //         set.add(s.charAt(rk));
    //         rk++;
    //     }
    //     max = Math.max(max, rk - i);
    // }
    // return max;
};
// 1
// i = 0; set = [a,b,c]; rk = 3 max = 3
// i = 1;

const result = lengthOfLongestSubstring("abcbc");
console.log("result :>> ", result);
// @lc code=end
