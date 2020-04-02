// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1(where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

//   Example:

// Input: 19
// Output: true
// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

/**
 * @param {number} n
 * @return {boolean}
 */

//如何回傳false是重點
var isHappy = function (n) {

  //建立唯一集合，若unhappy，該數字會有重複的特性
  const numSet = new Set()

  while ( n !== 1 && !numSet.has(n)) {

    //拆分數字
    let numArray = [...n + ''] //轉為字串陣列

    console.log("numArray", numArray)

      //把n塞進set中
    numSet.add(n)

    //重置result為0
    let result = 0

    //進行happy計算
    for (let i = 0; i < numArray.length; i++) {
      const plusNum = numArray[i] **= 2
      result += plusNum
    }

    console.log('result', result)

    n = result
  }

  return n === 1

};

console.log(isHappy(21)) 

