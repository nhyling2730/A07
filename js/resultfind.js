document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-btn-purchase");
    const registerButton = document.getElementById("register-btn-purchase");
  
    loginButton.addEventListener("click", function() {
      window.location.href = "../user/login_user.html";
    });
  
    registerButton.addEventListener("click", function() {
      window.location.href = "../user/signup_user.html";
    });
  });

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

document.addEventListener("DOMContentLoaded", () => {
    let pageSize = 4;
    let currentPage = 1;
  
    const productContainer = document.querySelector(".product-grid");
    const paginationContainer = document.querySelector(".pagination");
  
    const listCategory = productContainer.getAttribute('data-category');
  
    let filteredRenderProducts = renderProducts;
    if (listCategory) {
      filteredRenderProducts = filteredRenderProducts.filter(item => item.category == listCategory);
    }
  
    function renderPage(page) {
      productContainer.innerHTML = "";
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
  
      const pageProducts = filteredRenderProducts.slice(startIndex, endIndex);
  
      pageProducts.forEach((product, index) => {
        const isOutOfStock = product.availability === false;
  
        const productItem = document.createElement("div");
        productItem.classList.add("mon");
        productItem.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="product-img">
          <a href="#" class="product-category">${product.category}</a>
          <h3 class="product-name">${product.name}</h3>
          <p class="price">${product.price}</p>
          <a class="btn btn-primary" id="order-btn" ${isOutOfStock ? 'style="background-color: #999; color: #fff; cursor: not-allowed;" disabled' : ''}>
            ${isOutOfStock ? "Hết hàng" : "Đặt mua"}
          </a>
        `;
        productContainer.appendChild(productItem);
  
        const productImg = productItem.querySelector(".product-img");
        const productName = productItem.querySelector(".product-name");

        [productImg, productName].forEach(element => {
          element.addEventListener("click", (e) => {
            e.preventDefault();
            product.image = '../' + product.image
            localStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = "./product/mota.html";
          });
        });

        const orderBtn = productItem.querySelector('#order-btn');
        if (orderBtn && !isOutOfStock) {
          orderBtn.addEventListener('click', function() {
            document.getElementById('login-modal').style.display = 'none';
            document.getElementById('login-modal-purchase').style.display = 'flex';
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
  
      // Page numbers
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
  
      // Next button
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
  
      prevItem.classList.toggle('disabled', currentPage === 1);
      nextItem.classList.toggle('disabled', currentPage === totalPages);
    }
  
    renderPage(currentPage);
    renderPagination();
  });
  
  // Mở modal Giỏ hàng
  document.getElementById('cart-icon').addEventListener('click', function() {
      document.getElementById('login-modal').style.display = 'block';
      document.getElementById('login-modal-purchase').style.display = 'none';
  });
  
  // Đóng modal Giỏ hàng
  document.getElementById('close-modal').addEventListener('click', function() {
      document.getElementById('login-modal').style.display = 'none';
  });
  
  // Đóng modal Đặt mua
  document.getElementById('close-modal-purchase').addEventListener('click', function() {
      document.getElementById('login-modal-purchase').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
      if (event.target == document.getElementById('login-modal')) {
          document.getElementById('login-modal').style.display = 'none';
      }
      if (event.target == document.getElementById('login-modal-purchase')) {
          document.getElementById('login-modal-purchase').style.display = 'none';
      }
  });  
  
document.addEventListener("DOMContentLoaded", () => {
  const productData = JSON.parse(localStorage.getItem("selectedProduct"));

  if (!productData) {
    window.location.href = "../index.html";
    return;
  }

  const breadcumCategory = document.querySelector("#breadcum-category");
  if (breadcumCategory) {
    breadcumCategory.textContent = productData.category;
    breadcumCategory.addEventListener("click", () => {
      window.location.href = "../menu/allmenu.html#all-menu-section";
    });
  }

  const breadcumProduct = document.querySelector("#breadcum-product");
  if (breadcumProduct) {
    breadcumProduct.textContent = productData.name;
  }

  const productImage = document.querySelector(".product-gallery img");
  if (productImage) {
    productImage.src = productData.image;
  }

  const productDetails = document.querySelector(".product_details_info h3");
  if (productDetails) {
    productDetails.textContent = productData.name;
  }

  const availability = document.querySelector(".availability");
  if (availability) {
    availability.innerHTML = `Tình trạng: <b>${productData.availability ? "Còn hàng" : "Hết hàng"}</b>`;
    availability.innerHTML += ` | Mã sản phẩm: <b>${productData.productCode}</b>`;
  }

  const price = document.querySelector(".price");
  if (price) {
    price.textContent = productData.price;
  }

  const productDescription = document.querySelector(".product_tag-read p");
  if (productDescription) {
    productDescription.textContent = productData.description;
  }

  const thumbnails = document.querySelectorAll('.thumbnail-img');
  const carouselImage = document.querySelector('.carousel-item img');
  if (carouselImage) {
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener('click', function() {
        if (this.src) {
          carouselImage.src = this.src;
        }
      });
    });
  } else {
    console.error('Không tìm thấy hình ảnh carousel chính');
  }
});