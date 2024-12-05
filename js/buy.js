document.addEventListener("DOMContentLoaded", () => {
    const renderProducts = [
      {
        "productCode": "HC01",
        "image": "../image/phin/phisuanda_nho.png",
        "category": "CÀ PHÊ PHIN",
        "name": "Phin sữa đá",
        "price": "35.000 VNĐ",
        "description": "Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối trộn độc đáo giữa hạt Robusta từ cao nguyên Việt Nam, thêm Arabica thơm lừng. Cà phê được pha từ Phin truyền thống, hoà cùng sữa đặc sánh và thêm vào chút đá tạo nên ly Phin Sữa Đá – Đậm Đà Chất Phin.",
        "availability": true 
      },
      {
        "productCode": "HC02",
        "image": "../image/phin/phindenda_nho.png",
        "category": "CÀ PHÊ PHIN",
        "name": "Phin đen đá",
        "price": "32.000 VNĐ",
        "description": "Dành cho những tín đồ cà phê đích thực! Hương vị cà phê truyền thống được phối trộn độc đáo tại Highlands. Cà phê đậm đà pha hoàn toàn từ Phin, cho thêm 1 thìa đường, một ít đá viên mát lạnh, tạo nên Phin Đen Đá mang vị cà phê đậm đà chất Phin.",
        "availability": true 
      },
      {
        "productCode": "HC04",
        "image": "../image/phindi/phindihanhnhan_nho.png",
        "category": "PHINDI",
        "name": "Phindi hạnh nhân",
        "price": "55.000 VNĐ",
        "description": "PhinDi Hạnh Nhân - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Hạnh nhân thơm bùi mang đến hương vị mới lạ, không thể hấp dẫn hơn!",
        "availability": true 
      },
      {
        "productCode": "HC05",
        "image": "../image/phindi/phindikemsua_nho.png",
        "category": "PHINDI",
        "name": "Phindi kem sữa",
        "price": "55.000 VNĐ",
        "description": "PhinDi Kem Sữa - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Kem Sữa béo ngậy mang đến hương vị mới lạ, không thể hấp dẫn hơn!",
        "availability": true 
      },
      {
        "productCode": "HC06",
        "image": "../image/phindi/phindichoco_nho.png",
        "category": "PHINDI",
        "name": "Phindi choco",
        "price": "55.000 VNĐ",
        "description": "PhinDi Choco - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Choco ngọt tan mang đến hương vị mới lạ, không thể hấp dẫn hơn!",
        "availability": true 
      },
      {
        "productCode": "HC07",
        "image": "../image/phindi/phindicassia_nho.png",
        "category": "PHINDI",
        "name": "Phindi cassia",
        "price": "55.000 VNĐ",
        "description": "Với chất phin êm ái, hương vị cà phê Việt Nam hiện đại kết hợp cùng hương quế nhẹ nhàng và thạch cà phê hấp dẫn.",
        "availability": false
      },
    ];
  
    let pageSize = 4;
    let currentPage = 1;
    let cartCount = 0; 

    const productContainer = document.querySelector(".product-grid");
    const paginationContainer = document.querySelector(".pagination");
    const cartCountElement = document.getElementById('cart-count'); 

    const listCategory = productContainer.getAttribute('data-category');
  
    let filteredRenderProducts = renderProducts;
    if (listCategory) {
        filteredRenderProducts = filteredRenderProducts.filter(item => item.category == listCategory);
    }

    const customOrderModal = document.getElementById('custom-order-modal');
    const customCloseOrderModal = document.getElementById('custom-close-order-modal');
    const customContinueShoppingBtn = document.getElementById('custom-continue-shopping-btn');
    const customGoToCartBtn = document.getElementById('custom-go-to-cart-btn');
  
    function renderPage(page) {
        productContainer.innerHTML = "";
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        const pageProducts = filteredRenderProducts.slice(startIndex, endIndex);

        pageProducts.forEach((product) => {
            const isOutOfStock = product.availability === false;

            const productItem = document.createElement("div");
            productItem.classList.add("mon");
            productItem.innerHTML = `
                <a href="./product/mota.html?productCode=${product.productCode}">
                    <img src="${product.image}" alt="${product.name}" class="product-img">
                    <a href="#" class="product-category">${product.category}</a>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="price">${product.price}</p>
                </a>
                <a class="btn btn-primary" id="order-btn" ${isOutOfStock ? 'style="background-color: #999; color: #fff; cursor: not-allowed;" disabled' : ''}>
                    ${isOutOfStock ? "Hết hàng" : "Đặt mua"}
                </a>
            `;
            productContainer.appendChild(productItem);

            const orderBtn = productItem.querySelector('#order-btn');
            if (orderBtn && !isOutOfStock) {
                orderBtn.addEventListener('click', function() {
                    customOrderModal.style.display = 'block';

                    cartCount++;
                    cartCountElement.textContent = cartCount; 
                });
            }
        });
    }

    function renderPagination() {
        paginationContainer.innerHTML = "";

        const totalPages = Math.ceil(filteredRenderProducts.length / pageSize);

        const prevItem = document.createElement("li");
        prevItem.classList.add("page1");
        prevItem.innerHTML = `<i class="fa-solid fa-angles-left"></i>`;
        prevItem.addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                renderPage(currentPage);
                renderPagination();
            }
        });
        paginationContainer.appendChild(prevItem);

        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement("li");
            pageItem.classList.add("page-item");
            if (i === currentPage) {
                pageItem.classList.add("active");
            }
            pageItem.textContent = i;
            pageItem.addEventListener("click", () => {
                currentPage = i;
                renderPage(currentPage);
                renderPagination();
            });
            paginationContainer.appendChild(pageItem);
        }

        const nextItem = document.createElement("li");
        nextItem.classList.add("page2");
        nextItem.innerHTML = `<i class="fa-solid fa-angles-right"></i>`;
        nextItem.addEventListener("click", () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderPage(currentPage);
                renderPagination();
            }
        });
        paginationContainer.appendChild(nextItem);

        paginationContainer.querySelectorAll("li")[0].classList.toggle("disabled", currentPage === 1);
        paginationContainer.querySelectorAll("li")[paginationContainer.querySelectorAll("li").length - 1].classList.toggle("disabled", currentPage === totalPages);
    }

    customCloseOrderModal.addEventListener('click', () => {
        customOrderModal.style.display = 'none';
    });

    customContinueShoppingBtn.addEventListener('click', () => {
        customOrderModal.style.display = 'none';
    });

    customGoToCartBtn.addEventListener('click', () => {
        customOrderModal.style.display = 'none';
        window.location.href = './cart.html';
    });

    window.addEventListener('click', (event) => {
        if (event.target === customOrderModal) {
            customOrderModal.style.display = 'none';
        }
    });

    renderPage(currentPage);
    renderPagination();
});