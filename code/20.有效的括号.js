/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0 || !s) {
        return false;
    }
    const obj = {
        "{": "}",
        "[": "]",
        "(": ")"
    };
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const arr = ["{", "[", "("];
        const ch = s[i];
        if (arr.includes(ch)) {
            stack.push(obj[ch]);
        } else {
            if (stack.length <= 0 || stack.pop() !== ch) {
                return false;
            }
        }
    }
    return stack.length === 0;

    // const number = s.length / 2;
    // for (var i = 0; i < number; i++) {
    //     s = s.replace("()", "");
    //     s = s.replace("[]", "");
    //     s = s.replace("{}", "");
    // }
    // return s.length === 0;
};
const str = "{([{}])}";
const result = isValid(str);
console.log("result :>> ", result);
// @lc code=end
