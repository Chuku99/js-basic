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
function timNghiem(a,x,b){
    let ptrinh = a*x**2 + b*x + c 
    if (a==0 && b==0){
        return "ptrinh vo nghiem"
    }
    else if (a==0 ){
        return "ptrinh co 1 nghiem la -c/b"
    }
    else if (b*2-4*a*c < 0){
        return "ptrinh vo nghiem"

    }
    else {
        return (-b + MathMLElement.sqrt(b*2-4*a*c)/a) && 
        
    }

}



