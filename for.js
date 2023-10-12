let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
i = 0
let doDaiMang = arr.length
let sum = 0

function cau1a(){
    for (i; i<doDaiMang; i++) {
        console.log("phan tu thu %s la %s", i, arr[i])
    }
}
// cau1a()

function cau1b() {
    for (i; i<doDaiMang; i++) {
        sum = sum + arr[i]
    }
    console.log("tong cac phan tu la: ", sum)
}
// cau1b()

function cau1c() {
    let max = arr[0]
    for (i; i<doDaiMang; i++) {
        if (max<arr[i]) {
            max = arr[i]
        }
    }
    console.log("phan tu lon nhat la: ", max)
    
    let min = arr[0]
    for (i; i<doDaiMang; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    console.log("phan tu be nhat la: ", min)
}
// cau1c()

function cau1d() {
    for (i; i<doDaiMang; i++) {
        sum = sum + arr[i]
        tbc = sum / doDaiMang
    }
    console.log("trung binh cong cac phan tu trong mang la:", tbc)
}
// cau1d()

function cau1e() {
    let arr_new = []
    for (i; i<doDaiMang; i++) {
        arr_new[i] = arr[doDaiMang-1-i]
    }
    console.log(arr_new)
}
// cau1e()

function cau1f() {
    let tanSuatXuatHien = {}
    for (i; i<doDaiMang; i++) {
        let phanTuThuI = arr[i]
        tanSuatXuatHien[phanTuThuI] = (tanSuatXuatHien[phanTuThuI] || 0) + 1
        
    }
    console.log(tanSuatXuatHien)
}
// cau1f()

function cau1g() {
    let arr_new = []
    for (i; i<doDaiMang; i++) {
        arr_new[i+1] = arr[i]
    }
    arr_new[0] = 117
    console.log("do dai mang cu la: ", doDaiMang)
    console.log("do dai mang moi la: ", arr_new.length)
    console.log(arr_new)
}
// cau1g()

function cau1h() {
    let checkTangDan = true
    for (i; i<doDaiMang; i++) {
        if (arr[i+1] < arr[i]) {
            checkTangDan = false 
            break
        }
    }
    if (checkTangDan === true) {
        console.log("mang tang dan")
    } else {
        console.log("mang k tang dan")
    }
}
// cau1h()


function cau1i() {
    for (i; i<doDaiMang; i++) {
        let j = i + 1
        for (j; j<doDaiMang; j++) {
            if (arr[i] > arr[j]) {
                let tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
            }
        }
    }
    console.log(arr)

}
// cau1i()

function cau1j() {
    for (i; i<doDaiMang; i++) {
        for (j = i + 1; j<doDaiMang; j++) {
            if (arr[i] < arr[j]) {
                let tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
            }
        }
    }
    console.log(arr)

}
cau1j()



