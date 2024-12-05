// Lấy tất cả các nút xóa
const deleteButtons = document.querySelectorAll('.items--remove');
const confirmDeletePopup = document.getElementById('confirmDeletePopup');
const confirmYes = document.getElementById('confirmYes');
const confirmNo = document.getElementById('confirmNo');

// Hàm hiển thị popup xác nhận
deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Hiển thị popup
        confirmDeletePopup.style.display = 'flex';
        // Lưu lại nút xóa của sản phẩm cần xóa
        window.selectedProductToDelete = this.closest('.orders--items');
    });
});

// Nếu người dùng chọn "Có", xóa sản phẩm
confirmYes.addEventListener('click', function() {
    if (window.selectedProductToDelete) {
        window.selectedProductToDelete.remove(); // Xóa sản phẩm
    }
    confirmDeletePopup.style.display = 'none'; // Ẩn popup
});

// Nếu người dùng chọn "Không", ẩn popup
confirmNo.addEventListener('click', function() {
    confirmDeletePopup.style.display = 'none'; // Ẩn popup
});