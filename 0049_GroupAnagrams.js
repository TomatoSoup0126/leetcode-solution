// Given an array of strings, group anagrams together.

//   Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
//   Output:
// [
//   ["ate", "eat", "tea"],
//   ["nat", "tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

  const sortStrs = strs.map((str)=>str.split('').sort().join(''))  //拆解字串=>排序=>組合

  const group = {} //建立hashTable

  sortStrs.forEach((str,index)=>{         //放入hashTable,直接用index取成元字串
    if (!group[str]) {
      group[str] = [strs[index]]
    } else {
      group[str].push(strs[index])
    }
  })


  return Object.values(group)                //直接用Object.values()做值回傳
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))