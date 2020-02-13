// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/

var moveZeroes = function (nums) {
  zeroCounter = 0                                // 計算有幾個0

  for (let i = nums.length - 1; i > -1; i--) {   // 逆向for loop (正向for loop會導致陣列index向前變動導致0的下一位被跳過)

    if (nums[i] === 0) {                         // 若為0
      zeroCounter += 1                           // 計數加一
      nums.splice(i, 1)                          // 移除index為i的1個元素
    }

  }


  for (let i = 0; i < zeroCounter; i++) {        // for loop0的次數
    nums.push(0)                                 // 在nums尾端補上0
  }

  return nums
};