function quickSort(arr) {
  if (arr.length < 2) return arr
  const [p, ...ary] = arr   //取第一個為P, 剩下用其餘運算子做成新陣列
  console.log('p',p)
  console.log("ary", ary)
  const left = [], right = []
  ary.forEach(c => {
    if (c < p) left.push(c)
    else right.push(c)
  })
  return [...quickSort(left), p, ...quickSort(right)]
}


let arr = [5,4,3,2,1]

console.log(quickSort(arr))