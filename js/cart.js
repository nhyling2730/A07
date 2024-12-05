document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.querySelector(".orders--items");
    const cartQuantityElement = document.getElementById("cartQuantity");
    const subtotalElement = document.getElementById("subtotal");
    const totalElement = document.getElementById("total");
    const cartItemCount = document.getElementById("cartItemCount");
    const shippingFee = 10000;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const modal = document.getElementById("custom-order-modal");
    const closeModalBtn = document.getElementById("custom-close-order-modal");
    const confirmYes = document.getElementById("custom-yes");
    const confirmNo = document.getElementById("custom-no");

    let currentIndexToDelete = null;

    // Hàm định dạng tiền tệ
    function formatCurrency(amount) {
        return `${amount.toLocaleString('vi-VN')} VNĐ`;
    }

    // Hàm cập nhật tổng tiền và số lượng
    function updateOrderSummary() {
        let subtotal = 0;

        cart.forEach(item => {
            subtotal += item.quantity * item.price;
        });

        subtotalElement.textContent = formatCurrency(subtotal);
        totalElement.textContent = formatCurrency(subtotal + shippingFee);
        cartItemCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    function updateCartQuantity() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartQuantityElement = document.getElementById("cartQuantity");

        if (cartQuantityElement) {
            cartQuantityElement.textContent = totalQuantity;
        }
    }

    // Hàm hiển thị giỏ hàng
    function renderCart() {
        cartContainer.innerHTML = "";

        const checkoutButton = document.querySelector(".total--pay");
        console.log(cart)

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Giỏ hàng trống</p>";
            updateOrderSummary();

            if (checkoutButton) {
                checkoutButton.style.backgroundColor = "#999";
                checkoutButton.style.cursor = "not-allowed";
                checkoutButton.querySelector("a").style.pointerEvents = "none";
            }
            return;
        }
        if (checkoutButton) {
            checkoutButton.style.backgroundColor = "";
            checkoutButton.style.cursor = "pointer";
            checkoutButton.querySelector("a").style.pointerEvents = "auto";
        }
        console.log(cart);
        cart.forEach((item, index) => {
            const img = item.image.replace('../../', '../');
            console.log(img)
            cartContainer.innerHTML += `
                    <div class="orders--items row">
            <div class="orders--items-left col-2">
                <div class="items--thumb">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="product_qty">
                        <form id="myform" method="POST" class="quantity row m-0" action="#">
                            <button type="button" class="qtyminus minus" data-index="${index}">
                                <i class="fas fa-minus"></i>
                            </button>
                            <input name="quantity" type="text" id="qty" value="${item.quantity}" class="text-center qty" disabled>
                            <button type="button" class="qtyplus plus" data-index="${index}">
                                <i class="fas fa-plus"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="orders--items-right col-10">
                <div class="items--name">
                    <a href="${img}"><b>${item.name}</b></a>
                </div>
                <div class="items--size">Kích cỡ: <span>${item.size || "S"}</span></div>
                <div class="items--price">Đơn giá: <span>${formatCurrency(item.price)}</span></div>
                <div class="items--total">Tổng: <span>${formatCurrency(item.quantity * item.price)}</span></div>
                <button class="items--remove" data-index="${index}">Xoá</button>
            </div>
        </div>`;
        });

        updateOrderSummary();
    }

    function openModal(index) {
        currentIndexToDelete = index;
        modal.style.display = "block";
    }

    confirmYes.addEventListener("click", function () {
        if (currentIndexToDelete !== null) {
            cart.splice(currentIndexToDelete, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
            updateCartQuantity();
        }
        closeModal();
    });

    confirmNo.addEventListener("click", closeModal);
    closeModalBtn.addEventListener("click", closeModal);

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = "none";
        currentIndexToDelete = null;
    }

    confirmNo.addEventListener("click", closeModal);
    closeModalBtn.addEventListener("click", closeModal);

    cartContainer.addEventListener("click", function (event) {
        const index = parseInt(event.target.getAttribute("data-index"));
        if (isNaN(index)) return;

        if (event.target.classList.contains("qtyplus")) {
            cart[index].quantity += 1;
        } else if (event.target.classList.contains("qtyminus")) {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            }
        } else if (event.target.classList.contains("items--remove")) {
            openModal(index);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
        updateCartQuantity();
    });


    renderCart();
    updateCartQuantity();

});

