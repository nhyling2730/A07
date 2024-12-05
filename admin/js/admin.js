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
        "bảng tin": "admin.html",
        "tất cả sản phẩm": "./pages/allproduct.html",
        "thêm sản phẩm": "./pages/addproduct.html",
        "quản lý đơn hàng": "order.html",
        "quản lý người dùng": "./pages/user.html",
        "thống kê": "./pages/thongke.html",
        "đăng xuất": "login_admin.html",
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

//Biểu đồ đơn hàng
// Biểu đồ Order kiểu Doughnut
const orderCtx = document.getElementById('myChart').getContext('2d');

new Chart(orderCtx, {
    type: 'doughnut', // Thay đổi thành doughnut
    data: {
        labels: ['Đã huỷ','Đã giao', 'Chưa xử lý', 'Đang giao'],
        datasets: [{
            label: 'Số lượng đơn hàng',
            data: [20, 20, 40, 20], // Dữ liệu số lượng đơn hàng mỗi ngày
            backgroundColor: [
                'red', // Màu sắc từng phần của biểu đồ
                'green',
                '#FFCE56',
                '#4BC0C0',
            ],
            borderColor: '#ffffff', // Màu viền từng phần của biểu đồ
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#718355' // Màu chữ của nhãn chú thích
                }
            },
            tooltip: {
                backgroundColor: '#b5c99A', // Màu nền của tooltip
                titleColor: '#718355', // Màu tiêu đề của tooltip
                bodyColor: '#718355'  // Màu nội dung của tooltip
            }
        },
        cutout: '30%' // Tạo khoảng trống ở giữa để có dạng Doughnut
    }
});





// Biểu đồ Khách hàng
const ctx = document.getElementById('trafficChart').getContext('2d');

new Chart(ctx, {
    type: 'bar', // Loại biểu đồ
    data: {
        labels: ['Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ 7', 'Chủ nhật'],
        datasets: [{
            label: '# lượt', 
            data: [56, 35, 84, 76, 90, 38, 99],
            backgroundColor: '#b5c99A', // Màu sắc của các cột
            borderColor: '#718355', // Màu viền của các cột
            hoverBackgroundColor: '#718355', // Màu khi hover vào cột
            hoverBorderColor: '#b5c99A', // Màu viền khi hover vào cột
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#718355' // Màu chữ của nhãn chú thích
                }
            },
            tooltip: {
                backgroundColor: '#b5c99A', // Màu nền của tooltip
                titleColor: '#718355', // Màu tiêu đề của tooltip
                bodyColor: '#718355'  // Màu nội dung của tooltip
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#718355' // Màu chữ trên trục X
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#718355' // Màu chữ trên trục Y
                }
            }
        }
    }
});

