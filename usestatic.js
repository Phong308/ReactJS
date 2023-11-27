class ThongTin {
  constructor(ten, moTa) {
    this.ten = ten;
    this.moTa = moTa;
  }

  tinhToan(param = 1) {
    return param * 3;
  }
}

class HinhHoc extends ThongTin {
  constructor(ten, moTa, chieuDai) {
    super(ten, moTa);
    this.chieuDai = chieuDai;
  }

  tinhToanHinhHoc(param) {
    // Gọi hàm tinhToan từ lớp cha
    const ketQuaLopCha = super.tinhToan(param);
    
    // Thực hiện các thao tác khác tại đây nếu cần

    return ketQuaLopCha;
  }
}

// Tạo đối tượng của lớp HinhHoc
const hinhHocObj = new HinhHoc("Hình học", "Hình học mô tả", 5);

// Gọi các thuộc tính và hàm của lớp HinhHoc và lớp cha ThongTin
console.log(`Tên: ${hinhHocObj.ten}`);
console.log(`Mô tả: ${hinhHocObj.moTa}`);
console.log(`Chiều dài: ${hinhHocObj.chieuDai}`);
console.log(`Kết quả tính toán: ${hinhHocObj.tinhToanHinhHoc(2)}`);
