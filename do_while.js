let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
i = 0
doDaiMang = arr.length

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
// let max = arr[0]
// do {
//     if (max < arr[i]) {
//         max = arr[i]
//     }
//     i++
// }while (arr[i] !== undefined)
// console.log("max la:", max)

// let min = arr[0]
// do {
//     if (min > arr[i]) {
//         min = arr[i]
//     }
//     i++
// }while (arr[i] !== undefined)
// console.log("min la: ", min)

// // 1d
// sum = 0
// do {
//     sum = sum + arr[i]
//     tbc = sum/arr.length
//     i++
// }while (arr[i] !== undefined)
// console.log("tong cac phan tu trong mang: ", sum)
// console.log("tbc cac phan tu trong mang la: ", tbc)

// // 1e
// let arr_new = []
// do{
//     arr_new[i] = arr[doDaiMang-1-i]
//     i++
// }while(arr[i] !== undefined)
// console.log(arr_new)

// // 1f
// let soLanXuatHien = {}
// do {
//     let phanTuThuI = arr[i]
//     soLanXuatHien[phanTuThuI] = (soLanXuatHien[phanTuThuI] || 0) + 1
//     i++
// }while(arr[i] !== undefined)
// console.log(soLanXuatHien)

// // 1g
// let arr_new = []
// do {
//     arr_new[i+1] = arr[i]
//     i++
// }while(arr[i] !== undefined)
// arr_new[0] = 117
// console.log(arr_new)

// // 1h
// let checkTangDan = true
// do {
//     if (arr[i+1]<arr[i]){
//         checkTangDan = false
//         break
//     }
//     i++
// }while(arr[i] !== undefined)
// if (checkTangDan === true) {
//     console.log("mang tang dan")
// }else {
//     console.log("mang k tang dan")
// }

// // 1i
// do {
//     let j = i + 1
//     do {
//         j++
//         if (arr[i] > arr[j]) {
//             let tmp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = tmp
//         }
//     }while(arr[i] !== undefined)
    

//     i++
// }while(arr[i] !== undefined)


// console.log(arr)

// 1k
// do {
//     if (arr[i]%2 == 0) {
//         console.log("so chan la:", arr[i])
//     }
//     i++
// }while(arr[i] !== undefined)

// 1l
do {
    if (arr[i]%2 != 0) {
        console.log("so le la:", arr[i])
    }
    i++
}while(arr[i] !== undefined)








