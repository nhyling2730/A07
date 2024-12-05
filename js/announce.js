// Chọn tất cả các nút "Đặt mua"
const buyNowButtons = document.querySelectorAll('.buy-now');

// Chọn modal và nút đóng của nó
const loginModal = document.getElementById('login-modal');
const closeModal = document.getElementById('close-modal');

// Hàm mở modal
const openModal = () => {
    // Hiển thị modal
    loginModal.style.display = 'block';

    // Thêm các thuộc tính CSS để modal nằm ở giữa màn hình
    loginModal.style.position = 'fixed';
    loginModal.style.zIndex = '1000';
    loginModal.style.top = '0';
    loginModal.style.left = '0';
    loginModal.style.width = '100%';
    loginModal.style.height = '100%';
    loginModal.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'; // Màu nền mờ

    // Đặt modal-content ở giữa
    const modalContent = loginModal.querySelector('.modal-content');
    modalContent.style.position = 'absolute';
    modalContent.style.top = '50%';
    modalContent.style.left = '50%';
    modalContent.style.transform = 'translate(-50%, -50%)';
    modalContent.style.backgroundColor = '#fff';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '8px';
    modalContent.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    modalContent.style.textAlign = 'center';
    modalContent.style.width = '30%';
};

// Hàm đóng modal
const closeLoginModal = () => {
    loginModal.style.display = 'none'; // Ẩn modal
};

// Gắn sự kiện click cho tất cả các nút "Đặt mua"
buyNowButtons.forEach(button => {
    button.addEventListener('click', openModal);
});

// Gắn sự kiện click cho nút đóng modal
closeModal.addEventListener('click', closeLoginModal);

// Đóng modal khi click ra bên ngoài
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        closeLoginModal();
    }
});
