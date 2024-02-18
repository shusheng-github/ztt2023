/*
 * @Date: 2024-01-16 12:24:00
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-01-16 12:57:35
 * @FilePath: /code/118.杨辉三角.js
 */
function generate(numRows) {
    var dp = new Array(numRows);
    dp[0] = [1];
    for (let i = 1; i < numRows; i++) {
        dp[i] = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
        }
    }
    return dp;
}

function generate2(numRows) {
    var res = [];
    for (let i = 0; i < numRows; i++) {
        var arr = new Array(i + 1).fill(1);
        for (let j = 1; j < arr.length - 1; j++) {
            arr[j] = res[i - 1][j - 1] + res[i - 1][j];
        }
        res.push(arr);
    }
    return res;
}
generate2(3);
