/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const sLen = s.length;
  const pLen = p.length;
  const ans = []
  if (sLen < pLen) return ans;
  const scount = new Array(26).fill(0);
  const pcount = new Array(26).fill(0); // 为了记录每次字母出现的次数，比较的时候直接比较字母出现的字数就可以，字母出现的次数相等就是异位词
  //当滑动窗口的首位在s[0]处时 （相当于放置滑动窗口进入数组）
  for (let i = 0; i < pLen; i++) {
    scount[s[i].charCodeAt() - 'a'.charCodeAt()] += 1;//记录s中前pLen个字母的词频
    pcount[p[i].charCodeAt() - 'a'.charCodeAt()] += 1; //记录要寻找的字符串中每个字母的词频(只用进行一次来确定)
  }
  if (scount.toString() === pcount.toString()) {
    ans.push(0);
  }
  for (let i = 0; i < sLen - pLen; i++) {
    --scount[s[i].charCodeAt() - 'a'.charCodeAt()]; // 去掉左窗口
    ++scount[s[i + pLen].charCodeAt() - 'a'.charCodeAt()]; // 右窗口滑动
    if (scount.toString() === pcount.toString()) {
      ans.push(i + 1)
    }
  }
  console.log('ans', ans)
  return ans;
};

findAnagrams("abab", "ab");