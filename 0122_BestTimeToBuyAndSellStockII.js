// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit.You may complete as many transactions as you like(i.e., buy one and sell one share of the stock multiple times).

//   Note: You may not engage in multiple transactions at the same time(i.e., you must sell the stock before you buy again).

//     Example 1:

// Input: [7, 1, 5, 3, 6, 4]
// Output: 7
// Explanation: Buy on day 2(price = 1) and sell on day 3(price = 5), profit = 5 - 1 = 4.
// Then buy on day 4(price = 3) and sell on day 5(price = 6), profit = 6 - 3 = 3.
// Example 2:

// Input: [1, 2, 3, 4, 5]
// Output: 4
// Explanation: Buy on day 1(price = 1) and sell on day 5(price = 5), profit = 5 - 1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
// engaging multiple transactions at the same time.You must sell before buying again.
//   Example 3:

// Input: [7, 6, 4, 3, 1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e.max profit = 0.


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

  // // solution1, two pointer

  // let startPoint = 0
  // let endPoint = 0
  // let benefit = 0

  // if (prices.length < 1) {
  //   return 0
  // }

  // while(endPoint < prices.length){

  //   if (prices[endPoint + 1] - prices[endPoint] <= 0) {     //跌
  //     benefit += prices[endPoint] - prices[startPoint]
  //     endPoint++
  //     startPoint = endPoint
  //     console.log('low')
  //     console.log(['startPoint',startPoint],['endPoint',endPoint])
  //   } else {             //漲
  //     endPoint++
  //     console.log('high')
  //     console.log(['startPoint', startPoint], ['endPoint', endPoint])
  //   }

  // }


  // benefit +=  prices[endPoint-1] - prices[startPoint]


  // return benefit


// //solution 2, Math.max

//   if (prices.length <= 1) return 0;
//   let benefit = 0;
//   for (var i = 1; i < prices.length; i++) {
//     console.log(prices[i] - prices[i - 1])
//     benefit += Math.max(0, prices[i] - prices[i - 1]);
//     console.log('benefit', benefit)
//   }
//   return benefit


// solution 3,reduce

  let benefit = 0 

  if (prices.length < 1 ) {
    return 0
  }
  
  prices.reduce((previousPrice, currentPrice)=>{

    if (previousPrice < currentPrice) {
      benefit += currentPrice - previousPrice
    }
    return currentPrice
  })

  return benefit

};
       
console.log(maxProfit([7, 1, 5, 3, 6, 4])) //7
console.log(maxProfit([1, 2, 3, 4, 5])) //4
console.log(maxProfit([7, 6, 4, 3, 1])) //0
console.log(maxProfit([4,1,3,3,4,1,8,9])) //11
console.log(maxProfit([0,0])) //0
console.log(maxProfit([])) //0
