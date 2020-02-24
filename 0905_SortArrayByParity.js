// 905. Sort Array By Parity
// https://leetcode.com/problems/sort-array-by-parity/


// Given an array A of non - negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.


//   Example 1:

// Input: [3, 1, 2, 4]
// Output: [2, 4, 3, 1]
// The outputs[4, 2, 3, 1], [2, 4, 1, 3], and[4, 2, 1, 3] would also be accepted.


//   Note:

// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000

/**
 * @param {number[]} A
 * @return {number[]}
 */

   // 極限值
  // A.length < 0 //有規範
  // A[n] < 0 // 有規範
  // A[n] != 整數 //有規範

var sortArrayByParity = function (A) {
//solution 1，拆分成兩個陣列再合併
  // let even = [] // 偶數
  // let odd = []  // 奇數

  // for (let i = 0; i < A.length; i++) {
  //   if (A[i] % 2 === 0) {
  //     even.push(A[i])
  //   } else {
  //     odd.push(A[i])
  //   }
  // }

  // console.log(even)
  // console.log(odd)

  // console.log(even.concat(odd))
  // return even.concat(odd)


//solution 2，因為只要奇偶數分開至前後方，奇偶數內部順序可顛倒，故可使用unshift和push
  let result = []

  A.forEach(num => {
    if (num % 2 === 0 ) {
      result.unshift(num)
    } else {
      result.push(num)
    }
  })

  console.log(result)

  return result
}

sortArrayByParity([3, 1, 2, 4])