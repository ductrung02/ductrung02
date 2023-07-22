// ++++++++++++++++ TÍNH TỔNG SẢN PHẨM ++++++++++++++++
// Hàm đếm số lượng phần tử theo class và hiển thị kết quả trong thẻ div
function countAndDisplayClass(className) {
  const elements = document.getElementsByClassName(className);
  const count = elements.length;

  // Hiển thị kết quả trong thẻ div có id "total-course"
  const resultDiv = document.getElementById("total-course");
  resultDiv.innerHTML = `${count} Khóa học`;
}

// Gọi hàm để đếm và hiển thị kết quả khi tài liệu HTML được tải
document.addEventListener("DOMContentLoaded", function () {
  const classNameToCount = "card-product";
  countAndDisplayClass(classNameToCount);
});

// +++++++++++++++++++ ĐỊNH DẠNG TIỀN TỆ VND +++++++++++++++++++
// Hàm định dạng tiền tệ VND và hiển thị với dấu phẩy ngăn cách hàng nghìn và VND ở phía sau
function formatCurrency(input) {
  // Xóa tất cả ký tự không phải số từ chuỗi đầu vào
  let value = input.value.replace(/\D/g, '');

  // Định dạng số tiền theo định dạng VND với dấu phẩy ngăn cách hàng nghìn và thêm khoảng trắng sau "VND"
  value = new Intl.NumberFormat('vi-VN').format(value);

  // Gán giá trị đã định dạng vào input và thêm dấu "VND" vào cuối giá trị
  input.value = value + " VND";

  // Đưa con trỏ về vị trí cuối cùng của input (sau khi " VND")
  input.setSelectionRange(value.length, value.length );
}

// Hàm chỉ cho phép nhập số
function allowOnlyNumbers(event) {
  const charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
  }
  return true;
}

// Hàm cho phép xóa số
function allowDelete(event) {
  const charCode = event.which ? event.which : event.keyCode;
  if (charCode === 8) {
      // Bắt sự kiện phím Backspace (charCode 8) và cho phép xóa số
      return true;
  }
  return allowOnlyNumbers(event); // Nếu không phải phím Backspace, gọi hàm chỉ cho phép nhập số
}

// 0000000000
// Hàm kiểm tra các ràng buộc
function checkConstraints() {
  const input1Value = parseInt(document.getElementById("price-input-1").value.replace(/\D/g, '')); // Chuyển giá trị input1 thành số nguyên
  const input2Value = parseInt(document.getElementById("price-input-2").value.replace(/\D/g, '')); // Chuyển giá trị input2 thành số nguyên

  const messageDiv = document.getElementById("notification-price-left-content");
  messageDiv.innerHTML = ""; // Reset thông báo trước khi kiểm tra điều kiện

  if (input1Value > input2Value) {
      messageDiv.innerHTML = "Giá trị 'Từ giá' phải bé hơn giá trị 'Đến giá'<br>";
  }

  if (input1Value > 10000000 || input2Value > 10000000) {
      messageDiv.innerHTML += " Bạn phải nhập giá trị bé hơn 10.000.000 VND<br>";
  }

}
