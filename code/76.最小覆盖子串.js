/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=star
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (s.length < t.length) return "";
    let map = new Map();
    for (let value of t) {
        if (!map.has(value)) {
            map.set(value, 1);
        } else {
            map.set(value, map.get(value) + 1);
        }
    }
    console.log("map :>> ", map);
    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = left + 1;

        while (map.size >= 1 && right < s.length) {
            if (map.has(s[right])) {
                const count = map.get(s[right]) - 1;
                if (count === 0) {
                    map.delete(s[right]);
                } else {
                    map.set(s[right], map.get(s[right]) - 1);
                }
            }
            right++;
        }
    }
    console.log("object :>> ", object);
};
var minWindow2 = function (s, t) {
    let map = new Map(); //哈希表用来统计模板字符中，相同字符出现的次数
    let nowChar = "";
    let result = "";
    for (let i = 0; i < t.length; i++) {
        map.set(t[i], (map.get(t[i]) || 0) + 1); //统计频率
    }
    let size = map.size; //记录窗口内字符对模板字符串的字符种类的抵消数，为0时表示窗口内包含所有种类字符串
    let l = 0; //定义左窗口
    for (let r = 0; r < s.length; r++) {
        //对右窗口依次遍历
        if (map.has(s[r])) map.set(s[r], map.get(s[r]) - 1); //当右窗口遇到模板字符串内含有的字符时，给相对应的该字符键对应的值减1
        if (map.get(s[r]) === 0) size--; //当循环中遇到哈希表中值为0的键时，对记录的字符种类数减1
        while (!size) {
            //当循环到使字符种类数为0时，即窗口中现在包含所有的模板字符串。准备移动左窗口
            nowChar = s.substring(l, r + 1); //因为此时窗口内字符串符合要求，所有我们先截取它们并保存到临时字符串中
            if (map.has(s[l])) {
                //移动左窗口前，先判断左窗口是否为模板字符串的字符种类数中的一种，即是否在哈希表中
                //如果左窗口的字符时模板字符串中的一种，移动势必回导致窗口内的字符（模板字符串内的那几种字符）频率发生变化，即相应字符减少一个
                map.set(s[l], map.get(s[l]) + 1); //所有哈希表的该字符频数恢复一个
                if (map.get(s[l]) == 1) {
                    //当一个字符的频数恢复到1时，我们需要知道，窗口内即将少一种模板字符串内的种类
                    size++; //给记录抵消数的size加1再进入下一次循环
                    if (!result || result.length > nowChar.length)
                        result = nowChar; //此时记录对比保存小的字符串。
                }
            }
            l++; //如果不在，则左窗口向右移动一位
        }
    }
    console.log("size :>> ", size);
    console.log("map :>> ", map);
    console.log("result :>> ", result);
    return result;
};
var minWindow3 = function (s, t) {
    if (s.length < t.length) return "";
    let map = new Map();
    let result = "";
    let nowChar = "";
    for (let value of t) {
        if (!map.has(value)) {
            map.set(value, 1);
        } else {
            map.set(value, map.get(value) + 1);
        }
    }
    let size = map.size; // t的字符串种类数
    let left = 0;
    // 循环右边界
    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            map.set(s[right], map.get(s[right]) - 1);
        }
        if (map.get(s[right]) === 0) {
            size--;
        }
        // size = 0; 说明当前窗口包含所有t的值，此时向移动left,看是否还满足
        while (!size) {
            nowChar = s.substring(left, right + 1); // 当前包含t的字符串
            if (map.has(s[left])) {
                map.set(s[left], map.get(s[left]) + 1);
            }
            // 等于1的时候，窗口内即将少一种模板字符串内的种类
            if (map.get(s[left]) === 1) {
                size++; // 重新进入for循环
                // 说明左边窗口不能再移动了，
                if (!result || result.length > nowChar.length) {
                    result = nowChar;
                }
            }
            left++;
        }
    }
    return result;
};

minWindow3("ADOBECODEBANC", "ABC");
// ADOBECODEBANC
// size = 1; l = 1;

// s = "ADOBECODEBANC", t = "ABC", 输出："BANC"
// @lc code=end
