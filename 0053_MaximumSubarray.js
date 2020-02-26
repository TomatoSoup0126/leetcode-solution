// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/

// Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.

//   Example:

// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
//   Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6.

//極限值
// 空陣列 //有規範
// 非整數 //有規範

// 只求連續鄰近元素的最大值，不需要回傳該連續陣列為何

/**
 * @param {number[]} nums
 * @return {number}
 */


var maxSubArray = function (nums) {

  for (let i = 1; i < nums.length; i++) {                 // 因為需要連續性，故遍歷迴圈，從index=1開始
    
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])    // 現在index上的值，現在index上的值加上前一index的值，兩者比較取較大值
                                                          // 較大值取代該index上的值，因是連續比較下來，可看作目前到此index中的最大值加總
  }

  return Math.max(...nums)                                // 展開nums，取最大值回傳

}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])