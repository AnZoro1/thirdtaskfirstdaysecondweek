let arr = [2, 3, 4, 5, 6, 7, 89, 22]
let accumulatorOdd = []
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    accumulatorOdd.push(arr[i])
  }
}
console.log(accumulatorOdd)
