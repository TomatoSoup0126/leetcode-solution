// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// 在已排序過的陣列中刪除重複的元素，並逐個印出(題目限制只能直接操作陣列)


var removeDuplicates = function (nums) {
  for (let i = nums.length - 1; i > -1; i--) {  // 逆for loop

    if (nums[i] === nums[i - 1]) {              // 和前一位比較是否相同
      nums.splice(i, 1)                         // 相同的話就把該index元素刪除
    }

  }

  for (let i = 0; i < nums.length; i++) {       // for loop逐個印出
    console.log(nums[i])
  }

}