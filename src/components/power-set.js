export default function bwPowerSet (array) {
  const subSets = []

  // 利用二进制原理进行子集的生成
  const n = array.length

  for (let i = 1; i < 2 ** n; i++) {
    let temp = []
    for (let j = 0; j < n; j++) {
      if ((i >> j) & 1) {
        temp.push(array[j])
      }
    }
    subSets.push(temp)
  }

  return subSets
}