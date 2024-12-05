document.addEventListener('DOMContentLoaded', function () {
    const minusButtons = document.querySelectorAll('.qtyminus');
    const plusButtons = document.querySelectorAll('.qtyplus');
    const shippingFee = 10000; // Phí vận chuyển cố định
    const checkboxes = document.querySelectorAll('.select-item'); // Các checkbox chọn sản phẩm
    const totalElement = document.querySelector('.into--money span'); // Tổng tiền
    const cartQuantityElement = document.getElementById('cartQuantity'); // Số lượng trên biểu tượng giỏ hàng
    const cartItemCountElement = document.getElementById('cartItemCount'); // Số món trong nút thanh toán

    // Xử lý khi nhấn nút trừ
    minusButtons.forEach(button => {
        button.addEventListener('click', function () {
            const quantityInput = this.nextElementSibling;
            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) {
                quantity--;
                quantityInput.value = quantity;
                updateTotal(this);
            }
        });
    });

    // Xử lý khi nhấn nút cộng
    plusButtons.forEach(button => {
        button.addEventListener('click', function () {
            const quantityInput = this.previousElementSibling;
            let quantity = parseInt(quantityInput.value);
            quantity++;
            quantityInput.value = quantity;
            updateTotal(this);
        });
    });

    // Hàm cập nhật tổng giá cho sản phẩm khi thay đổi số lượng
    function updateTotal(button) {
        const cartItem = button.closest('.orders--items'); // Lấy phần tử chứa thông tin sản phẩm
        const unitPrice = parseInt(cartItem.querySelector('.items--price span').textContent.replace(/₫|,/g, ''));
        const quantity = parseInt(cartItem.querySelector('.quantity input').value);
        const totalPrice = unitPrice * quantity;

        // Cập nhật giá tổng cho sản phẩm hiện tại
        cartItem.querySelector('.items--total span').textContent = totalPrice.toLocaleString() + '₫';

        // Gọi hàm để cập nhật tổng tiền giỏ hàng
        calculateTotal();
    }

    // Hàm tính tổng tiền cho các sản phẩm được chọn
    function calculateTotal() {
        let total = 0;
        let itemCount = 0;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const cartItem = checkbox.closest('.orders--items');
                const itemTotal = parseInt(cartItem.querySelector('.items--total span').textContent.replace(/₫|,/g, ''));
                total += itemTotal;

                // Tính số món được chọn
                const quantity = parseInt(cartItem.querySelector('.quantity input').value);
                itemCount += quantity;
            }
        });

        // Cập nhật tạm tính và thành tiền
        document.querySelector('.temp--money span').textContent = total.toLocaleString() + '₫';
        totalElement.textContent = (total + shippingFee).toLocaleString() + '₫';

        // Cập nhật số món trong nút Thanh toán
        cartItemCountElement.textContent = itemCount;
    }

    // Gắn sự kiện thay đổi cho từng checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotal);
    });

    // Hàm cập nhật số lượng sản phẩm trên biểu tượng giỏ hàng
    function updateCartQuantity() {
        let totalQuantity = 0;

        checkboxes.forEach(checkbox => {
            const cartItem = checkbox.closest('.orders--items');
            const quantity = parseInt(cartItem.querySelector('.quantity input').value);
            totalQuantity += quantity;
        });

        cartQuantityElement.textContent = totalQuantity;
    }

    // Gọi hàm tính tổng ngay khi trang được tải
    calculateTotal();
    updateCartQuantity();
});
