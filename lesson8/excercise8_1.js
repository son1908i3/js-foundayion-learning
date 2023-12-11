class HinhHoc {
    constructor() {
      this.type = "HinhHoc";
    }
    tinhDienTich() {
      return undefined;
    }
    tinhChuVi() {
      return undefined;
    }
  }
  class HinhChuNhat extends HinhHoc {
    constructor(width, height) {
      super();
      this.type = "HinhChuNhat";
      this.width = width;
      this.height = height;
    }

    tinhDienTich() {
      return this.width * this.height;
    }
    tinhChuVi() {
      return 2 * (this.width + this.height);
    }
  }
  class HinhVuong extends HinhHoc {
    constructor(side) {
      super(side, side);
      this.type = "HinhVuong";
    }
  }
  class HinhTron extends HinhHoc {
    constructor(radius) {
      super();
      this.type = "HinhTron";
      this.radius = radius;
    }
    tinhDienTich() {
      return Math.PI * Math.pow(this.radius, 2);
    }
    tinhChuVi() {
      return 2 * Math.PI * this.radius;
    }
  }
  class HinhTamGiac extends HinhHoc {
    constructor(side1, side2, side3) {
      super();
      this.type = "HinhTamGiac";
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
    tinhDienTich() {
      const s = (this.side1 + this.side2 + this.side3) / 2;
      return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    }
    tinhChuVi() {
      return this.side1 + this.side2 + this.side3;
    }
  }
  const hinhchunhat = new HinhChuNhat(5, 10);
  console.log(`dien tich HinhChuNhat: ${hinhchunhat.tinhDienTich()}`);
  console.log(`chu vi HinhChuNhat: ${hinhchunhat.tinhChuVi()}`);
  
  const hinhVuong = new HinhVuong(5);
  console.log(`dien tich HinhVuong: ${hinhVuong.tinhDienTich()}`);
  console.log(`chu vi HinhVuong: ${hinhVuong.tinhChuVi()}`);
  
  const hinhTron = new HinhTron(3);
  console.log(`dien tich HinhTron: ${hinhTron.tinhDienTich()}`);
  console.log(`chu vi HinhTron: ${hinhTron.tinhChuVi()}`);
  
  const hinhTamGiac = new HinhTamGiac(3, 4, 5);
  console.log(`dien tich HinhTamGiac: ${hinhTamGiac.tinhDienTich()}`);
  console.log(`chu vi HinhTamGiac: ${hinhTamGiac.tinhChuVi()}`);