let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
i = 0

// // 1a
// do {
//     console.log("Phan tu thu %s la %s", i, arr[i])
//     i++
// }while (arr[i] !== undefined)

// // 1b
// sum = 0
// do {
//     sum = sum + arr[i]
//     i++
// }while (arr[i] !== undefined)
// console.log("tong cac phan tu trong mang: ", sum)


// 1c
let max = arr[0]
let min = arr[0]
do {
    if (max < arr[i]) {
        max = arr[i]
    }
    i++
}while (arr[i] !== undefined)

do {
    if (min < arr[i]) {
        min = arr[i]
    }
    i++
}while (arr[i] !== undefined)
console.log("max la:", max)
console.log("min la: ", min)


