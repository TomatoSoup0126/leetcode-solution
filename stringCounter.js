var str = "aaaaabbbbbbbbccccddfgh";
function charCount(string) {
  let counter = {}

  const strArray = string.split("")

  strArray.forEach(char => {         //建立hash table
    if (counter[char]) {
      counter[char].count ++
    } else {
      counter[char] = {}
      counter[char].count = 1
      counter[char].value = char
    }
  })

  let charKey = Object.keys(counter)
  let maxKeyValue = {}
  maxKeyValue = counter[charKey[0]]

  for (let i = 1; i < charKey.length; i++) {
    if (counter[charKey[i]].count > maxKeyValue.count) {
      maxKeyValue = counter[charKey[i]]
    }
  }

  


  return maxKeyValue
}

console.log(charCount(str))