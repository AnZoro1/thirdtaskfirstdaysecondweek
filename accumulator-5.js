let arr = [2, 3, 4, 5, 6, 7, 89, 22]
let accumulatorEven = []
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    accumulatorEven.push(arr[i])
  }
}
console.log(accumulatorEven)
