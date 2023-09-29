// 1.a
function kiemTraAmDuong(n) {
    if (n>0) {
        return "n la so duong"
    }
    else if (n<0) {
        return "n la so am"
    }
    else {
        return "n k am k duong"
    }
}
let so_n = kiemTraAmDuong(0)
console.log(so_n)
    
// 1.b
function kiemTraChanLe(n) {
    if (n%2===0) {
        return "n la so chan"
    }
    else 
        return "n la so le"
}

let n = kiemTraChanLe(0)
console.log(n)

// 1.c
function timMax(a,b,c) {
    if (a>b && a>c ) {
        return "a la so lon nhat"
    }
    else if  (b>a && b>c ) {
        return "b la so lon nhat"
    }
    else {
        return "c la so lon nhat"
    }
}
let max = timMax(10,-3,0)
console.log(max)

// 1.d
function kiemTraNamNhuan(year){
    if (year%4==0 && year%100!=0 ){
        return "la nam nhuan"
    }
    else {
        return "k phai nam nhuan"
    }
    
}
console.log(kiemTraNamNhuan(2000))

// 1.e
function checkNguyenAmPhuAm(char) {
    // let nguyenAm = "a" || "A" || "i" ||"I" || "u" || "U" || "e" || "E" || "o" || "O"
    if (char=="a" || char=="i" || char=="u" || char=="e" || char=="o"){
        return "la nguyen am"
    }
    else {
        return "la phu am"
    }
}
console.log(checkNguyenAmPhuAm("b"))
console.log(checkNguyenAmPhuAm("i"))
console.log(checkNguyenAmPhuAm("q"))
console.log(checkNguyenAmPhuAm("a"))

// 2.a
let a = 2
let b = 3
let c = 1
function timNghiem(a,b,c){
    let delta = b**2-4*a*c
    if (delta<0){
        return "ptrinh vo nghiem"
    }
    else if (delta==0 ){
        return `ptrinh co 1 nghiem la x1=x2= ${(-b/2*a)}`
    }
    else if (b*2-4*a*c < 0){
        return "ptrinh vo nghiem"

    }
    else {
        const x1 = -b + Math.sqrt(delta)/2*a
        const x2 = -b - Math.sqrt(delta)/2*a
    }

}
console.log(timNghiem(a,b,c))

function thueThuNhap(luong) {
    if (luong>=20) {
        return "thue thu nhap la:", 0.2*luong
    }
    else if (luong>=15) {
        return "thue thu nhap la:", 0.15*luong
    }
    else {
        return "k co thue thu nhap"
    }
}
console.log(15)

function hocLuc(diem) {
    if (diem>=9){
        return "hang A"
    }
    else if (7<=diem<9) {
        return "hang B"
    }
    else if (5<=diem<7) {
        return "hang C"
    }
    else {
        return "hang D"
    }
}
console.log(hocLuc(7.5))

function cuocDT(so_phut) {
    const phiThueBao = 25000
    let tongChiPhi = 0
    let chiPhi = 0
    if (so_phut<50) {
        chiPhi= so_phut*600
    }
    else if (50<so_phut && so_phut<200){
        chiPhi= 50*600 + (so_phut-50)*400
    }
    else if (so_phut>200) {
        chiPhi = 50*600+150*400+(so_phut-200)*200
    }
    tongChiPhi = phiThueBao + chiPhi
    return tongChiPhi
}
console.log(cuocDT(170))


