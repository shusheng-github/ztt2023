/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function arrayConversion(s, numRows) {
    // 如果行数小于等于1则直接返回源字符串即可
    if (numRows <= 1) return s;
    var stringArray = new Array(numRows).fill("");
    var currentRow = 0;
    // 方向，true：向下，false:向上
    var direction = true;
    for (let i = 0; i < s.length; i++) {
        stringArray[currentRow] += s[i];
        if (direction) currentRow++;
        else currentRow--;
        // 如果当前行到达底部or顶部，改变方向
        if (currentRow == numRows - 1 || currentRow == 0)
            direction = !direction;
    }
    var converString = "";
    // 逐行拼接字符串
    for (let i = 0; i < stringArray.length; i++) {
        converString += stringArray[i];
    }
    return converString;
}
// [p, A, Y, P];

const aa = arrayConversion("PAYPK", 4);
console.log("aa :>> ", aa);
// PINALSIGYAHRPI

// @lc code=end
