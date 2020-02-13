// 231. Power of Two
// https://leetcode.com/problems/power-of-two/

var isPowerOfTwo = function (n) {

  if (n <= 0) {          // 不應為負數
    return false
  }

  if (n === 1) {         // 2的0次方另外判定
    return true
  }

  while (n > 2) {        // 大於二就重複除2，直到除盡往下走或有餘數即為否
    if (n % 2 != 0) {
      return false
    }
    n = n / 2
  }

  return true
}