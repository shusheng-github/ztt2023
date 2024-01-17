function fn (coins, amount) {
  var dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      // if (coins[j] === i) {
      //   dp[i] = 1;
      // }
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}
var res = fn([1, 2, 5], 11)
console.log('res', res)