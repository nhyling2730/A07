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




// Mở/đóng menu Lọc
function toggleDropdownMenu() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  }
  
  // Đóng menu nhỏ sau khi chọn "Tình trạng" và cuộn đến phần thống kê
  function handleOptionClick(sectionId) {
    closeDropdownMenu(); // Đóng menu nhỏ
    scrollToSection(sectionId); // Cuộn tới phần thống kê
  }
  
  // Hiển thị bảng chọn Thời gian và đóng menu nhỏ
  function showTimeFilter() {
    document.getElementById("time-filter").style.display = "block"; // Hiện bảng chọn thời gian
    closeDropdownMenu(); // Đóng menu nhỏ
  }
  
  // Đóng menu nhỏ
  function closeDropdownMenu() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display = "none";
  }
  
  // Chọn ngày có sẵn và đóng bảng chọn Thời gian
  function selectPresetDate(option) {
    let dateRange = '';
    switch (option) {
      case 'today':
        dateRange = "Hôm nay";
        break;
      case 'yesterday':
        dateRange = "Hôm qua";
        break;
      case 'thisWeek':
        dateRange = "Tuần này";
        break;
      case 'lastWeek':
        dateRange = "Tuần trước";
        break;
      case 'thisMonth':
        dateRange = "Tháng này";
        break;
      case 'lastMonth':
        dateRange = "Tháng trước";
        break;
    }
  
    // Đặt giá trị cho ô hiển thị thời gian
    document.getElementById("dateRange").value = dateRange;
  
    // Ẩn bảng chọn thời gian và cuộn tới phần thống kê
    document.getElementById("time-filter").style.display = "none";
    scrollToSection("order-tables-time");
  }
  
  // Hiển thị phần nhập ngày tùy chỉnh
  function showCustomDate() {
    document.getElementById("customDate").style.display = "block";
  }
  
  // Áp dụng khoảng thời gian tùy chỉnh và cuộn đến phần thống kê
  function applyCustomDate() {
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
  
    if (startDate && endDate) {
      document.getElementById("dateRange").value = `${startDate} đến ${endDate}`;
      document.getElementById("time-filter").style.display = "none"; // Đóng modal thời gian
      scrollToSection("order-tables-time"); // Cuộn tới phần thống kê
    } else {
      alert("Vui lòng chọn cả hai ngày.");
    }
  }
  
  // Cuộn tới phần thống kê theo ID
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  }
  
  // Đóng menu nhỏ nếu click ra ngoài
  document.addEventListener("click", function (event) {
    const dropdownMenu = document.getElementById("dropdownMenu");
    const filterButton = document.getElementById("filterButton");
  
    // Nếu click bên ngoài menu hoặc nút "Lọc"
    if (!dropdownMenu.contains(event.target) && event.target !== filterButton) {
      dropdownMenu.style.display = "none";
    }
  });
  



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

const orderList = {
    A00: {
        orderId: 'A00',
        customerName: 'Lê Thị Thuỷ Tiên',
        customerPhone: '0795101520',
        customerAddress: '459C Nguyễn Thị Thập, Phường Tân Phong, Quận 7, TP.HCM',
        orderDate: '2024-11-14',
        productNames: 'Phin sữa đá, Freeze trà xanh, Trà sen vàng củ năng',
        productQuantities: 'Phin sữa đá (S-3), Freeze trà xanh (M-2), Trà sen vàng củ năng (S-1)',
        productMoney: '855000',
        orderStatus: 'confirmed',
        orderNotes: 'Giao trước 12h trưa.'
    },
    A04: {
        orderId: 'A04',
        customerName: 'Võ Thị Thu Luyện',
        customerPhone: '0793579111',
        customerAddress: '2B Đường Lê Duẩn, Phường Bến Nghé, Quận 1, Hồ Chí Minh.',
        orderDate: '2024-11-14',
        productNames: 'Phin đen đá, Phindi choco, Trà sen vàng (củ năng)',
        productQuantities: 'Phin đen đá(M-2), Phindi choco(S-5), Trà sen vàng (củ năng)(S-6)',
        productMoney: '582000',
        orderStatus: 'pending',
        orderNotes: ''
    },
    A02: {
      orderId: 'A02',
      customerName: 'Trần Thị Xuân Thanh',
      customerPhone: '0791234567',
      customerAddress: '547 Tạ Quang Bửu, Phường 4, Quận 8, TP. HCM',
      orderDate: '2024-11-14',
      productNames: 'Trà sen vàng (sen), Phin đen đá, Trà xanh đậu đỏ',
      productQuantities: 'Trà sen vàng (sen)(M-1), Phin đen đá(S-1), Trà xanh đậu đỏ(S-1)',
      productMoney: '167000',
      orderStatus: 'delivered',
      orderNotes: ''
    },
    A09: {
      orderId: 'A09',
      customerName: 'Nguyễn Huỳnh Yến Linh',
      customerPhone: '0782468100',
      customerAddress: '273 An Dương Vương, phường 3, Quận 5, TP Hồ Chí Minh',
      orderDate: '2024-11-14',
      productNames: 'Freeze sô-cô-la, Phindi choco',
      productQuantities: 'Freeze sô-cô-la(L-5), Phindi choco(M-4)',
      productMoney: '480000',
      orderStatus: 'confirmed',
      orderNotes: ''
    },
    A10: {
      orderId: 'A10',
      customerName: 'Nguyễn Thị Ngọc Tú',
      customerPhone: '0791234567',
      customerAddress: '36 Kinh Dương Vương, Phường 13, Quận 6, Tp. Hồ Chí Minh',
      orderDate: '2024-11-14',
      productNames: 'Freeze sô-cô-la (1), Phindi choco (1)',
      productQuantities: 'Freeze sô-cô-la (L-1), Phindi choco (L-1)',
      productMoney: '167000',
      orderStatus: 'cancelled',
      orderNotes: ''
    },
    A28: {
      orderId: 'A28',
      customerName: 'Trần Thị Xuân Thanh',
      customerPhone: '0791234567',
      customerAddress: '547 Tạ Quang Bửu, Phường 4, Quận 8, TP. HCM',
      orderDate: '2024-11-15',
      productNames: 'Freeze trà xanh, Phindi cassia',
      productQuantities: 'Freeze trà xanh(M-6), Phindi cassia(S-7)',
      productMoney: '465000',
      orderStatus: 'pending',
      orderNotes: ''
    },
    A26: {
      orderId: 'A26',
      customerName: 'Võ Thị Thu Luyện',
      customerPhone: '0793579111',
      customerAddress: '2B Đường Lê Duẩn, Phường Bến Nghé, Quận 1, Hồ Chí Minh.',
      orderDate: '2024-11-15',
      productNames: 'Trà thanh đào, Phin sữa đá, Trà xanh đậu đỏ',
      productQuantities: 'Trà thanh đào(S-3), Phin sữa đá(M-5), Trà xanh đậu đỏ(S-3)',
      productMoney: '535000',
      orderStatus: 'confirmed',
      orderNotes: ''
    },
    A34: {
      orderId: 'A34',
      customerName: 'Nguyễn Thị Ngọc Tú',
      customerPhone: '0791234567',
      customerAddress: '36 Kinh Dương Vương, Phường 13, Quận 6, Tp. Hồ Chí Minh',
      orderDate: '2024-11-15',
      productNames: 'Phindi kem sữa, Trà sen vàng (sen), Freeze sô-cô-la',
      productQuantities: 'Phindi kem sữa(S-5), Trà sen vàng (sen)(S-5), Freeze sô-cô-la(M-3)',
      productMoney: '555000',
      orderStatus: 'delivered',
      orderNotes: ''
    },
    A15: {
      orderId: 'A15',
      customerName: 'Lê Thị Thuỷ Tiên',
      customerPhone: '0795101520',
      customerAddress: '459C Nguyễn Thị Thập, Phường Tân Phong, Quận 7, TP.HCM',
      orderDate: '2024-11-15',
      productNames: 'Phin đen đá, Phindi hạnh nhân, Trà thạch đào',
      productQuantities: 'Phin đen đá(M-5), Phindi hạnh nhân(S-7), Trà thạch đào(L-2)',
      productMoney: '730000',
      orderStatus: 'pending',
      orderNotes: ''
    },
    A67: {
      orderId: 'A67',
      customerName: 'Nguyễn Huỳnh Yến Linh',
      customerPhone: '0782468100',
      customerAddress: '273 An Dương Vương, phường 3, Quận 5, TP Hồ Chí Minh',
      orderDate: '2024-11-15',
      productNames: 'Phin đen đá, Phindi kem sữa, Cookies & cream',
      productQuantities: 'Phin đen đá(S-3), Phindi kem sữa(S-2), Cookies & cream(M-1)',
      productMoney: '352000',
      orderStatus: 'delivered',
      orderNotes: ''
    },
    A05: {
      orderId: 'A05',
      customerName: 'Võ Thị Thu Luyện',
      customerPhone: '0793579111',
      customerAddress: '2B Đường Lê Duẩn, Phường Bến Nghé, Quận 1, Hồ Chí Minh',
      orderDate: '2024-11-16',
      productNames: 'Phindi kem sữa, Trà thạch vải, Cookies & Cream',
      productQuantities: 'Phindi kem sữa(S-5), Trà thạch vải(M-3), Cookies & Cream(M-3)',
      productMoney: '570000',
      orderStatus: 'confirmed',
      orderNotes: ''
    },
    A06: {
      orderId: 'A06',
      customerName: 'Nguyễn Thị Ngọc Tú',
      customerPhone: '0797654321',
      customerAddress: '36 Kinh Dương Vương, Phường 13, Quận 6, Tp. Hồ Chí Minh',
      orderDate: '2024-11-16',
      productNames: 'Bạc xỉu đá, Phindi cassia, Classic phin freeze',
      productQuantities: 'Bạc xỉu đá(S-3), Phindi cassia(M-2), Classic phin freeze(M-2)',
      productMoney: '455000',
      orderStatus: 'delivered',
      orderNotes: ''
    },
    A13: {
      orderId: 'A13',
      customerName: 'Nguyễn Huỳnh Yến Linh',
      customerPhone: '0782468100',
      customerAddress: '273 An Dương Vương, phường 3, Quận 5, TP Hồ Chí Minh',
      orderDate: '2024-11-16',
      productNames: 'Phin đen đá, Trà xanh đậu đỏ',
      productQuantities: 'Phin đen đá(S-1), Trà xanh đậu đỏ(S-1)',
      productMoney: '92000',
      orderStatus: 'cancelled',
      orderNotes: ''
    },
    A11: {
      orderId: 'A11',
      customerName: 'Trần Thị Xuân Thanh',
      customerPhone: '0791234567',
      customerAddress: '547 Tạ Quang Bửu, Phường 4, Quận 8, TP. HCM',
      orderDate: '2024-11-16',
      productNames: 'Phin sữa đá, Phin đen đá, Phindi hạnh nhân',
      productQuantities: 'Phin sữa đá(S-2), Phin đen đá(S-3), Phindi hạnh nhân(M-2)',
      productMoney: '291000',
      orderStatus: 'pending',
      orderNotes: ''
    },
    A16: {
      orderId: 'A02',
      customerName: 'Lê Thị Thuỷ Tiên',
      customerPhone: '0795101520',
      customerAddress: '459C Nguyễn Thị Thập, Phường Tân Phong, Quận 7, TP.HCM',
      orderDate: '2024-11-14',
      productNames: 'Phin sữa đá, Freeze trà xanh, Trà sen vàng (củ năng)',
      productQuantities: 'Phin sữa đá(S-5), Freeze trà xanh(M-5), Trà sen vàng (củ năng)(M-4)',
      productMoney: '855000',
      orderStatus: 'delivered',
      orderNotes: ''
    }

};


// Khi mở modal, định dạng tiền và hiển thị
document.querySelectorAll('.edit').forEach(button => {
  button.addEventListener('click', function () {
      const orderId = this.getAttribute('data-order-id');
      const orderData = orderList[orderId];

      if (orderData) {
          document.getElementById('productMoney').value = formatCurrency(orderData.productMoney); // Hiển thị dạng 855.000 VNĐ
          document.getElementById('orderId').value = orderData.orderId;
          document.getElementById('customerName').value = orderData.customerName;
          document.getElementById('customerPhone').value = orderData.customerPhone;
          document.getElementById('customerAddress').value = orderData.customerAddress;
          document.getElementById('orderDate').value = orderData.orderDate;
          document.getElementById('productNames').value = orderData.productNames;
          document.getElementById('productQuantities').value = orderData.productQuantities;
          document.getElementById('orderStatus').value = orderData.orderStatus;
          document.getElementById('orderNotes').value = orderData.orderNotes;

          document.getElementById('orderDetailModal').style.display = 'block';
      }
  });
});

// Hàm định dạng tiền tệ
function formatCurrency(value) {
  if (!value) return '';
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' VNĐ';
}

// Khi lưu, chuyển về số nguyên
document.getElementById('saveBtn').addEventListener('click', function () {
  const orderId = document.getElementById('orderId').value;
  const moneyValue = document.getElementById('productMoney').value;

  // Chuyển tiền từ dạng 855.000 VNĐ về số nguyên
  orderList[orderId].productMoney = parseCurrency(moneyValue);

  console.log('Cập nhật đơn hàng:', orderList[orderId]);
  document.getElementById('orderDetailModal').style.display = 'none';
});

// Hàm chuyển đổi chuỗi tiền tệ về số nguyên
function parseCurrency(currencyStr) {
  return parseInt(currencyStr.replace(/\./g, '').replace(' VNĐ', ''));
}


// Đóng modal khi nhấn vào nút "Hủy bỏ"
document.getElementById('cancelBtn').addEventListener('click', function () {
    document.getElementById('orderDetailModal').style.display = 'none';
});

// Đóng modal khi nhấn vào nút "Đóng"
document.querySelector('#orderDetailModal .close').addEventListener('click', function () {
    document.getElementById('orderDetailModal').style.display = 'none';
});

// Đóng modal khi nhấn ra ngoài modal
window.addEventListener('click', function (event) {
    const modal = document.getElementById('orderDetailModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// document.getElementById('saveBtn').addEventListener('click', function () {
//     document.getElementById('orderDetailModal').style.display = 'none';
// });

// Lưu dữ liệu khi nhấn vào nút "Lưu lại"
document.getElementById('saveBtn').addEventListener('click', function () {
    const orderId = document.getElementById('orderId').value;

    // Cập nhật lại thông tin trong mảng orderList
    orderList[orderId].customerName = document.getElementById('customerName').value;
    orderList[orderId].customerPhone = document.getElementById('customerPhone').value;
    orderList[orderId].customerAddress = document.getElementById('customerAddress').value;
    orderList[orderId].orderDate = document.getElementById('orderDate').value;
    orderList[orderId].productQuantities = document.getElementById('productQuantities').value;
    orderList[orderId].productMoney = document.getElementById('productMoney').value;
    orderList[orderId].orderStatus = document.getElementById('orderStatus').value;
    orderList[orderId].orderNotes = document.getElementById('orderNotes').value;

    // Đóng modal
    document.getElementById('orderDetailModal').style.display = 'none';

    // In thông tin cập nhật (tùy chọn)
    console.log('Cập nhật đơn hàng:', orderList[orderId]);
});


