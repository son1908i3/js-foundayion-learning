function chuoiSo(chuSo){
    console.log(chuSo.toString().replace(/\B(?=(\d{3})+(?!\d))/g,','));
}
chuoiSo(1000000.23);

