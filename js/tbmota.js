
const renderProducts = [
  {
    productCode: "HC08",
    image: "../../image/freeze/caramelphinfreeze_nho.png",
    category: "Freeze",
    name: "Caramel phin freeze",
    price: "50.000 VNĐ",
    description:
      "Thơm ngon khó cưỡng! Được kết hợp từ cà phê truyền thống chỉ có tại Highlands Coffee, cùng với caramel, thạch cà phê và đá xay mát lạnh. Trên cùng là lớp kem tươi thơm béo và caramel ngọt ngào. Món nước phù hợp trong những cuộc gặp gỡ bạn bè, bởi sự ngọt ngào thường mang mọi người xích lại gần nhau.",
    availability: true,
  },
  {
    productCode: "HC09",
    image: "../../image/freeze/classicphinfreeze_nho.png",
    category: "Freeze",
    name: "Classic phin freeze",
    price: "50.000 VNĐ",
    description:
      "Thơm ngon đậm đà! Được kết hợp từ cà phê pha Phin truyền thống chỉ có tại Highlands Coffee, cùng với thạch cà phê và đá xay mát lạnh. Trên cùng là lớp kem tươi thơm béo và bột ca cao đậm đà. Món nước hoàn hảo để khởi đầu câu chuyện cùng bạn bè.",
    availability: true,
  },
  {
    productCode: "HC10",
    image: "../../image/freeze/cookies&cream_nho.png",
    category: "Freeze",
    name: "Cookies & Cream",
    price: "50.000 VNĐ",
    description:
      "Một thức uống ngon lạ miệng bởi sự kết hợp hoàn hảo giữa cookies sô cô la giòn xốp cùng hỗn hợp sữa tươi cùng sữa đặc đem say với đá viên, và cuối cùng không thể thiếu được chính là lớp kem whip mềm mịn cùng cookies sô cô la say nhuyễn.",
    availability: true,
  },
  {
    productCode: "HC12",
    image: "../../image/freeze/freezechoco_nho.png",
    category: "Freeze",
    name: "Freeze sô-cô-la",
    price: "50.000 VNĐ",
    description:
      "Thiên đường đá xay sô cô la! Từ những thanh sô cô la Việt Nam chất lượng được đem xay với đá cho đến khi mềm mịn, sau đó thêm vào thạch sô cô la dai giòn, ở trên được phủ một lớp kem whip beo béo và sốt sô cô la ngọt ngào. Tạo thành Freeze Sô-cô-la ngon mê mẩn chinh phục bất kì ai!",
    availability: true,
  },
  {
    productCode: "HC11",
    image: "../../image/freeze/freezetraxanh_nho.png",
    category: "Freeze",
    name: "Freeze trà xanh",
    price: "50.000 VNĐ",
    description:
      "Thức uống rất được ưa chuộng! Trà xanh thượng hạng từ cao nguyên Việt Nam, kết hợp cùng đá xay, thạch trà dai dai, thơm ngon và một lớp kem dày phủ lên trên vô cùng hấp dẫn. Freeze Trà Xanh thơm ngon, mát lạnh, chinh phục bất cứ ai!",
    availability: true,
  },
  {
    productCode: "HC03",
    image: "../../image/phin/bacxiuda_nho.png",
    category: "Cà phê phin",
    name: "Bạc xỉu đá",
    price: "29.000 VNĐ",
    description:
      'Nếu Phin Sữa Đá dành cho các bạn đam mê vị đậm đà, thì Bạc Xỉu Đá là một sự lựa chọn nhẹ “đô" cà phê nhưng vẫn thơm ngon, chất lừ không kém!',
    availability: true,
  },
  {
    productCode: "HC01",
    image: "../../image/phin/phisuanda_nho.png",
    category: "Cà phê phin",
    name: "Phin sữa đá",
    price: "35.000 VNĐ",
    description:
      "Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối trộn độc đáo giữa hạt Robusta từ cao nguyên Việt Nam, thêm Arabica thơm lừng. Cà phê được pha từ Phin truyền thống, hoà cùng sữa đặc sánh và thêm vào chút đá tạo nên ly Phin Sữa Đá – Đậm Đà Chất Phin.",
    availability: true,
  },
  {
    productCode: "HC02",
    image: "../../image/phin/phindenda_nho.png",
    category: "Cà phê phin",
    name: "Phin đen đá",
    price: "32.000 VNĐ",
    description:
      "Dành cho những tín đồ cà phê đích thực! Hương vị cà phê truyền thống được phối trộn độc đáo tại Highlands. Cà phê đậm đà pha hoàn toàn từ Phin, cho thêm 1 thìa đường, một ít đá viên mát lạnh, tạo nên Phin Đen Đá mang vị cà phê đậm đà chất Phin.",
    availability: true,
  },
  {
    productCode: "HC07",
    image: "../../image/phindi/phindicassia_nho.png",
    category: "Phindi",
    name: "Phindi cassia",
    price: "55.000 VNĐ",
    description:
      "Với chất phin êm ái, hương vị cà phê Việt Nam hiện đại kết hợp cùng hương quế nhẹ nhàng và thạch cà phê hấp dẫn.",
    availability: false,
  },
  {
    productCode: "HC06",
    image: "../../image/phindi/phindichoco_nho.png",
    category: "Phindi",
    name: "Phindi choco",
    price: "55.000 VNĐ",
    description:
      "PhinDi Choco - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Choco ngọt tan mang đến hương vị mới lạ, không thể hấp dẫn hơn!",
    availability: true,
  },
  {
    productCode: "HC04",
    image: "../../image/phindi/phindihanhnhan_nho.png",
    category: "Phindi",
    name: "Phindi hạnh nhân",
    price: "55.000 VNĐ",
    description:
      "PhinDi Hạnh Nhân - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Hạnh nhân thơm bùi mang đến hương vị mới lạ, không thể hấp dẫn hơn!",
    availability: true,
  },
  {
    productCode: "HC05",
    image: "../../image/phindi/phindikemsua_nho.png",
    category: "Phindi",
    name: "Phindi kem sữa",
    price: "55.000 VNĐ",
    description:
      "PhinDi Kem Sữa - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Kem Sữa béo ngậy mang đến hương vị mới lạ, không thể hấp dẫn hơn!",
    availability: true,
  },
  {
    productCode: "HC16",
    image: "../../image/trà/trasenvang(cunang)_nho.png",
    category: "Trà",
    name: "Trà sen vàng (củ năng)",
    price: "45.000 VNĐ",
    description:
      "Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan. Thêm vào chút sữa sẽ để vị thêm ngọt ngào.",
    availability: false,
  },
  {
    productCode: "HC15",
    image: "../../image/trà/trasenvang(sen)_nho.png",
    category: "Trà",
    name: "Trà sen vàng (sen)",
    price: "45.000 VNĐ",
    description:
      "Trà sen vàng (sen) với kết hợp giữa Trà Ô long với hương sen thanh mát, thêm đậm vị sen bằng hạt sen dẻo thơm và lớp kem mềm mại. Đặt Highlands Coffee giao ngay.",
    availability: true,
  },
  {
    productCode: "HC18",
    image: "../../image/trà/trathachdao_nho.png",
    category: "Trà",
    name: "Trà thạch đào",
    price: "45.000 VNĐ",
    description:
      "Vị trà đậm đà kết hợp cùng những miếng đào thơm ngon mọng nước cùng thạch đào giòn dai. Thêm vào ít sữa để gia tăng vị béo.",
    availability: true,
  },
  {
    productCode: "HC17",
    image: "../../image/trà/trathanhdao_nho.png",
    category: "Trà",
    name: "Trà thanh đào",
    price: "45.000 VNĐ",
    description:
      "Một trải nghiệm thú vị khác! Sự hài hòa giữa vị trà cao cấp, vị sả thanh mát và những miếng đào thơm ngon mọng nước sẽ mang đến cho bạn một thức uống tuyệt vời.",
    availability: false,
  },
  {
    productCode: "HC14",
    image: "../../image/trà/trathachvai_nho.png",
    category: "Trà",
    name: "Trà thạch Vải",
    price: "45.000 VNĐ",
    description:
      "Một sự kết hợp thú vị giữa trà đen, những quả vải thơm ngon và thạch giòn khó cưỡng, mang đến thức uống tuyệt hảo!",
    availability: true,
  },
  {
    productCode: "HC13",
    image: "../../image/trà/traxanhdaudo_nho.png",
    category: "Trà",
    name: "Trà xanh đậu đỏ",
    price: "45.000 VNĐ",
    description:
      "Một sự kết hợp độc đáo giữa trà xanh thượng hạng từ cao nguyên Việt Nam và đậu đỏ bùi bùi thơm ngon. Thức uống thanh mát, mang lại cảm giác sảng khoái.",
    availability: true,
  },
];

/* Kích cỡ */
const breadcumLinks = {
  Freeze: "../menu/freeze-menu.html#freeze-menu-section",
  Trà: "../menu/tra-menu.html#tra-menu-section",
  Phindi: "../menu/phindi-menu.html#phindi-menu-section",
  "Cà phê phin": "../menu/phin-menu.html#phin-menu-section",
};

/* Số lượng */
document.addEventListener("DOMContentLoaded", function () {
  const decreaseBtn = document.getElementById("decrease");
  const increaseBtn = document.getElementById("increase");
  const quantityValue = document.getElementById("quantity-value");

  // Giảm số lượng
  decreaseBtn.addEventListener("click", function () {
    let currentValue = parseInt(quantityValue.value);
    if (currentValue > 1) {
      quantityValue.value = currentValue - 1;
    }
  });

  // Tăng số lượng
  increaseBtn.addEventListener("click", function () {
    let currentValue = parseInt(quantityValue.value);
    if (currentValue < 100) {
      quantityValue.value = currentValue + 1;
    }
  });

  // Giới hạn số lượng khi người dùng nhập trực tiếp
  quantityValue.addEventListener("input", function () {
    let value = parseInt(quantityValue.value);
    if (isNaN(value) || value < 1) {
      quantityValue.value = 1;
    } else if (value > 100) {
      quantityValue.value = 100;
    }
  });
});

/* Nhấn vào Thêm giỏ hàng và Đặt mua */
document.addEventListener("DOMContentLoaded", () => {
  const productData = JSON.parse(localStorage.getItem("selectedProduct"));
  if (!productData) {
      window.location.href = "./index.html";
      return;
  }

  // Modal thông báo "Đã thêm sản phẩm vào giỏ hàng"
  const orderModal = document.getElementById("custom-order-modal");
  const closeOrderModal = document.getElementById("custom-close-order-modal");
  const continueShoppingBtn = document.getElementById("custom-continue-shopping-btn");
  const goToCartBtn = document.getElementById("custom-go-to-cart-btn");

  // Đóng modal thông báo khi nhấn nút đóng
  closeOrderModal.addEventListener("click", () => {
      orderModal.style.display = "none";
  });

  // Đóng modal khi click ra ngoài modal
  window.addEventListener("click", (event) => {
      if (event.target === orderModal) {
          orderModal.style.display = "none";
      }
  });

  // Tiếp tục mua sắm
  continueShoppingBtn.addEventListener("click", () => {
      orderModal.style.display = "none";
  });

  // Đi đến giỏ hàng
  goToCartBtn.addEventListener("click", () => {
      const productData = {
        image: document.querySelector(".product-gallery img").src,
        name: document.querySelector(".product_details_info h3").textContent,
        availability: document.querySelector(".availability b").textContent === "Còn hàng",
        productCode: document.querySelector(".availability b").textContent.split("|")[1]?.trim(),
        price: document.querySelector(".price").textContent,
        description: document.querySelector(".product_tag-read p").textContent,
        quantity: parseInt(document.getElementById("quantity-value").value),
        size: document.querySelector(".size-btn.active").getAttribute("data-size"),
      };
    
      // Save product to localStorage
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(productData);
      localStorage.setItem("cart", JSON.stringify(cart));
    
      // Redirect to cart page
      window.location.href = "../cart.html";
  });

  // Handle "Đặt mua" và "Thêm vào giỏ" button click
  const buyNowButtons = document.querySelectorAll(".btn.btn-primary");

  buyNowButtons.forEach(button => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
          orderModal.style.display = "flex"; // Hiển thị modal thông báo
      });
  });

  const addToCartButton = document.querySelector(".btn-add-to-cart");
  addToCartButton.addEventListener("click", (event) => {
      event.preventDefault();
      orderModal.style.display = "flex"; 
  });
  // Các sự kiện khác và phần render sản phẩm không thay đổi
  const breadcumCategory = document.querySelector("#breadcum-category");
  breadcumCategory.textContent = productData.category;
  breadcumCategory.addEventListener('click', () => {
      window.location.href = breadcumLinks[productData.category] ?? "../menu/allmenu.html#all-menu-section";
  });
  const thumbnails = document.querySelectorAll(".thumbnail-img");

  thumbnails.forEach(item => {
      if(item.getAttribute('data-size') == 'small')
      {
          item.setAttribute('src', productData.image)
      }
      else {
          item.setAttribute('src', productData.image.replace("_nho", ""))
      }

  })

  
  const breadcumProduct = document.querySelector("#breadcum-product");
  breadcumProduct.textContent = productData.name;
  document.querySelector(".product-gallery img").src = productData.image;
  document.querySelector(".product_details_info h3").textContent = productData.name;
  document.querySelector(".availability b").textContent = productData.availability ? "Còn hàng" : "Hết hàng"; 
  document.querySelector(".availability").innerHTML += ` | Mã sản phẩm: <b>${productData.productCode}</b>`;
  document.querySelector(".price").textContent = productData.price;
  document.querySelector(".product_tag-read p").textContent = productData.description;

  const relatedProducts = renderProducts
      .filter((p) => p.productCode !== productData.productCode)
      .slice(0, 8);

  const pageSize = 4; 
  let currentPage = 1;

  const totalPages = Math.ceil(relatedProducts.length / pageSize);
  const relatedProductsContainer = document.querySelector(".product-grid");
  const paginationContainer = document.querySelector(".pagination");

  function renderPage(page) {
      relatedProductsContainer.innerHTML = ""; 
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const pageProducts = relatedProducts.slice(startIndex, endIndex);

      pageProducts.forEach((relatedProduct) => {
          const relatedProductHTML = `
              <div class="mon related-product" data-product='${JSON.stringify(relatedProduct)}'>
                  <img src="${relatedProduct.image}" alt="${relatedProduct.name}">
                  <a href="#">${relatedProduct.category.toUpperCase()}</a>
                  <h3>${relatedProduct.name}</h3>
                  <p class="price">${relatedProduct.price}</p>
                  <a class="btn btn-primary" id="buy">Đặt mua</a>
              </div>
          `;
          relatedProductsContainer.innerHTML += relatedProductHTML;
      });

      // Add click events for related products
      const relatedProductElements = document.querySelectorAll(".related-product");
      relatedProductElements.forEach((element) => {
          element.addEventListener("click", (event) => {
                const product = JSON.parse(element.getAttribute("data-product"));
                localStorage.setItem("selectedProduct", JSON.stringify(product));
                window.location.href = "../product/mota.html";
            });
      });

      // Add event listener for "Đặt mua" buttons after rendering
      const buyNowButtons = document.querySelectorAll(".btn.btn-primary");
      buyNowButtons.forEach(button => {
          button.addEventListener("click", (event) => {
              event.preventDefault(); 
              event.stopPropagation();
              orderModal.style.display = "flex"; // Hiển thị modal thông báo
          });
      });
  }

  // Function to render pagination controls
  function renderPagination() {
      paginationContainer.innerHTML = "";

      const prevItem = document.createElement("li");
      prevItem.classList.add("page1");
      prevItem.innerHTML = `<i class="fa-solid fa-angles-left"></i>`;

      if (currentPage === 1) {
          prevItem.classList.add("disabled");
          prevItem.style.pointerEvents = "none"; 
      } else {
          prevItem.addEventListener("click", () => {
              if (currentPage > 1) {
                  currentPage--;
                  renderPage(currentPage);
                  renderPagination();
              }
          });
      }

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

      if (currentPage === totalPages) {
          nextItem.classList.add("disabled");
          nextItem.style.pointerEvents = "none"; 
      } else {
          nextItem.addEventListener("click", () => {
              if (currentPage < totalPages) {
                  currentPage++;
                  renderPage(currentPage);
                  renderPagination();
              }
          });
      }

      paginationContainer.appendChild(nextItem);
  }

  // Initial render
  renderPage(currentPage);
  renderPagination();
});

document.addEventListener("DOMContentLoaded", function () {
  const priceElement = document.querySelector(".price");
  const sizeButtons = document.querySelectorAll(".size-btn");
  let basePrice = parseInt(
    priceElement.textContent.replace("VNĐ", "").replace(/\./g, "")
  );

  // Hàm để cập nhật giá
  function updatePrice(size) {
    let newPrice = basePrice;
    if (size === "M") {
      newPrice += 5000;
    } else if (size === "L") {
      newPrice += 10000;
    }

    // Sử dụng locales để đổi dấu phân cách
    priceElement.textContent =
      newPrice.toLocaleString("vi-VN", { useGrouping: true }).replace(/,/g, ".") +
      " VNĐ";
  }

  sizeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      sizeButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");
      updatePrice(button.getAttribute("data-size"));
    });
  });
});
