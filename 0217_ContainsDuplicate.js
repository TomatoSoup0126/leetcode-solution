// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/

// 判斷陣列中是否有重複的元素

var containsDuplicate = function (nums) {

  nums.sort()                                  // 排序陣列 (不排序可以用雙重for loop逐個比較)
  for (let i = 0; i < nums.length; i++) {      // for loop元素
    if (nums[i] === nums[i + 1]) {             // 該元素與下一位比較，若一樣即是有重複
      return true
    }
  }

  return false                                 // 走完for loop為沒重複
}