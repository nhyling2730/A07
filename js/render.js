const renderProducts = [
    {
        "productCode": "HC08",
        "image": "../../image/freeze/caramelphinfreeze_nho.png",
        "category": "Freeze",
        "name": "Caramel phin freeze",
        "price": "50.000 VNĐ",
        "description": "Thơm ngon khó cưỡng! Được kết hợp từ cà phê truyền thống chỉ có tại Highlands Coffee, cùng với caramel, thạch cà phê và đá xay mát lạnh. Trên cùng là lớp kem tươi thơm béo và caramel ngọt ngào. Món nước phù hợp trong những cuộc gặp gỡ bạn bè, bởi sự ngọt ngào thường mang mọi người xích lại gần nhau.",
        "availability": true 
    },
    {
        "productCode": "HC09",
        "image": "../../image/freeze/classicphinfreeze_nho.png",
        "category": "Freeze",
        "name": "Classic phin freeze",
        "price": "50.000 VNĐ",
        "description": "Thơm ngon đậm đà! Được kết hợp từ cà phê pha Phin truyền thống chỉ có tại Highlands Coffee, cùng với thạch cà phê và đá xay mát lạnh. Trên cùng là lớp kem tươi thơm béo và bột ca cao đậm đà. Món nước hoàn hảo để khởi đầu câu chuyện cùng bạn bè.",
        "availability": true 
    },
    {
        "productCode": "HC10",
        "image": "../../image/freeze/cookies&cream_nho.png",
        "category": "Freeze",
        "name": "Cookies & Cream",
        "price": "50.000 VNĐ",
        "description": "Một thức uống ngon lạ miệng bởi sự kết hợp hoàn hảo giữa cookies sô cô la giòn xốp cùng hỗn hợp sữa tươi cùng sữa đặc đem say với đá viên, và cuối cùng không thể thiếu được chính là lớp kem whip mềm mịn cùng cookies sô cô la say nhuyễn.",
        "availability": true 
    },
    {
        "productCode": "HC12",
        "image": "../../image/freeze/freezechoco_nho.png",
        "category": "Freeze",
        "name": "Freeze sô-cô-la",
        "price": "50.000 VNĐ",
        "description": "Thiên đường đá xay sô cô la! Từ những thanh sô cô la Việt Nam chất lượng được đem xay với đá cho đến khi mềm mịn, sau đó thêm vào thạch sô cô la dai giòn, ở trên được phủ một lớp kem whip beo béo và sốt sô cô la ngọt ngào. Tạo thành Freeze Sô-cô-la ngon mê mẩn chinh phục bất kì ai!",
        "availability": true 
    },
    {
        "productCode": "HC11",
        "image": "../../image/freeze/freezetraxanh_nho.png",
        "category": "Freeze",
        "name": "Freeze trà xanh",
        "price": "50.000 VNĐ",
        "description": "Thức uống rất được ưa chuộng! Trà xanh thượng hạng từ cao nguyên Việt Nam, kết hợp cùng đá xay, thạch trà dai dai, thơm ngon và một lớp kem dày phủ lên trên vô cùng hấp dẫn. Freeze Trà Xanh thơm ngon, mát lạnh, chinh phục bất cứ ai!",
        "availability": true 
    },
    {
        "productCode": "HC03",
        "image": "../../image/phin/bacxiuda_nho.png",
        "category": "Cà phê phin",
        "name": "Bạc xỉu đá",
        "price": "29.000 VNĐ",
        "description": "Nếu Phin Sữa Đá dành cho các bạn đam mê vị đậm đà, thì Bạc Xỉu Đá là một sự lựa chọn nhẹ “đô\" cà phê nhưng vẫn thơm ngon, chất lừ không kém!",
        "availability": true 
    },
    {
        "productCode": "HC01",
        "image": "../../image/phin/phisuanda_nho.png",
        "category": "Cà phê phin",
        "name": "Phin sữa đá",
        "price": "35.000 VNĐ",
        "description": "Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối trộn độc đáo giữa hạt Robusta từ cao nguyên Việt Nam, thêm Arabica thơm lừng. Cà phê được pha từ Phin truyền thống, hoà cùng sữa đặc sánh và thêm vào chút đá tạo nên ly Phin Sữa Đá – Đậm Đà Chất Phin.",
        "availability": true 
    },
    {
        "productCode": "HC02",
        "image": "../../image/phin/phindenda_nho.png",
        "category": "Cà phê phin",
        "name": "Phin đen đá",
        "price": "32.000 VNĐ",
        "description": "Dành cho những tín đồ cà phê đích thực! Hương vị cà phê truyền thống được phối trộn độc đáo tại Highlands. Cà phê đậm đà pha hoàn toàn từ Phin, cho thêm 1 thìa đường, một ít đá viên mát lạnh, tạo nên Phin Đen Đá mang vị cà phê đậm đà chất Phin.",
        "availability": true 
    },
    {
        "productCode": "HC07",
        "image": "../../image/phindi/phindicassia_nho.png",
        "category": "Phindi",
        "name": "Phindi cassia",
        "price": "55.000 VNĐ",
        "description": "Với chất phin êm ái, hương vị cà phê Việt Nam hiện đại kết hợp cùng hương quế nhẹ nhàng và thạch cà phê hấp dẫn.",
        "availability": false
    },
    {
        "productCode": "HC06",
        "image": "../../image/phindi/phindichoco_nho.png",
        "category": "Phindi",
        "name": "Phindi choco",
        "price": "55.000 VNĐ",
        "description": "PhinDi Choco - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Choco ngọt tan mang đến hương vị mới lạ, không thể hấp dẫn hơn!",
        "availability": true 
    },
    {
        "productCode": "HC04",
        "image": "../../image/phindi/phindihanhnhan_nho.png",
        "category": "Phindi",
        "name": "Phindi hạnh nhân",
        "price": "55.000 VNĐ",
        "description": "PhinDi Hạnh Nhân - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Hạnh nhân thơm bùi mang đến hương vị mới lạ, không thể hấp dẫn hơn!",
        "availability": true 
    },
    {
        "productCode": "HC05",
        "image": "../../image/phindi/phindikemsua_nho.png",
        "category": "Phindi",
        "name": "Phindi kem sữa",
        "price": "55.000 VNĐ",
        "description": "PhinDi Kem Sữa - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Kem Sữa béo ngậy mang đến hương vị mới lạ, không thể hấp dẫn hơn!",
        "availability": true 
    },
    {
        "productCode": "HC16",
        "image": "../../image/trà/trasenvang(cunang)_nho.png",
        "category": "Trà",
        "name": "Trà sen vàng (củ năng)",
        "price": "45.000 VNĐ",
        "description": "Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan. Thêm vào chút sữa sẽ để vị thêm ngọt ngào.",
        "availability": false 
    },
    {
        "productCode": "HC15",
        "image": "../../image/trà/trasenvang(sen)_nho.png",
        "category": "Trà",
        "name": "Trà sen vàng (sen)",
        "price": "45.000 VNĐ",
        "description": "Trà sen vàng (sen) với kết hợp giữa Trà Ô long với hương sen thanh mát, thêm đậm vị sen bằng hạt sen dẻo thơm và lớp kem mềm mại. Đặt Highlands Coffee giao ngay.",
        "availability": true 
    },
    {
        "productCode": "HC18",
        "image": "../../image/trà/trathachdao_nho.png",
        "category": "Trà",
        "name": "Trà thạch đào",
        "price": "45.000 VNĐ",
        "description": "Vị trà đậm đà kết hợp cùng những miếng đào thơm ngon mọng nước cùng thạch đào giòn dai. Thêm vào ít sữa để gia tăng vị béo.",
        "availability": true 
    },
    {
        "productCode": "HC17",
        "image": "../../image/trà/trathanhdao_nho.png",
        "category": "Trà",
        "name": "Trà thanh đào",
        "price": "45.000 VNĐ",
        "description": "Một trải nghiệm thú vị khác! Sự hài hòa giữa vị trà cao cấp, vị sả thanh mát và những miếng đào thơm ngon mọng nước sẽ mang đến cho bạn một thức uống tuyệt vời.",
        "availability": false
    },
    {
        "productCode": "HC14",
        "image": "../../image/trà/trathachvai_nho.png",
        "category": "Trà",
        "name": "Trà thạch Vải",
        "price": "45.000 VNĐ",
        "description": "Một sự kết hợp thú vị giữa trà đen, những quả vải thơm ngon và thạch giòn khó cưỡng, mang đến thức uống tuyệt hảo!",
        "availability": true 
    },
    {
        "productCode": "HC13",
        "image": "../../image/trà/traxanhdaudo_nho.png",
        "category": "Trà",
        "name": "Trà xanh đậu đỏ",
        "price": "45.000 VNĐ",
        "description": "Một sự kết hợp độc đáo giữa trà xanh thượng hạng từ cao nguyên Việt Nam và đậu đỏ bùi bùi thơm ngon. Thức uống thanh mát, mang lại cảm giác sảng khoái.",
        "availability": true 
    }
]

document.addEventListener("DOMContentLoaded", () => {
    let pageSize = 8;
    let currentPage = 1;

    const productContainer = document.querySelector(".custom-products");
    const paginationContainer = document.querySelector(".pagination");
    const loginModal = document.getElementById("login-modal-purchase");
    const closeModal = document.getElementById("close-modal-purchase");
    const loginBtn = document.getElementById("login-btn-purchase");
    const registerBtn = document.getElementById("register-btn-purchase");

    const listCategory = productContainer.getAttribute('data-category');

    let filteredRenderProducts = renderProducts;
    if (listCategory) {
        filteredRenderProducts = filteredRenderProducts.filter(item => item.category == listCategory);
        pageSize = 4;
    }

    // Function to render products for the current page
    function renderPage(page) {
        productContainer.innerHTML = ""; 
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        const pageProducts = filteredRenderProducts.slice(startIndex, endIndex);

        pageProducts.forEach((product, index) => {
            const isOutOfStock = index == 0 && listCategory == "Phindi"
                || ((index == 3 || index == 0 ) && listCategory == "Trà")
                || (currentPage == 2 && (index == 0 || index == 7 || index == 4) && !listCategory)


            const productItem = document.createElement("li");
            productItem.innerHTML = `
                <div class="custom-product-item">
                    <div class="custom-product-top">
                        <a href="" class="custom-product-thumb">
                            <img src="${product.image}" alt="${product.name}">                        
                        </a>
                    </div>
                    <div class="custom-product-info">
                        <a href="" class="custom-product-cat">${product.category}</a>
                        <a href="" class="custom-product-name">${product.name}</a>
                        <div class="custom-product-price">${product.price}</div>
                        <button class="buy-now" ${isOutOfStock ? 'style="background-color: #999; color: #fff; cursor: not-allowed;" disabled' : ''}>
                            ${isOutOfStock ? "Hết hàng" : "Đặt mua"}
                        </button>
                    </div>
                </div>
            `;
            productContainer.appendChild(productItem);
        });

        const productLinks = document.querySelectorAll(".custom-product-name");
        const productImages = document.querySelectorAll(".custom-product-top");

        productLinks.forEach((link, index) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const productIndex = (page - 1) * pageSize + index;
                const product = filteredRenderProducts[productIndex];
                localStorage.setItem("selectedProduct", JSON.stringify(product));
                window.location.href = "../product/mota.html"; 
            });
        });

        productImages.forEach((image, index) => {
            image.addEventListener("click", (e) => {
                e.preventDefault();
                const productIndex = (page - 1) * pageSize + index;
                const product = filteredRenderProducts[productIndex]; 
                localStorage.setItem("selectedProduct", JSON.stringify(product));
                window.location.href = "../product/mota.html"; 
            });
        });

        const categoryLinks = document.querySelectorAll(".custom-product-cat");
        categoryLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const categoryName = link.textContent.trim().toLowerCase();

                let targetPage = "";
                if (categoryName === "cà phê phin") {
                    targetPage = "./phin-menu.html";
                } else if (categoryName === "phindi") {
                    targetPage = "./phindi-menu.html";
                } else if (categoryName === "freeze") {
                    targetPage = "./freeze-menu.html";
                } else if (categoryName === "trà") {
                    targetPage = "./tra-menu.html";
                } else {
                    targetPage = "./default-menu.html";
                }
                window.location.href = targetPage;
            });
        });

        const buyNowButtons = document.querySelectorAll(".buy-now");
        buyNowButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                loginModal.style.display = "flex";
            });
        });
    }

    function renderPagination() {
        paginationContainer.innerHTML = "";
        const totalPages = Math.ceil(filteredRenderProducts.length / pageSize);
    
        // Previous button
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
    
        if (currentPage === 1) {
            prevItem.style.pointerEvents = "none";
            prevItem.style.opacity = "0.5";
        }
    
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
    
            // If there are 2 pages, add extra margin between page 1 and page 2
            if (totalPages === 2 && i === 1) {
                pageItem.style.marginRight = "0px";
            }
    
            if (totalPages === 2 && i === 2) {
                pageItem.style.marginLeft = "1px";
            }
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
    
        if (currentPage === totalPages) {
            nextItem.style.pointerEvents = "none";
            nextItem.style.opacity = "0.5"; 
        }
    
        paginationContainer.appendChild(nextItem);

        if (totalPages === 1) {
            prevItem.style.marginRight = "2px"; 
            nextItem.style.marginLeft = "1px"; 
        }
        if (totalPages === 2) {
            prevItem.style.marginRight = "2px"; 
            nextItem.style.marginLeft = "1px"; 
        }
    }        

    closeModal.addEventListener("click", () => {
        loginModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
    });

    loginBtn.addEventListener("click", () => {
        window.location.href = "../login_user.html"; 
    });

    registerBtn.addEventListener("click", () => {
        window.location.href = "../signup_user.html"; 
    });

    // Initial render
    renderPage(currentPage);
    renderPagination();
});
