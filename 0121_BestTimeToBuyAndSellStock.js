// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// 給予一個陣列，依序為時間順序與賣價，找出何時買進/賣出有最大獲益並回傳最大獲益為何(僅有跌為0)

var maxProfit = function (prices) {

  profit = 0                                        // 宣告收益，初始為0

  for (let i = 0; i < prices.length; i++) {         // for loop第一層，prices[i]

    for (let j = i + 1; j < prices.length; j++) {   // for loop第二層，prices[j]為prices[i]之後的元素
   
      if (prices[j] - prices[i] > profit) {         // 後者減前者，收益較原有收益高，取代原有收益

        profit = prices[j] - prices[i]
        
      }

    }

  }

  return profit                                      // 回傳收益

}

