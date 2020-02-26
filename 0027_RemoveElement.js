// 27. Remove Element
// https://leetcode.com/problems/remove-element/

// Given an array nums and a value val, remove all instances of that value in -place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.

// The order of elements can be changed.It doesn't matter what you leave beyond the new length.

// Example 1:

// Given nums = [3, 2, 2, 3], val = 3,

//   Your function should return length = 2, with the first two elements of nums being 2.

// It doesn't matter what you leave beyond the returned length.
// Example 2:

// Given nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2,

//   Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.

// Note that the order of those five elements can be arbitrary.

// It doesn't matter what values are set beyond the returned length.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // solution 1 遍歷陣列
  // for (let i = nums.length - 1; i > -1; i--) {
  //   if (nums[i] === val) {
  //     nums.splice(i,1)
  //   }
  // }


  // nums.forEach(item => {
  //   console.log(item)
  // })

  // solution 2 用index進行搬移整理
  let moveIndex = 0                         // 紀錄不用刪去的元素應該搬移的index
  for (let i = 0; i < nums.length; i++) {   

    if (nums[i] != val) {                   // 不用刪去便進行搬移，index+1
      nums[moveIndex] = nums[i]
      moveIndex++
    }

  }

  nums.splice(moveIndex)                    // 搬移完成，index之後的元素不需要

  return moveIndex                          // 題目要回傳長度

}

removeElement([3, 2, 2, 3],3)
removeElement([0, 1, 2, 2, 3, 0, 4, 2],2)
