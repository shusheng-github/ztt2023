/*
 * @Date: 2024-02-18 19:27:38
 * @LastEditors: zhangtiantian08 zhangtiantian08@58.com
 * @LastEditTime: 2024-02-19 16:41:57
 * @FilePath: /app-edu-course-detail/Users/a58/work/my-project/2023/code/131.分割回文串.js
 */
var partition = function (s) {
    const n = s.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(false));
    let res = [],
        ans = [];
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j <= n - 1; j++) {
            if (s[i] === s[j] && (j - i <= 1 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
            }
        }
    }
    const dfs = function (i) {
        if (i === n) {
            res.push(ans.slice());
            return;
        }
        for (let j = i; j < n; j++) {
            if (dp[i][j]) {
                ans.push(s.slice(i, j + 1));
                dfs(j + 1);
                ans.pop();
            }
        }
    };
    dfs(0);
    return res;
};
// j=i=0; dp[0][0]=true; ans=[a]; dfs(1);
// j=i=1; dp[1][1]=true; ans=[a,b]; dfs(2);
// j=i=2; dp[2][2]=true; ans=[a,b,a]; dfs(3);
// j=i=3; dp[3][3]=true; ans=[a,b,a,a]; dfs(4);
// j=i=4=n; res=[[a,b,a,a]]; return
// 回到j=i=3;ans=[a,b,a];
// 回到j=i=2;ans=[a,b];
// i=2;j=3; dp[2][3]=true;ans[a,b,aa];dfs(4);res=[[a,b,a,a],[a,b,aa]]
// 回到

// 布尔类型的dp[i][j]：
// 表示区间范围[i,j]（注意是左闭右闭）的子串是否是回文子串，如果是dp[i][j]为true，否则为false。
partition("abaa");
// 输入：s = "abaa"
// 输出：[["a","a","b"],["aa","b"]]
