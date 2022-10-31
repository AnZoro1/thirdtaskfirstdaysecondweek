let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i])
  }
}

let arr1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let i = 0
while (i < arr1.length) {
  i++
  if (arr1[i] % 2 !== 0) {
    console.log(arr1[i])
  }
}
