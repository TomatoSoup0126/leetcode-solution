// Perform String Shifts

// You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

// direction can be 0(for left shift) or 1(for right shift).
// amount is the amount by which string s is to be shifted.
// A left shift by 1 means remove the first character of s and append it to the end.
//   Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
// Return the final string after all operations.

// Example 1:

// Input: s = "abc", shift = [[0, 1], [1, 2]]
// Output: "cab"
// Explanation:
// [0, 1] means shift to left by 1. "abc" -> "bca"
// [1, 2] means shift to right by 2. "bca" -> "cab"
// Example 2:

// Input: s = "abcdefg", shift = [[1, 1], [1, 1], [0, 2], [1, 3]]
// Output: "efgabcd"
// Explanation:
// [1, 1] means shift to right by 1. "abcdefg" -> "gabcdef"
// [1, 1] means shift to right by 1. "gabcdef" -> "fgabcde"
// [0, 2] means shift to left by 2. "fgabcde" -> "abcdefg"
// [1, 3] means shift to right by 3. "abcdefg" -> "efgabcd"


// Constraints:

// 1 <= s.length <= 100
// s only contains lower case English letters.
// 1 <= shift.length <= 100
// shift[i].length == 2
// 0 <= shift[i][0] <= 1
// 0 <= shift[i][1] <= 100


/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */

// //solution 1 直接操作
// var stringShift = function (s, shift) {

//   let sArray = s.split('')

//   function shiftElement([direction, amount]){
//     if(direction === 0){
//       //向左
//       const shiftString = sArray.splice(0,amount)   //從頭開始切amout個

//       sArray.push(...shiftString)

//     }else{
//       //向右
//       const shiftString = sArray.splice(-amount, amount)  //從尾巴數來第amount切amount個
      
//       sArray.unshift(...shiftString)
//     }

//   }


//   for (let i = 0; i < shift.length; i++) {
//     shiftElement(shift[i])
//   }



//   return sArray.join('')

// };


//solution 2 將向左向右的總數相抵銷，僅做一次移動
var stringShift = function (s, shift) {

  let sArray = s.split('')
  let count = 0

  //左右相消
  for (let i = 0; i < shift.length; i++) {
    
    const direction = shift[i][0]
    const amount = shift[i][1]

    if (direction === 0){
      count -= amount
    } else {
      count += amount
    }

  }

  //將大於長度的移動數除為餘數
  if (Math.abs(count) > sArray.length) {
    count = count % sArray.length
  }

  //移動一次
  if (count < 0) {  //向左

    const shiftString = sArray.splice(0, -count)
    sArray.push(...shiftString)

  } else if(count > 0){  //向右

    const shiftString = sArray.splice(-count, count) 
    sArray.unshift(...shiftString)
    
  }

  return sArray.join('')


}

const s = "xqgwkiqpif"
const shift = [[1, 4], [0, 7], [0, 8], [0, 7], [0, 6], [1, 3], [0, 1], [1, 7], [0, 5], [0, 6]] //"qpifxqgwki"

console.log(stringShift(s, shift))