// 66. Plus One
// https://leetcode.com/problems/plus-one/

// Given a non - empty array of digits representing a non - negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

//   Example 1:

// Input: [1, 2, 3]
// Output: [1, 2, 4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4, 3, 2, 1]
// Output: [4, 3, 2, 2]

/**
 * @param {number[]} digits
 * @return {number[]}
 */

// 極限值
// 陣列若過長會無法轉Number操作

var plusOne = function (digits) {
  // return (Number(digits.join('')) + 1).toString().split('')  // 單純陣列轉Number後操作，有極限存在


  for (let index = digits.length - 1; index >= 0; index--) {        //for loop 從陣列最末端開始操作＝從個位數開始
     
    if (digits[index] != 9) {                                       //如果該位不為9，表示不需要進位，直接＋1即可

      digits[index]++                                               //+1後跳出迴圈
      break

    } else {
      
      digits[index] = 0                                              //該位為9，讓他變0，藉由迴圈進到下一位

    }
    
  }


  if (digits[0] === 0) {                                              //例外的進位進到陣列需增加長度，表示該陣列[0]為0
    digits.unshift(1)                                                 //陣列最前插入1表示進位
  }
  


  return digits
}

console.log(plusOne([1, 2, 3]))     //[1, 2, 4]
console.log(plusOne([4, 3, 2, 1]))  //[4, 3, 2, 2]
console.log(plusOne([1,9]))         //[2,0]
console.log(plusOne([1,9,9]))       //[2,0,0]
console.log(plusOne(
  [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])) //[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

console.log(plusOne([9]))           //[1,0]
console.log(plusOne([9,9,9]))       //[1,0,0,0]
console.log(plusOne([0]))           //[1]