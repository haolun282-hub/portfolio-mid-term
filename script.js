/*XỬ LÝ TƯƠNG TÁC GIAO DIỆN (MOBILE MENU TOGGLE)*/
document.addEventListener('DOMContentLoaded', () => {
  //Bắt các phần tử DOM của nút hamburger và danh sách menu
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  //Kiểm tra sự tồn tại của phần tử trước khi gán sự kiện
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      //Bật/tắt class 'show' để ẩn/hiện menu trên di động
      navLinks.classList.toggle('show');
      
      //Chuyển đổi biểu tượng nút giữa Hamburger (☰) và Dấu X (✕)
      if (navLinks.classList.contains('show')) {
        menuToggle.innerHTML = '&#10005;';
      } else {
        menuToggle.innerHTML = '&#9776;';
      }
    });
  }
});