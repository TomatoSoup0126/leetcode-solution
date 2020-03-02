// 88. Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

//   Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space(size that is greater or equal to m + n) to hold additional elements from nums2.
//   Example:

// Input:
// nums1 = [1, 2, 3, 0, 0, 0], m = 3
// nums2 = [2, 5, 6], n = 3

// Output: [1, 2, 2, 3, 5, 6]


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
//solution 1，先合併後排序
  // //合併陣列
  // let index = 0
  // for (let i = m; i < m + n; i++) {
  //   nums1[i] = nums2[index]
  //   index++
  // }

  // //排序陣列
  // nums1.sort((a,b)=> a - b)

//solution 2，邊合併邊排序

  let mergeIndex = nums1.length-1          //定位合併時的元素放置位置，從最末開始放
  m--                                      //nums1的最大長度位置
  n--                                      //nums2的最大長度位置

  while (n >= 0) {                         //把nums2的元素用完為止
    if (nums1[m] > nums2[n]){              //比大小，大者進入mergeIndex位置

      nums1[mergeIndex] = nums1[m]
      m--

    }else{

   
      nums1[mergeIndex] = nums2[n]
      n--

    }

    mergeIndex--
    console.log(nums1)

  }

  // return nums1        //不需回傳
}


console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))  //[1, 2, 2, 3, 5, 6]
// console.log(merge([1,2,3,0,0,0,0,0],3,[2,3,4],3)) //[0,0,1,2,2,3,3,4]