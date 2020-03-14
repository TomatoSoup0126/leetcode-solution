// 344. Reverse String
// https://leetcode.com/problems/reverse-string/

// Write a function that reverses a string.The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in -place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

//   Example 1:

// Input: ["h", "e", "l", "l", "o"]
// Output: ["o", "l", "l", "e", "h"]
// Example 2:

// Input: ["H", "a", "n", "n", "a", "h"]
// Output: ["h", "a", "n", "n", "a", "H"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {

  // solution 1  直接使用reverse()進行互換
  // s.reverse()    

  // solution 2 雙指針前後互換

  if (s.length < 2) {
    return s
  }

  let start = 0              //從頭
  let end = s.length - 1     //從尾

  while ( start < end ) {    //頭尾沒到中間就繼續互換 

    [s[start], s[end]] = [s[end], s[start]]  //es6互換寫法
    start++
    end--

  }

  return s

};

console.log(reverseString(["h", "e", "l", "l", "o"]))
console.log(reverseString(["H", "a", "n", "n", "a", "h"]))

console.log(reverseString(["H", "i"]))
console.log(reverseString(["X"]))
console.log(reverseString([]))