// 238. Product of Array Except Self

// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input: [1, 2, 3, 4]
// Output: [24, 12, 8, 6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity ? (The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//  solution1 雙迴圈，避開自己的乘積
// var productExceptSelf = function (nums) {

//   let result = []

//   for (let i = 0; i < nums.length; i++) {

//     let product = 1
    
//     for (let j = 0; j < nums.length; j++) {
      
//       if (i !== j) {
//         product *= nums[j] 
//       }
      
//     }
    
//     result.push(product)
//   }

//   return result

// };


// solution2 遍歷左側乘積＆右側乘積再相乘
var productExceptSelf = function (nums) {

  let result = []

  let product = 1 //作為下個值的乘積

  //left
  for (let i = 0; i < nums.length; i++) {

    result[i] = product

    product *= nums[i] //該值要作為下一位的乘積
    
  }

  //重置乘積給右邊用
  product = 1
  //right 逆迴圈
  for (let j = nums.length-1; j >=0; j--) {

    result[j] *= product

    product *= nums[j]
    
  }


  return result;

}



console.log(productExceptSelf([1, 2, 3, 4])) //[24,12,8,6]