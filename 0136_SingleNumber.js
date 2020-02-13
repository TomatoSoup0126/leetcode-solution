// 136. Single Number
// https://leetcode.com/problems/single-number/

// 預期每個元素都出現在陣列兩次, 僅有一個出現一次, 找出僅出現一次的元素

// 使用邏輯運算子XOR(^)
// // 運用XOR的兩項特性:
// // 歸零律: a ^ a = 0
// // 恆等律: a ^ 0 = a

var singleNumber = function (nums) {

  let result = nums[0]                     // 將起始設為陣列第一個元素

  for (var i = 1; i < nums.length; i++) {  // for loop 陣列元素進行XOR運算
    result = result ^ nums[i]              // 同+=寫法，可寫成result ^= nums[i]
  }

  return result

}