// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/

//solution1 移除0後補上
// var moveZeroes = function (nums) {
//   zeroCounter = 0                                // 計算有幾個0

//   for (let i = nums.length - 1; i > -1; i--) {   // 逆向for loop (正向for loop會導致陣列index向前變動導致0的下一位被跳過)

//     if (nums[i] === 0) {                         // 若為0
//       zeroCounter += 1                           // 計數加一
//       nums.splice(i, 1)                          // 移除index為i的1個元素
//     }

//   }


//   for (let i = 0; i < zeroCounter; i++) {        // for loop0的次數
//     nums.push(0)                                 // 在nums尾端補上0
//   }

//   return nums
// };

//solution2 雙指針
var moveZeroes = function (nums) {

  let jumpIndex = 0   //跳過0的index
  let index = 0       //一般迴圈用指針

  while (jumpIndex < nums.length) {     //跳超過陣列長度就可以結束了

    if (nums[jumpIndex] === 0 ) {       //等於0就跳過，進到下一位

      jumpIndex++

    } else {                            //跳到不是0的地方，和正在後面的index進行交換

      [nums[jumpIndex], nums[index]] = [nums[index], nums[jumpIndex]]   //ES6陣列交換

      jumpIndex++                       //換完後兩者都進到下一個
      index++

    }


  }

  return nums

}

// let nums = [0, 1, 0, 3, 12] //[1,3,12,0,0]
// let nums = [0, 0, 0, 3, 12] //[3,12,0,0,0]
let nums = [0, 1, 0, 3, 0] //[1,3,0,0,0]
console.log(moveZeroes(nums))