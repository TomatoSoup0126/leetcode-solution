// 119. Pascal's Triangle II

// Given a non - negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

// Note that the row index starts from 0.


// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 3
// Output: [1, 3, 3, 1]
// Follow up:

// Could you optimize your algorithm to use only O(k) extra space ?


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {

  let row = [1]                            //宣告起始陣列

  for (let i = 1; i <= rowIndex; i++) {    //正迴圈，跳過row[0](固定為1)
 
    for (let j = i; j > 0; j--) {          //逆迴圈，避免將影響到需要的前一個元素

      if (j === i) {

        row[j] = 1

      } else {

        row[j] = row[j - 1] + row[j]

      }
        
    }
  }

  return row
}


console.log(getRow(0))
console.log(getRow(3))
console.log(getRow(10))