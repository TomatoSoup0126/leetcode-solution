// 118. Pascal's Triangle
// https://leetcode.com/problems/pascals-triangle/

// Given a non - negative integer numRows, generate the first numRows of Pascal's triangle.


// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//   [1],
//   [1, 1],
//   [1, 2, 1],
//   [1, 3, 3, 1],
//   [1, 4, 6, 4, 1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = []                        // 宣告回傳結果用陣列
  for (let i = 0; i < numRows; i++) {    // 迴圈創造各階層的陣列
    result.push(new Array(i+1))          // 用new Array(長度)創造符合長度的陣列

    result[i][0] = 1                     // 陣列頭尾都給1
    result[i][result[i].length-1]=1

    for (let index = 0; index < result[i].length; index++) {                 // 使用for loop迴圈填上頭尾以外的內容

      if (result[i][index] != 1){                                            // 避開操作頭尾
        result[i][index] = result[i - 1][index - 1] + result[i - 1][index]   // 每個元素都是上一階層的index-1位置元素和index位置元素的總和
      }
      
    }

  }

  return result
};


console.log(generate(0))
console.log(generate(1))
console.log(generate(2))
console.log(generate(5))
console.log(generate(10))
