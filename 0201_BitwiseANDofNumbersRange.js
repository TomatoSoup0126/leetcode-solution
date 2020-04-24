// 201. Bitwise AND of Numbers Range

// Given a range[m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

// Example 1:

// Input: [5, 7]
// Output: 4
// Example 2:

// Input: [0, 1]
// Output: 0

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {

  let countShift = 0

  while (m!==n){

    // Bitwise AND運算，>>1 會將2進制最右側去除並返回
    m >>= 1
    n >>= 1

    //每去除一次就計數一次，直到最後兩者相等
    countShift++

  }

  //利用計數次數和<<來補上0的左側
  return (m <<= countShift)


};

console.log(rangeBitwiseAnd(27,31))