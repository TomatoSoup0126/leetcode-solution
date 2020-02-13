// 35. Search Insert Position
// https://leetcode.com/problems/search-insert-position/

// 找出target出現在陣列的位置，若不存在於陣列，找出應插入的位置

var searchInsert = function (nums, target) {

  for (const num of nums) {                         // for of loop，若已存在陣列中，回傳index
    if (num === target) {
      return nums.indexOf(num)
    }
  }

  if (nums[0] > target) {                           // target比陣列中第一個元素小，直接回傳index=0
    return 0
  }

  if (nums[nums.length - 1] < target) {             // target比陣列最後一個元素大，直接回傳index=最後位
    return nums.length
  }

  for (let i = 0; i < nums.length; i++) {           // 上述都不符合，for loop找插入位
    if (nums[i] < target && nums[i+1] > target) {   // 找到比i大並比下一位小的位置
      return i + 1                                  // 回傳下一位的位置
    }
  }

}

