// 5352. Generate a String With Characters That Have Odd Counts

// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters.If there are multiples valid strings, return any of them.

// Example 1:

// Input: n = 4
// Output: "pppz"
// Explanation: "pppz" is a valid string since the character 'p' occurs three times and the character 'z' occurs once.Note that there are many other valid strings such as "ohhh" and "love".
//   Example 2:

// Input: n = 2
// Output: "xy"
// Explanation: "xy" is a valid string since the characters 'x' and 'y' occur once.Note that there are many other valid strings such as "ag" and "ur".
//   Example 3:

// Input: n = 7
// Output: "holasss"


// Constraints:

// 1 <= n <= 500


/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {

  let result = ''

  if (n === 1) {         //例外的1

    result = 'a'

    return result

  }

  if ( n%2 === 0 ) {   //n為偶數，組合為1/n-1

    result =  result.concat('a')
    result = result.concat('b'.repeat(n-1))

    return result

  }else{               //n為奇數，組合為1/1/n-2



    result = result.concat('ab')
    result = result.concat('c'.repeat(n-2))

    return result

  }

}


console.log(generateTheString(1))
console.log(generateTheString(2))
console.log(generateTheString(4))
console.log(generateTheString(499))
console.log(generateTheString(500))