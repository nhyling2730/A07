document.querySelectorAll('input[name="btnradio"]').forEach((radio) => {
    radio.addEventListener('change', function () {
        // Ẩn tất cả các phương thức thanh toán
        document.querySelectorAll('.payment__method').forEach((method) => {
            method.style.display = 'none';
        });

        // Hiển thị phương thức thanh toán đã chọn
        if (this.id === "btnradio1") {
            document.querySelector('.payment__method--visa').style.display = 'block'; // Visa
        } else if (this.id === "btnradio2") {
            document.querySelector('.payment__method--bank').style.display = 'block'; // Chuyển khoản
        } else if (this.id === "btnradio3") {
            document.querySelector('.payment__method--money').style.display = 'block'; // Tiền mặt
        }
    });
});