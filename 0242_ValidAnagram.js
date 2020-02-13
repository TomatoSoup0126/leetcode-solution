// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/

// 驗證兩個字串是否由共同字母組合而成

var isAnagram = function (s, t) {

  if (s.length != t.length) {        // 判斷兩方字串長度是否一致
    return false
  }

  s = s.split('').sort().join('')    // 字串拆為陣列>排序>不間斷組合為字串
  t = t.split('').sort().join('')

  if (s === t) {                     // 比較兩字串是否一致
    return true
  } else {
    return false
  }
}

