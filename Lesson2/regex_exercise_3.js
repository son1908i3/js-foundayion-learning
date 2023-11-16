function chuoiSo(chuSo){
    return chuSo.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
    
}
let numbers = 10000.23;
let b = chuoiSo(numbers);
console.log(b);

