// 169. Majority Element
// https://leetcode.com/problems/majority-element/

// 找尋陣列中出現最多次且大於陣列長度一半的元素

var majorityElement = function (nums) {

  let count = {}                                               // 宣告計數用物件count中

  for (let i = 0; i < nums.length; i++) {                      // for loop陣列
    count[nums[i]] = count[nums[i]] ? count[nums[i]] + 1 : 1   // 將元素值作為key放入count中
                                                               //  //若已存在該key，value +1 or 不存在該key，value為1
  }

  const halfNumber = nums.length/2                             // 宣告過半值

  for (const key in count) {                                   // for in loop，將key逐個比較何者大於過半值
    if (count[key] > halfNumber) {
      return key                                               // 回傳key
    }
  }

}

