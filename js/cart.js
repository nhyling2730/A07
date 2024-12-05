// document.addEventListener("DOMContentLoaded", function () {
//     const cartContainer = document.querySelector(".orders--items");
//     const cartQuantityElement = document.getElementById("cartQuantity");
//     const subtotalElement = document.getElementById("subtotal");
//     const totalElement = document.getElementById("total");
//     const cartItemCount = document.getElementById("cartItemCount");
//     const shippingFee = 10000; // Phí vận chuyển cố định
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const modal = document.getElementById("custom-order-modal");
//     const closeModalBtn = document.getElementById("custom-close-order-modal");
//     const confirmYes = document.getElementById("custom-yes");
//     const confirmNo = document.getElementById("custom-no");
    

//     let currentIndexToDelete = null; // Lưu trữ sản phẩm cần xóa

//     // Hàm cập nhật tổng tiền và số lượng
//     function updateOrderSummary() {
//         let selectedItems = 0;
//         let subtotal = 0;

//         cart.forEach((item, index) => {
//             const checkbox = document.querySelector(`.item-select[data-index="${index}"]`);
//             if (checkbox && checkbox.checked) {
//                 selectedItems += item.quantity;
//                 subtotal += item.quantity * item.price; // Tính tổng tiền
//             }
//         });

//         subtotalElement.textContent = formatCurrency(subtotal);
//         totalElement.textContent = formatCurrency(subtotal + shippingFee);
//         cartItemCount.textContent = selectedItems;
//     }

//     // Hàm cập nhật tổng số lượng trên icon giỏ hàng
//     function updateCartQuantity() {
//         const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
//         cartQuantityElement.textContent = totalQuantity;
//         localStorage.setItem("cartQuantity", totalQuantity);
//     }

//     // Hàm hiển thị giỏ hàng
//     function renderCart() {
//         cartContainer.innerHTML = "";
//         cart.forEach((item, index) => {
//             cartContainer.innerHTML += `
// <div class="orders--items row">
//     <div class="orders--items-left col-2">
//         <div class="items--thumb">
//             <input type="checkbox" class="item-select" data-index="${index}" style="margin-bottom: 10px;">
//             <img src="${item.image}" alt="${item.name}">
//             <div class="product_qty">
//                 <form id="myform" method="POST" class="quantity row m-0" action="#">
//                     <button type="button" class="qtyminus minus" data-index="${index}">
//                         <i class="fas fa-minus"></i>
//                     </button>
//                     <input name="quantity" type="text" id="qty" value="${item.quantity}" class="text-center qty" disabled>
//                     <button type="button" class="qtyplus plus" data-index="${index}">
//                         <i class="fas fa-plus"></i>
//                     </button>
//                 </form>
//             </div>
//         </div>
//     </div>
//     <div class="orders--items-right col-10">
//         <div class="items--name">
//             <a href="${item.image}"><b>${item.name}</b></a>
//         </div>
//         <div class="items--size">Kích thước: <span>${item.size || "S"}</span></div>
//         <div class="items--price">Đơn giá: <span>${formatCurrency(item.price)}</span></div>
//         <div class="items--total">Tổng: <span>${formatCurrency(item.quantity * item.price)}</span></div>
//         <button class="items--remove" data-index="${index}">Xoá</button>
//     </div>
// </div>;`
//         });

//         // Thêm sự kiện cho checkbox
//         const checkboxes = document.querySelectorAll(".item-select");
//         checkboxes.forEach((checkbox) => {
//             checkbox.addEventListener("change", updateOrderSummary);
//         });

//         updateOrderSummary(); 
//     }

//     function openModal(index) {
//         currentIndexToDelete = index; 
//         modal.style.display = "block"; 
//     }    

//     function closeModal() {
//         modal.style.display = "none"; 
//         currentIndexToDelete = null; 
//     }
    

//     confirmYes.addEventListener("click", function () {
//         if (currentIndexToDelete !== null) {
//             cart.splice(currentIndexToDelete, 1); 
//             localStorage.setItem("cart", JSON.stringify(cart)); 
//             renderCart(); 
//             updateCartQuantity(); 
//         }
//         closeModal(); 
//     });
//     confirmNo.addEventListener("click", closeModal);
//     closeModalBtn.addEventListener("click", closeModal);
//     cartContainer.addEventListener("click", function (event) {
//         if (event.target.classList.contains("items--remove")) {
//             const index = parseInt(event.target.getAttribute("data-index")); 
//             openModal(index); // Hiển thị modal
//         }
//     });
//     cartContainer.addEventListener("click", function (event) {
//         const index = parseInt(event.target.getAttribute("data-index")); 
//         if (isNaN(index)) return;
    
//         // Tăng số lượng
//         if (event.target.classList.contains("qtyplus")) {
//             cart[index].quantity++; 
//             const quantityInput = event.target.parentElement.querySelector("input");
//             quantityInput.value = cart[index].quantity; 
//         }
    
//         // Giảm số lượng
//         else if (event.target.classList.contains("qtyminus")) {
//             if (cart[index].quantity > 1) { 
//                 cart[index].quantity--;
//                 const quantityInput = event.target.parentElement.querySelector("input"); 
//                 quantityInput.value = cart[index].quantity; 
//             }
//         }
    
//         else if (event.target.classList.contains("items--remove")) {
//             openModal(index); 
//             return;
//         }
//         localStorage.setItem("cart", JSON.stringify(cart));
    
//         updateOrderSummary(); 
//     });

    
//         // Xử lý nút "Đặt hàng"
//         checkoutButton.addEventListener("click", function (event) {
//             if (!isAnyItemSelected()) {
//                 alert("Vui lòng chọn ít nhất một sản phẩm trước khi đặt hàng!");
//                 event.preventDefault(); // Ngăn không chuyển trang
//                 return;
//             }
    
//             // Nếu có sản phẩm được chọn, tiếp tục chuyển sang trang thanh toán
//             window.location.href = "./payment.html"; // Đường dẫn trang thanh toán
//         });
    
//         renderCart();
//         updateCartQuantity();
//     });
    

//------------------------------------------------
// document.addEventListener("DOMContentLoaded", function () {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const ordersItemsContainer = document.querySelector(".orders--items");
//     const modal = document.getElementById("delete-confirmation-modal");
//     const cancelDeleteBtn = document.getElementById("cancel-delete");
//     const confirmDeleteBtn = document.getElementById("confirm-delete");
//     let deleteIndex = null; // Store the index of the item to delete
  
//     if (cart.length === 0) {
//       ordersItemsContainer.innerHTML = "<p>Giỏ hàng trống</p>";
//     } else {
//       cart.forEach((item, index) => {
//         const itemHTML = `
//           <div class="order-item row mb-4 p-3 border rounded shadow-sm align-items-center" data-index="${index}" style="background-color: #f9f9f9;">
//             <div class="col-3 d-flex justify-content-center">
//               <img src="${item.image}" alt="${item.name}" class="img-fluid rounded" style="max-height: 100px;">
//             </div>
//             <div class="col-6">
//               <h5 class="fw-bold">${item.name}</h5>
//               <div class="d-flex justify-content-between align-items-center">
//                 <p class="mb-0"><b>Kích cỡ:</b> ${item.size}</p>
//               </div>
//               <p class="text-primary fw-bold mt-2" style="font-size: 1.2em;">${item.price}</p>
//               <div class="quantity-control mt-2 d-flex align-items-center">
//                 <button class="btn btn-sm btn-outline-secondary quantity-decrease" data-index="${index}">-</button>
//                 <input type="number" class="form-control text-center mx-2" value="${item.quantity}" min="1" style="width: 60px;" data-index="${index}">
//                 <button class="btn btn-sm btn-outline-secondary quantity-increase" data-index="${index}">+</button>
//               </div>
//             </div>
//             <div class="col-3 d-flex flex-column justify-content-between align-items-end">
//               <button class="btn btn-danger btn-sm remove-btn" style="width: 100%;">Xoá</button>
//             </div>
//           </div>
//         `;
//         ordersItemsContainer.innerHTML += itemHTML;
//       });
  
//       // Quantity control
//       document.querySelectorAll(".quantity-increase").forEach((button) => {
//         button.addEventListener("click", function () {
//           const index = button.getAttribute("data-index");
//           cart[index].quantity += 1;
//           let arr = JSON.stringify(cart);
//           localStorage.setItem("cart", arr);
//           location.reload();
//            // Update subtotal and total
        
//       })});
  
//       document.querySelectorAll(".quantity-decrease").forEach((button) => {
//         button.addEventListener("click", function () {
//           const index = button.getAttribute("data-index");
//           if (cart[index].quantity > 1) {
//             cart[index].quantity -= 1;
//             localStorage.setItem("cart", JSON.stringify(cart));
//             location.reload();
//           }
//            // Update subtotal and total
   
//         });
//       });
  
//       // Remove button
//       document.querySelectorAll(".remove-btn").forEach((button, index) => {
//         button.addEventListener("click", function () {
//           deleteIndex = index;
//           modal.style.display = "flex";
//         });
//       });
//     }
  
//     // Cancel delete
//     cancelDeleteBtn.addEventListener("click", function () {
//       modal.style.display = "none";
//       deleteIndex = null;
//     });
  
//     // Confirm delete
//     confirmDeleteBtn.addEventListener("click", function () {
//       if (deleteIndex !== null) {
//         cart.splice(deleteIndex, 1);
//         localStorage.setItem("cart", JSON.stringify(cart));
//         location.reload();
//       }
//       modal.style.display = "none";
//     });
  
//     // Update subtotal and total
//     const subtotal = cart.reduce(
//       (sum, item) => sum + parseFloat(item.price.replace(" VNĐ", "").replace(".", "")) * item.quantity,
//       0
//     ) * 1000;
//     document.getElementById("subtotal").textContent = `${subtotal.toLocaleString()} VNĐ`;
//     document.getElementById("total").textContent = `${(subtotal).toLocaleString()} VNĐ`; // Add shipping fee
//   });
  
  
document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.querySelector(".orders--items");
    const cartQuantityElement = document.getElementById("cartQuantity");
    const subtotalElement = document.getElementById("subtotal");
    const totalElement = document.getElementById("total");
    const cartItemCount = document.getElementById("cartItemCount");
    const shippingFee = 10000; // Phí vận chuyển cố định
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const modal = document.getElementById("custom-order-modal");
    const closeModalBtn = document.getElementById("custom-close-order-modal");
    const confirmYes = document.getElementById("custom-yes");
    const confirmNo = document.getElementById("custom-no");

    let currentIndexToDelete = null; // Lưu trữ sản phẩm cần xóa

    // Hàm định dạng tiền
    function formatCurrency(amount) {
        return `${amount.toLocaleString()} VNĐ`;
    }

    // Hàm cập nhật tổng tiền và số lượng
    function updateOrderSummary() {
        let selectedItems = 0;
        let subtotal = 0;

        cart.forEach((item, index) => {
            const checkbox = document.querySelector(`.item-select[data-index="${index}"]`);
            if (checkbox && checkbox.checked) {
                selectedItems += item.quantity;
                subtotal += item.quantity * item.price; // Tính tổng tiền
            }
        });

        subtotalElement.textContent = formatCurrency(subtotal);
        totalElement.textContent = formatCurrency(subtotal + shippingFee);
        cartItemCount.textContent = selectedItems;
    }

    // Hàm cập nhật tổng số lượng trên icon giỏ hàng
    function updateCartQuantity() {
        const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartQuantityElement.textContent = totalQuantity;
        localStorage.setItem("cartQuantity", totalQuantity);
    }

    // Hàm hiển thị giỏ hàng
    function renderCart() {
        cartContainer.innerHTML = "";
        cart.forEach((item, index) => {
            cartContainer.innerHTML += `
<div class="orders--items row">
    <div class="orders--items-left col-2">
        <div class="items--thumb">
            <input type="checkbox" class="item-select" data-index="${index}" style="margin-bottom: 10px;">
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
            <a href="${item.image}"><b>${item.name}</b></a>
        </div>
        <div class="items--size">Kích thước: <span>${item.size || "S"}</span></div>
        <div class="items--price">Đơn giá: <span>${formatCurrency(item.price)}</span></div>
        <div class="items--total">Tổng: <span>${formatCurrency(item.quantity * item.price.replace(" VNĐ", "").replace(".",""))}</span></div>
        <button class="items--remove" data-index="${index}">Xoá</button>
    </div>
</div>`;
        });

        // Thêm sự kiện cho checkbox
        const checkboxes = document.querySelectorAll(".item-select");
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", updateOrderSummary);
        });

        updateOrderSummary();
    }

    function openModal(index) {
        currentIndexToDelete = index;
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
        currentIndexToDelete = null;
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
    cartContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("items--remove")) {
            const index = parseInt(event.target.getAttribute("data-index"));
            openModal(index); // Hiển thị modal
        }
    });
    cartContainer.addEventListener("click", function (event) {
        const index = parseInt(event.target.getAttribute("data-index"));
        if (isNaN(index)) return;

        // Tăng số lượng
        if (event.target.classList.contains("qtyplus")) {
            cart[index].quantity++;
            const quantityInput = event.target.parentElement.querySelector("input");
            quantityInput.value = cart[index].quantity;
        }

        // Giảm số lượng
        else if (event.target.classList.contains("qtyminus")) {
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
                const quantityInput = event.target.parentElement.querySelector("input");
                quantityInput.value = cart[index].quantity;
            }
        }

        else if (event.target.classList.contains("items--remove")) {
            openModal(index);
            return;
        }
        localStorage.setItem("cart", JSON.stringify(cart));

        updateOrderSummary();
    });

    // Xử lý nút "Đặt hàng"
    // checkoutButton.addEventListener("click", function (event) {
    //     if (!isAnyItemSelected()) {
    //         alert("Vui lòng chọn ít nhất một sản phẩm trước khi đặt hàng!");
    //         event.preventDefault(); 
    //         return;
    //     }


    //     window.location.href = "./payment.html"; 
    // });

    renderCart();
    updateCartQuantity();

});
