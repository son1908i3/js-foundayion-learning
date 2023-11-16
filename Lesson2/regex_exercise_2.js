function chuoiKyTu(nameChuoi){
   return nameChuoi.match(/[ueoai]/ig).length;
    
}
let nameChuoi = "United States";
let soLuongNguyenAm = chuoiKyTu(nameChuoi);
console.log(soLuongNguyenAm);