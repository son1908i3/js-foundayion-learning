function giaiPhuongTrinh(a, b, c) {
    if (a==0) {
        throw new Error("khong phai phuong trinh bac 2");
    }
    var delta = b * b - 4 * a * c;
    switch (true) {
        case delta > 0:
            var x1 = (-b + Math.sqrt(delta)) / (2 * a);
            var x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return [x1, x2];
        case delta == 0:
            var x = -b / (2 * a);
            return [x];
        default:
            throw new Error("phuong trinh vo nghiem");
    }
}
try {
    var a = 3;
    var b = 8;
    var c = 0;
    var ketQua = giaiPhuongTrinh(a, b, c);
    console.log("Nghiem cua phuong trinh la :" + ketQua);
} catch (error) {
    console.error(error);
}
