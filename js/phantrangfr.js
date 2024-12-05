const productsPerPage = 4;
let currentPage = 1;

// Lấy danh sách sản phẩm và tính số trang
const productList = document.querySelector(".custom-products"); // Thay đổi thành .custom-products vì đó là nơi chứa sản phẩm
const products = Array.from(productList.getElementsByTagName("li")); // Sử dụng getElementsByTagName để chọn các sản phẩm
const totalPages = Math.ceil(products.length / productsPerPage);

// Hiển thị sản phẩm theo trang
function displayPage(page) {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;

    products.forEach((product, index) => {
        product.style.display = index >= start && index < end ? "block" : "none";
    });

    updatePagination();
}

// Cập nhật trạng thái phân trang
function updatePagination() {
    // Cập nhật trạng thái của các trang
    document.querySelectorAll(".listpage li").forEach((li) => {
        li.classList.toggle("active", parseInt(li.textContent) === currentPage);
    });

    // Vô hiệu hóa nút chuyển trang khi ở trang đầu tiên hoặc cuối cùng
    const prevButton = document.querySelector(".page1");
    const nextButton = document.querySelector(".page2");

    prevButton.style.pointerEvents = currentPage === 1 ? "none" : "auto";
    prevButton.style.opacity = currentPage === 1 ? "0.5" : "1";

    nextButton.style.pointerEvents = currentPage === totalPages ? "none" : "auto";
    nextButton.style.opacity = currentPage === totalPages ? "0.5" : "1";
}

// Sự kiện khi nhấp vào phân trang
document.querySelector(".listpage").addEventListener("click", (e) => {
    const clickedElement = e.target.closest("li");

    if (clickedElement && clickedElement.classList.contains("page1") && currentPage > 1) {
        currentPage--;
    } else if (clickedElement && clickedElement.classList.contains("page2") && currentPage < totalPages) {
        currentPage++;
    } else if (clickedElement && !isNaN(clickedElement.textContent)) {
        currentPage = parseInt(clickedElement.textContent);
    }
    displayPage(currentPage);
});

// Khởi tạo hiển thị trang đầu tiên
displayPage(currentPage);
