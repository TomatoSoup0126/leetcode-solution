// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together.Suppose the stones have weights x and y with x <= y.The result of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y - x.
// At the end, there is at most 1 stone left.Return the weight of this stone(or 0 if there are no stones left.)



// Example 1:

// Input: [2, 7, 4, 1, 8, 1]
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to[2, 4, 1, 1, 1] then,
// we combine 2 and 4 to get 2 so the array converts to[2, 1, 1, 1] then,
// we combine 2 and 1 to get 1 so the array converts to[1, 1, 1] then,
// we combine 1 and 1 to get 0 so the array converts to[1] then that's the value of last stone.


// Note:

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

/**
 * @param {number[]} stones
 * @return {number}
 */

// solution 1 排序遞迴解
// var lastStoneWeight = function (stones) {
//   //判斷長度需大於1才需要進行判斷,否則回傳
//   if (stones.length > 1) {

//     //降冪排序
//     stones.sort((a, b) => b - a)

//     //切出最大的兩個
//     let heavyStones = stones.splice(0, 2)

//     //如果兩個一樣重
//     if (heavyStones[0]-heavyStones[1] === 0 ) {

//       //直接遞迴剩下的石頭
//       return lastStoneWeight(stones)

//     } else {

//       //兩個不一樣重,將剩下的重量推回去陣列中再進行遞迴
//       stones.push(heavyStones[0] - heavyStones[1])

//       return lastStoneWeight(stones)

//     }

//   } else {

//     //長度小於1，若有值返回值，無值則返回0
//     return stones[0]?stones[0]:0

//   }

// };


//solution2 while迴圈
var lastStoneWeight = function (stones) {

  //比2小直接返回
  if (stones.length < 2) {
    return stones 
  }

  //while迴圈至長度小於1
  while(stones.length > 1 ){

    //將Math.max搭配indexOf，尋找出最大的值並切出
    let stone1Index = stones.indexOf(Math.max(...stones))
    let stone1 = stones.splice(stone1Index,1)

    //尋找次大值並切出
    let stone2Index = stones.indexOf(Math.max(...stones))
    let stone2 = stones.splice(stone2Index,1)

    //將相減推回陣列中(0也推回，因為最後如果都不剩也要回傳0)
    stones.push(stone1 - stone2)

  }

  return stones

}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]))
console.log(lastStoneWeight([9, 5, 4, 3, 2, 1])) 