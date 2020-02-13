// 263. Ugly Number
// https://leetcode.com/problems/ugly-number/

// 判斷num的因數是否只有2,3,5 (1本身也算Ugly Number)

var isUgly = function (num) {
  if (num === 1) {                       // 判斷是否為1
    return true
  } else if (num <= 0) {                 // num應大於0
    return false
  } else if (!Number.isInteger(num)) {   // num應為整數
    return false
  } else {

    while (num % 2 === 0) {              //重複除盡2，直到無法除盡
      num = num / 2
    }

    while (num % 3 === 0) {              //重複除盡3，直到無法除盡
      num = num / 3
    }

    while (num % 5 === 0) {              //重複除盡5，直到無法除盡
      num = num / 5
    }
                                         
    if (num === 1) {                     //歷經2,3,5的除盡，若還不為1表示有其他因數存在 
      return true
    } else {
      return false
    }

  }

};