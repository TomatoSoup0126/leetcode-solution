// 1. Two Sum
// https://leetcode.com/problems/two-sum/

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

//   Example:

// Given nums = [2, 7, 11, 15], target = 9,

//   Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 極限值
// 陣列中沒答案 //有規範
// 陣列中有複數種答案 //有規範
// 陣列中有一值重複可以為target
// 陣列中有重複值可以為target

var twoSum = function (nums, target) {

// solution1: 遍歷陣列，找出符合的組合
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i]+ nums[j] === target) {
  //       console.log([i,j])
  //       return [i,j]
  //     }
  //   }
  // }

// solution2: 建立與target互補的hash table
// 陣列元素與target相減的值作為key，元index為value，當陣列元素有作為key存在於table中，即表示兩者相加為target
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] >= 0) {
      console.log([hash[nums[i]], i])
      return [hash[nums[i]], i]
    }
    hash[target - nums[i]] = i
    console.log(hash)
  }
}

twoSum([2, 7, 11, 15],9)
twoSum([11, 15, 2, 7],9)
twoSum([3, 2, 4],6)
twoSum([3, 3],6)