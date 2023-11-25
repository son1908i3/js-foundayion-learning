function tinhDienTich(hinhhoc,canh){
    try{
        switch(hinhhoc){
            case 'hinhChuNhat':
                if(canh.length != 2){
                    throw "hinh chu nhat can co chieu dai va chieu rong";
                }
                let chieudai = canh[0];
                let chieurong = canh[1];
                let dientichHCN = chieudai * chieurong;
                console.log("Dien tich hinh chu nhat: " + dientichHCN);
                break;
            case 'hinhTamGiac':
                if(canh.length != 2){
                    throw "hinh tam giac can co chieu cao va canh day";
                }
                let chieuCao = canh[0];
                let canhDay = canh[1];
                let dientichHTG = 0.5 * chieuCao * canhDay;
                console.log("Dien tich hinh tam giac: " + dientichHTG);
                break;
            case 'hinhTron':
                if(canh.length != 1){
                    throw "hinh tron can co ban kinh";
                }
                let bankinh = canh[0];
                let dientichHT = 3.14 * bankinh * bankinh;
                console.log("Dien tich hinh tron: " + dientichHT);
                break;
            default: 
                throw "khong tinh hinh nao ngoai 3 hinh tren";
        }
    }catch(error){
        console.error(error);
    }
        
}
tinhDienTich('hinhChuNhat',[4,5]);
tinhDienTich('hinhTamGiac',[1,3]);
tinhDienTich('hinhTron',[3]);
