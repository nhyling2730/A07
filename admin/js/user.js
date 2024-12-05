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

document.addEventListener("DOMContentLoaded", function () {
    const saveEditButton = document.getElementById("saveEditButton");
    const cancelEditButton = document.getElementById("cancelEditButton");
    const editButtons = document.querySelectorAll(".edit");
    const modalEdit = document.getElementById("ModalEdit");
    const closeModalEdit = document.querySelector("#ModalEdit .close");
    let editTarget = null;

    // Gán sự kiện click cho các nút "Chỉnh sửa"
    editButtons.forEach(button => {
        button.addEventListener("click", function () {
           
            editTarget = this.closest("tr"); // Dòng chứa thông tin cần chỉnh sửa

            // Lấy dữ liệu từ các ô trong hàng
            const customerCode = editTarget.querySelector("td:nth-child(1)").textContent.trim();
            const customerUsername = editTarget.querySelector("td:nth-child(2)").textContent.trim();
            const customerName = editTarget.querySelector("td:nth-child(3)").textContent.trim();
            const customerAddress = editTarget.querySelector("td:nth-child(4)").textContent.trim();
            const customerPhone = editTarget.querySelector("td:nth-child(5)").textContent.trim();
            const role = editTarget.querySelector("td:nth-child(6)").textContent.trim();

            // Đưa dữ liệu vào form trong modal
            document.getElementById("customerCode").value = customerCode;
            document.getElementById("customerUserame").value = customerUsername;
            document.getElementById("customerName").value = customerName;
            document.getElementById("customerAddress").value = customerAddress;
            document.getElementById("customerPhone").value = customerPhone;
            document.getElementById("Role").value = role;

            modalEdit.style.display = "flex"; // Hiển thị modal chỉnh sửa
        });
    });

    // Đóng modal khi nhấn nút "Hủy" hoặc nút đóng
    cancelEditButton.addEventListener("click", function () {
        modalEdit.style.display = "none"; // Đóng modal khi hủy
    });

    closeModalEdit.addEventListener("click", function () {
        modalEdit.style.display = "none"; // Đóng modal khi nhấp vào nút đóng
    });

    // Đóng modal khi nhấp ra ngoài modal
    window.addEventListener("click", function (event) {
        if (event.target === modalEdit) {
            modalEdit.style.display = "none"; // Đóng modal khi nhấp ra ngoài modal
        }
    });

    saveEditButton.addEventListener("click", function () {
        if (editTarget) {
            // Lấy dữ liệu mới từ modal
            const customerCode = document.getElementById("customerCode").value.trim();
            const customerUsername = document.getElementById("customerUserame").value.trim();
            const customerName = document.getElementById("customerName").value.trim();
            const customerAddress = document.getElementById("customerAddress").value.trim();
            const customerPhone = document.getElementById("customerPhone").value.trim();
            const role = document.getElementById("Role").value.trim();
    
            // Cập nhật dữ liệu trong bảng
            editTarget.querySelector("td:nth-child(1)").textContent = customerCode;
            editTarget.querySelector("td:nth-child(2)").textContent = customerUsername;
            editTarget.querySelector("td:nth-child(3)").textContent = customerName;
            editTarget.querySelector("td:nth-child(4)").textContent = customerAddress;
            editTarget.querySelector("td:nth-child(5)").textContent = customerPhone;
            editTarget.querySelector("td:nth-child(6)").textContent = role;
    
            // Ẩn modal
            modalEdit.style.display = "none";
            editTarget = null; // Xóa tham chiếu sau khi sửa xong
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
 // -------------------------------------------DELETE----------------------------------------------------
    const deleteButtons = document.querySelectorAll(".delete"); // Các nút xóa trong bảng
    const modalDelete = document.getElementById("ModalDelete");
    const closeModalDelete = document.querySelector("#ModalDelete .close");
    const cancelDeleteButton = document.getElementById("cancelDeleteButton");
    const confirmDeleteButton = document.getElementById("confirmDeleteButton");
    let deleteTarget = null; // Biến để lưu hàng cần xóa
    
        // Hiển thị modal khi nhấn nút "Xóa"
    deleteButtons.forEach(button => {
        button.addEventListener("click", function () {
           
            deleteTarget = this.closest("tr"); // Lấy dòng cần xóa
            modalDelete.style.display = "flex"; // Hiển thị modal delete
        });
    });
    
        // Đóng modal khi nhấn nút "Hủy" hoặc nút đóng
    cancelDeleteButton.addEventListener("click", function () {
        modalDelete.style.display = "none";
    });
    
    closeModalDelete.addEventListener("click", function () {
        modalDelete.style.display = "none";
    });
    
        // Xóa hàng khi nhấn nút "Xác nhận xóa"
    confirmDeleteButton.addEventListener("click", function () {
        if (deleteTarget) {
            deleteTarget.remove(); // Xóa hàng khỏi bảng
            deleteTarget = null; // Xóa tham chiếu
            modalDelete.style.display = "none"; // Đóng modal
        }
    });
    
        // Đóng modal khi nhấp ra ngoài
    window.addEventListener("click", function (event) {
        if (event.target === modalDelete) {
            modalDelete.style.display = "none";
        }
    });    
});

document.addEventListener("DOMContentLoaded", function () {
    // ---------------------------------------THÊM KHÁCH HÀNG--------------------------------------------------
    const addCustomerButton = document.querySelector(".select.add a"); // Nút Thêm khách hàng
    const addCustomerModal = document.getElementById("addCustomerModal"); // Modal thêm khách hàng
    const closeModalButton = addCustomerModal.querySelector(".close"); // Nút đóng modal
    const cancelCustomerButton = document.getElementById("cancelCustomerButton"); // Nút hủy trong modal
    const saveCustomerButton = document.getElementById("saveCustomerButton"); // Nút lưu thông tin khách hàng

    // Hiển thị modal khi nhấn "Thêm khách hàng"
    addCustomerButton.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
        addCustomerModal.style.display = "flex";
    });

    // Đóng modal khi nhấn nút đóng
    closeModalButton.addEventListener("click", function () {
        addCustomerModal.style.display = "none";
    });

    // Đóng modal khi nhấn nút "Hủy"
    cancelCustomerButton.addEventListener("click", function () {
        addCustomerModal.style.display = "none";
    });

    // Đóng modal khi nhấn ra ngoài modal
    window.addEventListener("click", function (event) {
        if (event.target === addCustomerModal) {
            addCustomerModal.style.display = "none";
        }
    });

    // Xử lý lưu thông tin khách hàng
    saveCustomerButton.addEventListener("click", function () {
        const code = document.getElementById("newCustomerCode").value;  // Mã khách hàng
        const username = document.getElementById("newCustomerUsername").value; // Tên đăng nhập
        const name = document.getElementById("newCustomerName").value; // Tên khách hàng
        const phone = document.getElementById("newCustomerPhone").value; // Số điện thoại
        const address = document.getElementById("newCustomerAddress").value; // Địa chỉ

        // Kiểm tra đầu vào
        if (!code || !username || !name || !phone) {
            alert("Vui lòng nhập đầy đủ mã, tên đăng nhập, tên và số điện thoại!");
            return;
        }

        // Lấy bảng khách hàng
        const tableBody = document.getElementById("customerTableBody");

        // Tạo một dòng mới cho bảng
        const newRow = document.createElement("tr");
        newRow.classList.add("customer-item"); // Thêm lớp cho dòng mới

        // Thêm nội dung vào dòng mới
        newRow.innerHTML = `
            <td>${code}</td>
            <td>${username}</td>
            <td>${name}</td>
            <td>${address}</td>
            <td>${phone}</td>
            <td>Khách hàng</td>
            <td>
                <button class="delete" type="button" title="Xóa">
                    <i class="fas fa-trash-alt"></i>
                </button>
                <button class="edit" type="button" title="Sửa">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="lock" type="button" title="Khóa">
                    <i class="fas fa-lock"></i>
                </button>
            </td>
        `;

        // Thêm dòng mới vào bảng
        tableBody.appendChild(newRow);

        // Đóng modal sau khi lưu
        addCustomerModal.style.display = "none";

        // Xóa dữ liệu đã nhập sau khi lưu
        document.getElementById("newCustomerCode").value = "";
        document.getElementById("newCustomerUsername").value = "";
        document.getElementById("newCustomerName").value = "";
        document.getElementById("newCustomerPhone").value = "";
        document.getElementById("newCustomerAddress").value = "";
    });
});

    
 // --------------------------------------------BLOCK NGUOI DUNG--------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const lockButtons = document.querySelectorAll(".lock");
    const unlockButtons = document.querySelectorAll(".fa-lock-open");
    const modalLock = document.getElementById("ModalLock");
    const modalUnlock = document.getElementById("ModalUnlock");
    const confirmLockButton = document.getElementById("confirmLockButton");
    const confirmUnlockButton = document.getElementById("confirmUnlockButton");
    const cancelLockButton = document.getElementById("cancelLockButton");
    const cancelUnlockButton = document.getElementById("cancelUnlockButton");

    let currentRow = null;
    let isUnlocking = false;

    // Xử lý nút khóa
    lockButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (isUnlocking) return;

            modalLock.style.display = "flex";
            currentRow = this.closest("tr");
        });
    });

    // Xử lý nút mở khóa
    unlockButtons.forEach(button => {
        button.addEventListener("click", function () {
            modalUnlock.style.display = "flex";
            currentRow = this.closest("tr");
            isUnlocking = true;
        });
    });

    // Khi nhấn nút "Đồng ý" trong modal khóa
    confirmLockButton.addEventListener("click", function () {
        if (!currentRow) return;

        const lockIconCustomer = currentRow.querySelector(".lock-icon");
        const lockIcon = currentRow.querySelector(".block");
        const lockOpenIcon = currentRow.querySelector(".fa-lock-open");

        if (lockIconCustomer) {
            lockIconCustomer.style.display = "inline";
        }
        if (lockIcon) lockIcon.style.display = "none"; 
        if (lockOpenIcon) lockOpenIcon.style.display = "inline"; 

        modalLock.style.display = "none"; 
        currentRow = null; 
    });

    // Khi nhấn nút "Đồng ý" trong modal mở khóa
    confirmUnlockButton.addEventListener("click", function () {
        if (!currentRow) return;

        const lockIconCustomer = currentRow.querySelector(".lock-icon");
        const lockIcon = currentRow.querySelector(".block");
        const lockOpenIcon = currentRow.querySelector(".fa-lock-open");

        if (lockIconCustomer) {
            lockIconCustomer.style.display = "none";
        }
        if (lockOpenIcon) lockOpenIcon.style.display = "none";
        if (lockIcon) lockIcon.style.display = "inline";

        modalUnlock.style.display = "none";
        currentRow = null;
        isUnlocking = false;
    });

    // Đóng modal khi nhấn "Hủy bỏ" trong modal mở khóa
    cancelUnlockButton.addEventListener("click", function () {
        modalUnlock.style.display = "none";
        currentRow = null;
        isUnlocking = false;
    });

    // Đóng modal khi nhấn "Hủy bỏ" trong modal khóa
    cancelLockButton.addEventListener("click", function () {
        modalLock.style.display = "none";
        currentRow = null;
    });

    // Đóng modal khi nhấn ra ngoài modal
    window.addEventListener("click", function (event) {
        if (event.target === modalLock) {
            modalLock.style.display = "none"; 
        }
        if (event.target === modalUnlock) {
            modalUnlock.style.display = "none";
            isUnlocking = false;
        }
    });
});
