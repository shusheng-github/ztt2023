/*
 * @Date: 2024-01-26 16:45:43
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-01-26 17:29:06
 * @FilePath: /vite/Users/a58/work/my-project/2023/code/17.电话号码的字母组合.js
 */
/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const map = {
        1: "abc",
        2: "def",
        3: "ghi",
        4: "jkl",
        5: "mno",
        6: "pqr",
        7: "stu",
        8: "vwx",
        9: "yz"
    };
    const path = [];
    const res = [];
    backtracking(0);
    if (digits.length === 0) return [];
    if (digits.length === 1) return map[digits].split("");
    function backtracking(index) {
        if (index >= digits.length) {
            res.push(path.join(""));
            return;
        }
        const letter = map[digits[index]];
        for (let i = 0; i < letter.length; i++) {
            path.push(letter[i]);
            backtracking(index + 1);
            path.pop();
        }
    }
    return res;
};
var result = letterCombinations("1");
// @lc code=end
// -->index=0;letter=abc;
// i=0;path=[a];backtracking(index=1)
// -->index=1;letter=def;path=[a];
// i=0;path=[a,d];backtracking(index=2)
// -->回到index=1;;letter=def;path=[a];
// i=1;path=[a,e]
//
