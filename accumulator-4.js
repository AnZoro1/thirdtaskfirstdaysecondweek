let arr = ['Ahmed', 'Alvi', 'Umar', 'Anzor', 'Akroman']
let accumulator = []
for (let i = 0; i < arr.length; i++) {
  if (arr[i][0].toLowerCase() == 'a') {
    accumulator.push(arr[i])
  }
}
console.log(accumulator)
