function chiaBai(soNguoiChoi) {
    if (soNguoiChoi < 2 || soNguoiChoi > 4) {
      console.log("so nguoi choi khong hop le");
      
    }
  
    const boBai = [...Array(52).keys()];
    for (let i = 0; i < boBai.length - 1; i++) {
      const index = Math.floor(Math.random() * (boBai.length - i));
      const temp = boBai[i];
      boBai[i] = boBai[index];
      boBai[index] = temp;
    }
  
    const cacPhanBai = [];
    for (let i = 0; i < soNguoiChoi; i++) {
      const phatBai = [];
      for (let j = 0; j < 13; j++) {
        phatBai.push(boBai.pop());
      }
      cacPhanBai.push(phatBai);
    }
  
    return cacPhanBai;
  }
  
  const result = chiaBai(4);
  for (let i = 0; i < result.length; i++) {
    console.log(`nguoi choi ${i + 1}: ${result[i].map(card => `card ${card}`).join(', ')}`);
  }