// Hàm toggle submenu (đã có sẵn)
function toggleSubMenu(subMenuId) {
    const allSubMenus = document.querySelectorAll('.submenu');
    allSubMenus.forEach(menu => {
      if (menu.id !== subMenuId) menu.style.display = 'none';
    });
    const subMenu = document.getElementById(subMenuId);
    subMenu.style.display = (subMenu.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.querySelectorAll('.sidebar-header img, .sidebar-header h3, .sidebar ul li a');

    sidebarToggle.forEach(element => {
        element.addEventListener('click', function (event) {
            // Kiểm tra nếu người dùng nhấn vào logo (ảnh) hoặc tên "Admin Highlands"
            if (event.target.closest('.sidebar-header img') || event.target.closest('.sidebar-header h3')) {
                sidebar.classList.toggle('active');  // Toggle class 'active' để mở rộng hoặc thu nhỏ
            }
            // Nếu người dùng nhấn vào bất kỳ icon nào trong sidebar, mở rộng sidebar
            if (event.target.closest('.sidebar ul li a')) {
                sidebar.classList.add('active');  // Mở rộng sidebar khi nhấn vào icon
            }
        });
    });

    // Khi click ra ngoài sidebar, sẽ thu nhỏ lại và đóng submenu
    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target)) {
            sidebar.classList.remove('active');
            const allSubMenus = document.querySelectorAll('.submenu');
            allSubMenus.forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });
});

const bellIcon = document.querySelector('.bell-icon');
const notification = document.querySelector('.notification');
const newFeedback = document.getElementById('new-feedback');
const viewAll = document.getElementById('view-all');
    // Hiện thị bảng thông báo khi nhấp 
bellIcon.addEventListener('click', function(event) {
    event.stopPropagation();
    notification.style.display = notification.style.display === 'block' ? 'none' : 'block';
    bellIcon.classList.remove('has-notification');
});

    //ẩn bảng thông báo khi nhấp ra ngoài
document.addEventListener('click', function(){
    notification.style.display = 'none';
});

    //ngăn bảng thông báo bị ẩn khi nhấp vô nó
notification.addEventListener('click', function(event){
    event.stopPropagation();
});


newFeedback.addEventListener('click', function(event){
    notification.style.display = 'none';
});

viewAll.addEventListener('click', function(event) {
    notification.style.display = 'none';
})

// Tìm kiếm
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // Danh sách các mục tìm kiếm và các trang tương ứng
    const pages = {
        "bảng tin": "../admin.html",
        "tất cả sản phẩm": "allproduct.html",
        "thêm sản phẩm": "addproduct.html",
        "quản lý đơn hàng": "order.html",
        "quản lý người dùng": "user.html",
        "thống kê": "thongke.html",
        "đăng xuất": "../index.html",
    };

    // Hàm xử lý tìm kiếm
function searchPage() {
    const searchQuery = searchInput.value.toLowerCase().trim();

    // Kiểm tra nếu từ khóa có trong danh sách các trang
    if (pages[searchQuery] && pages[searchQuery] !== "#") {
        window.location.href = pages[searchQuery];  // Điều hướng đến trang tương ứng
    } else {
        alert("Không tìm thấy kết quả phù hợp!");
        searchInput.value = ""; // Đưa ô tìm kiếm về trạng thái ban đầu
    }
}


    // Bắt sự kiện khi nhấn Enter
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchPage();
        }
    });

    // Bắt sự kiện khi nhấn vào nút tìm kiếm
    searchButton.addEventListener('click', function() {
        searchPage();
    });
});


const productsPerPage = 9;
const products = Array.from(document.querySelectorAll('.product-item'));
const totalPages = Math.ceil(products.length / productsPerPage);
let currentPage = 1;

function displayProducts(page) {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;

    products.forEach((product, index) => {
        product.style.display = (index >= start && index < end) ? 'table-row' : 'none';
    });

    document.querySelectorAll('.pagination-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(`page${page}`).classList.add('active');
    updatePagination();
}

function updatePagination() {
    // Cập nhật trạng thái vô hiệu hóa cho các nút << và >>
    if (currentPage === 1) {
        document.getElementById('prevPage').classList.add('disabled');
    } else {
        document.getElementById('prevPage').classList.remove('disabled');
    }

    if (currentPage === totalPages) {
        document.getElementById('nextPage').classList.add('disabled');
    } else {
        document.getElementById('nextPage').classList.remove('disabled');
    }
}

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayProducts(currentPage);
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        displayProducts(currentPage);
    }
});

// Phần này đã có sẵn cho các nút phân trang
document.getElementById('page1').addEventListener('click', () => {
    currentPage = 1;
    displayProducts(currentPage);
});

document.getElementById('page2').addEventListener('click', () => {
    currentPage = 2;
    displayProducts(currentPage);
});

// Sự kiện cho nút <<
document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage = 1; // Quay lại trang 1
        displayProducts(currentPage);
    }
});

// Sự kiện cho nút >>
document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage = totalPages; // Quay đến trang cuối
        displayProducts(currentPage);
    }
});

// Hiển thị sản phẩm ban đầu
displayProducts(currentPage);

// HÀm xử lý modal xoá
document.addEventListener("DOMContentLoaded", function () {
    const deleteButtons = document.querySelectorAll(".xoa");
    const confirmDeleteButton = document.getElementById("confirmDeleteButton");
    const cancelButton = document.getElementById("cancelButton");
    const modal = document.getElementById("ModalRM");
    const closeModal = document.querySelector(".close");
    let deleteTarget = null;

    // Gán sự kiện click cho các nút "Xóa"
    deleteButtons.forEach(button => {
        button.addEventListener("click", function () {
            deleteTarget = this.closest("tr"); // Hoặc phần tử cần xóa
            modal.style.display = "block"; // Hiển thị modal xác nhận xóa
        });
    });

    // Xử lý xác nhận xóa
    confirmDeleteButton.addEventListener("click", function () {
        if (deleteTarget) {
            deleteTarget.remove(); // Xóa phần tử
            modal.style.display = "none"; // Đóng modal sau khi xóa
        }
    });

    // Xử lý hủy xóa
    cancelButton.addEventListener("click", function () {
        modal.style.display = "none"; // Đóng modal khi hủy
    });

    // Đóng modal khi nhấp vào nút đóng
    closeModal.addEventListener("click", function () {
        modal.style.display = "none"; // Đóng modal khi nhấp vào nút đóng
    });

    // Đóng modal khi nhấp ra ngoài modal
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Đóng modal khi nhấp ra ngoài modal
        }
    });
});


// Hàm xử lý modal chỉnh sửa
document.addEventListener("DOMContentLoaded", function () {
    const editButtons = document.querySelectorAll(".edit"); // Nút chỉnh sửa
    const modal = document.getElementById("ModalUP");
    const closeModal = document.getElementById("closeModalUP");
    const closeModalFooter = document.getElementById("closeModalFooter");
    const deleteImageButton = document.getElementById("deleteImage");
    const imageInput = document.getElementById("editProductImage");
    const imagePreview = document.getElementById("editProductImagePreview");

    
    editButtons.forEach(button => {
        button.addEventListener("click", event => {
            const productRow = event.target.closest(".product-item");
    
            // Lấy dữ liệu từ bảng và điền vào modal
            document.getElementById("editProductID").value = productRow.children[0].textContent.trim();
            document.getElementById("editProductName").value = productRow.children[1].textContent.trim();
            imagePreview.src = productRow.children[2].querySelector("img").src;
            document.getElementById("editPriceS").value = productRow.children[4].querySelector("li:nth-child(1)").textContent.split(": ")[1].trim();
            document.getElementById("editPriceM").value = productRow.children[4].querySelector("li:nth-child(2)").textContent.split(": ")[1].trim();
            document.getElementById("editPriceL").value = productRow.children[4].querySelector("li:nth-child(3)").textContent.split(": ")[1].trim();
    
            // // Lấy và cập nhật giá trị cho dropdown "Tình trạng"
            const statusDropdown = document.getElementById("editProductStatus");
            const statusValue = productRow.children[3].querySelector("a").textContent.trim(); // Lấy nội dung từ thẻ <a>
            statusDropdown.value = statusDropdown.querySelector(`option[value="${statusValue}"]`) ? statusValue : ""; // Kiểm tra giá trị tồn tại

            // Lấy và cập nhật giá trị cho dropdown "Danh mục"
            const categoryDropdown = document.getElementById("editProductCategory");
            categoryDropdown.value = productRow.children[5].textContent.trim();

    
            modal.style.display = "flex"; // Hiển thị modal
        });
    });
    
    
    // Đóng modal khi nhấn nút đóng
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    closeModalFooter.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Đóng modal khi nhấp ra ngoài nội dung
    window.addEventListener("click", event => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Xử lý xóa ảnh
    deleteImageButton.addEventListener("click", () => {
        imagePreview.src = ""; // Xóa ảnh xem trước
        imageInput.value = ""; // Xóa file ảnh trong input
    });

    // Hiển thị ảnh xem trước khi chọn ảnh mới
    imageInput.addEventListener("change", event => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imagePreview.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
    document.getElementById("saveProductChanges").addEventListener("click", () => {
        const productID = document.getElementById("editProductID").value.trim();
        const productName = document.getElementById("editProductName").value.trim();
        const priceS = document.getElementById("editPriceS").value.trim();
        const priceM = document.getElementById("editPriceM").value.trim();
        const priceL = document.getElementById("editPriceL").value.trim();
        const productStatus = document.getElementById("editProductStatus").value; // Tình trạng
        const productCategory = document.getElementById("editProductCategory").value; // Danh mục
    
        // Cập nhật sản phẩm trong bảng
        const productRow = Array.from(document.querySelectorAll(".product-item"))
            .find(row => row.children[0].textContent.trim() === productID);
    
        if (productRow) {
            productRow.children[1].textContent = productName;
            productRow.children[4].innerHTML = `
                <ul>
                    <li>S: ${priceS}</li>
                    <li>M: ${priceM}</li>
                    <li>L: ${priceL}</li>
                </ul>
            `;
            productRow.children[5].textContent = productCategory;
    
            // Cập nhật tình trạng
            const statusElement = productRow.children[3].querySelector("a");
            statusElement.textContent = productStatus;
    
            // Thay đổi màu sắc dựa trên tình trạng
            if (productStatus === "Còn hàng") {
                statusElement.classList.remove("out-of-stock");
                statusElement.classList.add("in-stock");
            } else if (productStatus === "Hết hàng") {
                statusElement.classList.remove("in-stock");
                statusElement.classList.add("out-of-stock");
            }
        }
    
        // Đóng modal
        modal.style.display = "none";
    });
    
    
});

document.addEventListener("DOMContentLoaded", function() {
    // Lắng nghe sự kiện click để mở chọn file
    document.querySelector('.Choicefile').addEventListener('click', function() {
        document.querySelector('#productImage').click();
    });

    document.querySelector('#productImage1').addEventListener('change', function(event) {
        const input = event.target;
        if (input.files[0]) {
            const fileName = input.files[0].name;
            document.querySelector('.Choicefile').innerHTML = `<i class="fas fa-cloud-upload-alt"></i> ${fileName}`;
        }
    });
    

    // Lắng nghe sự kiện submit form
    document.querySelector('.hmm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Sản phẩm đã được lưu lại!');
        // Thêm logic lưu sản phẩm tại đây
    });

    // Lắng nghe sự kiện click cho nút hủy
    document.querySelector('.btn-cancel').addEventListener('click', function() {
        if (confirm('Bạn có chắc chắn muốn hủy bỏ không?')) {
            // Thêm logic hủy bỏ tại đây
            alert('Hủy bỏ thành công!');
        }
    });
});

// Hàm mở modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Hàm đóng modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Khi người dùng nhấp ngoài modal thì đóng modal
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}




