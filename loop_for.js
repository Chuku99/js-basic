// // 1a 
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let doDaiMang = arr.length
// for (i=0; i<doDaiMang; i++) {
//     console.log("phan tu thu %s = %s", i, arr[i])
// }

// 1b
let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let doDaiMang = arr.length
let tong  = 0
for (i=0; i<doDaiMang; i++) {
    tong += arr[i]
}
console.log(tong)

// // 1c
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let max = arr[0]
// for (i=0; i<arr.length; i++) {
//     if (max<arr[i]) {
//         max = arr[i];
//     }
// }
// console.log('max: ', max)

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let min = arr[3]
// for (i=0; i<arr.length; ++i) {
//     if (min>arr[i]) {
//         min = arr[i];
//     }
// }
// console.log('min: ', min)

// // 1d
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let doDaiMang = arr.length
// let tong = 0
// for (i=0; i<doDaiMang; i++) {
//     tong += arr[i]
//     tbc = tong/doDaiMang
// }
// console.log("tong la:", tong, "trung binh cong la:", tbc)

// // 1e
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let doDaiMang = arr.length
// for (i=0; i<doDaiMang; i++) {
//     console.log(arr[doDaiMang-1-i])
// }



// // 1f
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let doDaiMang = arr.length
// const tanSuatXuatHien = {}
// for (let i = 0; i < doDaiMang; i++){
//     const phanTuThuI = arr[i];
//     tanSuatXuatHien[phanTuThuI] = (tanSuatXuatHien[phanTuThuI] || 0) + 1;
// }
// console.log('=>>>', tanSuatXuatHien)









// // 1g
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// arr[0] = 117
// console.log(arr)

// // 1i
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// arr.sort(function(a,b){
//     return a-b
// }) 
// console.log(arr)

// // ij
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// arr.sort(function(a,b){
//     return b-a
// }) 
// console.log(arr)

// 1k
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for (i=0; i<arr.length; i++) {
//     if (arr[i]%2==0) {
//         console.log(arr[i])
//     }
// }

// 1l
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for (i=0; i<arr.length; i++) {
//     if (arr[i]%2!=0) {
//         console.log(arr[i])
//     }
// }

// // 2a
// let arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
// for (i=0; i<arr2.length; i++) {
//     for (j=i+1; j<arr2.length; j++) {
//         if (arr2[i] + arr2[j] ==10) {
            
//             console.log("tai vi tri %s va vi tri %s la %s + %s =10)", i, j, arr2[i], arr2[j])
//         }
//     }
// }


// // 2b
// let arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
// let new_arr = arr2.reduce(function(a,b){
//     if (a.indexOf(b)===-1){
//         a.push(b)
//     }
//     return a
// }, [])
// console.log(new_arr)

// // 2d
// let arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
// arr2_new = arr2.sort(function(a,b) {
//     return b-a
// })
// console.log(arr2_new)
// console.log("tong 3 so lon nhat trong mang la: ", arr2_new[0]+arr2_new[1]+arr2_new[2])

// // 2e
// let arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
// arr2_new = arr2.sort(function(a,b) {
//     return b-a
// })
// console.log(arr2_new)
// console.log("tbc 3 so lon nhat trong mang la: ", (arr2_new[0]+arr2_new[1]+arr2_new[2])/3)

// // 2f
// let arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
// arr2_new = arr2.sort(function(a,b) {
//     return b-a
// })
// console.log(arr2_new)
// console.log(arr2_new[0]-arr2_new[arr2.length-1])




























