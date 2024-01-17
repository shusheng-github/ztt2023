// 最后爬2个台阶
// 最后爬1个台阶
function fn (n) {
  if (n <= 1) return n;
  var dp = new Array(n + 1).fill(1);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

function fn2 (n) {
  if (n <= 1) return n;
  var q1 = 1;
  var q2 = 2;
  for (let i = 3; i <= n; i++) {
    var sum = q1 + q2;
    q1 = q2;
    q2 = sum;
  }
  return q2
}
fn2(4)