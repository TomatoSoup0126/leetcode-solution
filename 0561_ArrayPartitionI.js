// 561. Array Partition I
// https://leetcode.com/problems/array-partition-i/


// Given an array of 2n integers, your task is to group these integers into n pairs of integer, say(a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

//   Example 1:
// Input: [1, 4, 3, 2]

// Output: 4
// Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
//   Note:
// n is a positive integer, which is in the range of[1, 10000].
// All the integers in the array will be in the range of[-10000, 10000].

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  // 可能的極限值
  // 陣列長為奇數  // 已有規範
  // 值非整數   // 已有規範
  // 值非正整數 // 已有規範

  // 陣列長小於2
  if (nums.length < 2) {
    console.log(false)
    return false
  }

  //先進行排列大小再分組
  nums = nums.sort(function(a, b){
   return a - b
  })

  
  //兩兩一組取較小值加總，i每次加2
  let sum = 0
  for (let i = 0; i < nums.length; i += 2) {
    sum += Math.min(nums[i],nums[i+1])
  }

  console.log(sum)
  return sum
}

arrayPairSum([1, 4, 3, 2])
arrayPairSum([0])