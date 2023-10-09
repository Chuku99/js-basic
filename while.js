let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let i = 0
let doDaiMang = arr.length


// // 1a
// let i = 0
// while(arr[i] !== undefined) {
//     console.log('Phan tu thu %s : %s', i, arr[i])
//     i = i +1
// }

// // 1b
// let sum = 0
// while(arr[i] !== undefined) {
//     sum = sum + arr[i]
//     i = i + 1
// }
// console.log('tong la: ', sum)

// // 1c
// let max = arr[0]
// while (arr[i] !== undefined) {
//     i = i+1
//     if (max<arr[i]) {
//         max = arr[i]
//     }
// }
// console.log(max)

// // 1c
// let min = arr[0]
// while (arr[i] !== undefined) {
//     i = i+1
//     if (min>arr[i]) {
//         min = arr[i]
//     }
// }
// console.log(min)

// // 1d
// i = 0
// sum = 0
// while (arr[i] !== undefined) {
//     sum += arr[i]
//     i = i + 1
// }
// console.log('trung binh cong la: ', sum/i)

// // 1e
// let arr_new = []
// while (arr[i] !== undefined) {
//     arr_new[i] = arr[doDaiMang-1-i]
//     i++
// }
// console.log(arr, arr_new)

// // 1f

// const tanSuatXuatHien = {}
// while (arr[i] !== undefined) {
//     const phanTuThuI = arr[i]
//     tanSuatXuatHien[phanTuThuI] = (tanSuatXuatHien[phanTuThuI] || 0) +1
//     i++
// }
// console.log(tanSuatXuatHien)


// // 1g
// let arr_new = []
// while (arr[i] !== undefined) {
//     arr_new[i+1] = arr[i]
//     i++
// }
// arr_new[0] = 117
// console.log(arr)
// console.log(arr_new)

// // 1h
// let chechTangDan = true
// while (arr[i] !== undefined) {
//     if (arr[i+1] < arr[i]) {
//         chechTangDan = false
//         break
//     }
//     i++
// }

// if (chechTangDan === true) {
//     console.log("mang tang dan")
// } 
// else {
//     console.log("mang k tang dan")
// }

// // 1i
// while (arr[i] !== undefined) {
//     let j = i + 1
//     while(arr[j] !== undefined) {
//         if (arr[i] > arr[j]) {
//             let tmp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = tmp    
            
//         }
//         j = j + 1
//     }
//     i = i +1
// }
// console.log(arr)

// // 1j
// while (arr[i] !== undefined) {
//     let j = i + 1
//     while(arr[j] !== undefined) {
//         if (arr[i] < arr[j]) {
//             let tmp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = tmp    
            
//         }
//         j = j + 1
//     }
//     i = i +1
// }
// console.log(arr)




// // 1k
// while (arr[i] !== undefined) {
//     i++
//     if (arr[i]%2==0) {
//         console.log('so chan la:',arr[i])
//     }
    
// }




// 1l
while (arr[i] !== undefined) {
    i++
    if (arr[i]%2!=0) {
        console.log('so le:', arr[i])
    }    
}


let arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]


// // 2a
// while (arr2[i] !== undefined) {
//     let j = i+1
//     while (arr2[j] !== undefined) {
//         if(arr2[i] + arr2[j] == 10) {
//             console.log("tai vi tri %s va vi tri %s la %s + %s = 10", i, j, arr2[i], arr2[j])

//         }
//         j++
//     }
//     i++
// }


// 2b
while (arr2[i] !== undefined) {
    let j = i + 1
    while(arr2[j] !== undefined) {
        if (arr2[i] < arr2[j]) {
            let tmp = arr2[i]
            arr2[i] = arr2[j]
            arr2[j] = tmp    
            
        }
        j = j + 1
    }
    i = i +1
}
if (arr[i] = arr[i+1])
console.log(arr2)














