let arr = [2, 3, 4, 5, 6, -2, -5, -4, 3, 5]
let accumulator = 0

let i = 0
while (i < arr.length) {
  i++
  if (arr[i] > 0) {
    accumulator += arr[i]
  }
}
console.log(accumulator)
