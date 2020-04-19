// 64. Minimum Path Sum
// Given a m x n grid filled with non - negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [
//   [1, 3, 1],
//   [1, 5, 1],
//   [4, 2, 1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.


/**
 * @param {number[][]} grid
 * @return {number}
 */

// 類似找連續最大和的找法
// 因為每個數字只能由上方或左方到訪
// 先初始化第一個陣列內(row)的各個加總
// 再初始化每列第一個各個加總(col)
// 最後遍歷剩下元素由上或由左的加總取最小值
// 最後回傳最後一個元素的加總值
var minPathSum = function (grid) {    

  const col = grid.length
  const row = grid[0].length          //取出長和寬

  for (let i = 1; i < row; i++) {     //初始化第一row
    grid[0][i] += grid[0][i-1]
  }

  for (let j = 1; j < col; j++) {     //初始化第一col
    grid[j][0] += grid[j-1][0] 
  }


  for (let i = 1; i < col; i++) {     //遍歷剩下的元素

    for (let j = 1; j < row; j++) {

      grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1])  //取由上或由左的最小值

    }
    
  }

  return grid[col-1][row-1]
};

// const grid = [
//   [1, 3, 1],
//   [1, 5, 1],
//   [4, 2, 1]
// ]

const grid =
  [ [1, 2, 5], 
    [3, 2, 1] ]

  // [ [1, 3, 8],
  //   [4, 2, 1] ]

console.log(minPathSum(grid))