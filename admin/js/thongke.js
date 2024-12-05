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

/* date */
document.getElementById("dateRange").onclick = function () {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  };
  
  // Đóng dropdown nếu người dùng click ra ngoài
  document.addEventListener("click", function (event) {
    const dropdown = document.getElementById("dropdownMenu");
    const dateRangeButton = document.getElementById("dateRange");
  
    // Kiểm tra xem click có xảy ra ngoài dropdown và nút dateRange hay không
    if (!dropdown.contains(event.target) && event.target !== dateRangeButton) {
      dropdown.style.display = "none";
    }
  });
  
  function showCustomDate() {
    document.getElementById("customDate").style.display = "block";
  }
  
  function applyCustomDate() {
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    if (startDate && endDate) {
      document.getElementById("dateRange").value = `${startDate} đến ${endDate}`;
    }
    document.getElementById("dropdownMenu").style.display = "none";
  }
  
  document.querySelectorAll("#dropdownMenu ul li").forEach((item) => {
    item.addEventListener("click", () => {
      const selectedOption = item.textContent;
      const today = new Date();
      let startDate, endDate;
  
      switch (selectedOption) {
        case "Hôm nay":
          startDate = formatDate(today);
          endDate = ""; // Không cần "đến"
          break;
        case "Hôm qua":
          const yesterday = new Date(today);
          yesterday.setDate(yesterday.getDate() - 1);
          startDate = formatDate(yesterday);
          endDate = ""; // Không cần "đến"
          break;
        case "Tuần này":
          startDate = formatDate(getMonday(today));
          endDate = formatDate(today);
          break;
        case "Tuần trước":
          const lastWeekMonday = getMonday(
            new Date(today.setDate(today.getDate() - 7))
          );
          const lastWeekSunday = new Date(lastWeekMonday);
          lastWeekSunday.setDate(lastWeekSunday.getDate() + 6);
          startDate = formatDate(lastWeekMonday);
          endDate = formatDate(lastWeekSunday);
          break;
        case "Tháng này":
          startDate = formatDate(
            new Date(today.getFullYear(), today.getMonth(), 1)
          );
          endDate = formatDate(today);
          break;
        case "Tháng trước":
          const lastMonth = new Date(
            today.getFullYear(),
            today.getMonth() - 1,
            1
          );
          startDate = formatDate(lastMonth);
          endDate = formatDate(
            new Date(lastMonth.getFullYear(), lastMonth.getMonth() + 1, 0)
          );
          break;
        default:
          return;
      }
  
      // Đặt giá trị cho trường chọn khoảng thời gian
      if (endDate) {
        document.getElementById(
          "dateRange"
        ).value = `${startDate} đến ${endDate}`;
      } else {
        document.getElementById("dateRange").value = startDate; // Chỉ hiển thị startDate nếu không có endDate
      }
  
      document.getElementById("dropdownMenu").style.display = "none";
      document.getElementById("customDate").style.display = "none"; // Ẩn phần tùy chọn nếu có
    });
  });
  
  // Hàm định dạng ngày thành chuỗi dd-mm-yyyy
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  
  // Hàm lấy ngày thứ Hai của tuần hiện tại
  function getMonday(date) {
    const day = date.getDay(),
      diff = date.getDate() - day + (day === 0 ? -6 : 1); // Điều chỉnh để có Thứ Hai
    return new Date(date.setDate(diff));
  }
  
  /* In */
  function showPrintModal() {
      document.getElementById('printModal').style.display = 'block';
  }
  
  function closePrintModal() {
      document.getElementById('printModal').style.display = 'none';
  }
  
  function printRevenue() {
      var printContent = document.querySelector('.modal-content').innerHTML;
      var originalContent = document.body.innerHTML;
      
      document.body.innerHTML = printContent;
      window.print();
      document.body.innerHTML = originalContent;
  
      closePrintModal();
  }
  
  
  /* Hóa đơn */
  const productInvoices = {
      "PHIN SỮA ĐÁ": {
          code: "HC01",
          quantity: 43,
          revenue: "1.505.000 VNĐ",
          details: [
              { date: "16/11/2024", quantity: 10, unitPrice: "35.000 VNĐ", total: "350.000 VNĐ" },
              { date: "15/11/2024", quantity: 18, unitPrice: "35.000 VNĐ", total: "630.000 VNĐ" },
              { date: "14/11/2024", quantity: 15, unitPrice: "35.000 VNĐ", total: "525.000 VNĐ" }
          ]
      },
      "PHIN ĐEN ĐÁ": {
          code: "HC02",
          quantity: 39,
          revenue: "1.248.000 VNĐ",
          details: [
              { date: "16/11/2024", quantity: 9, unitPrice: "32.000 VNĐ", total: "288.000 VNĐ" },
              { date: "15/11/2024", quantity: 18, unitPrice: "32.000 VNĐ", total: "576.000 VNĐ" },
              { date: "14/11/2024", quantity: 12, unitPrice: "32.000 VNĐ", total: "384.000 VNĐ" }
          ]
      },
      "BẠC XỈU ĐÁ": {
          code: "HC03",
          quantity: 10,
          revenue: "290.000 VNĐ",
          details: [
              { date: "16/11/2024", quantity: 2, unitPrice: "29.000 VNĐ", total: "58.000 VNĐ" },
              { date: "15/11/2024", quantity: 3, unitPrice: "29.000 VNĐ", total: "87.000 VNĐ" },
              { date: "14/11/2024", quantity: 5, unitPrice: "29.000 VNĐ", total: "145.000 VNĐ" }
          ]
      },
      "PHINDI HẠNH NHÂN": {
          code: "HC04",
          quantity: 26,
          revenue: "1.430.000 VNĐ",
          details: [
              { date: "16/11/2024", quantity: 9, unitPrice: "55.000 VNĐ", total: "495.000 VNĐ" },
              { date: "15/11/2024", quantity: 12, unitPrice: "55.000 VNĐ", total: "660.000 VNĐ" },
              { date: "14/11/2024", quantity: 5, unitPrice: "55.000 VNĐ", total: "275.000 VNĐ" }
          ]
      },
      "PHINDI KEM SỮA": {
          code: "HC05",
          quantity: 21,
          revenue: "1.155.000 VNĐ",
          details: [
              { date: "16/11/2024", quantity: 7, unitPrice: "55.000 VNĐ", total: "385.000 VNĐ" },
              { date: "15/11/2024", quantity: 6, unitPrice: "55.000 VNĐ", total: "330.000 VNĐ" },
              { date: "14/11/2024", quantity: 8, unitPrice: "55.000 VNĐ", total: "440.000 VNĐ" }
          ]
      },
      "PHINDI CHOCO": {
          code: "HC06",
          quantity: 3,
          revenue: "165.000 VNĐ",
          details: [
              { date: "16/11/2024", quantity: 0, unitPrice: "55.000 VNĐ", total: "0 VNĐ" },
              { date: "15/11/2024", quantity: 2, unitPrice: "55.000 VNĐ", total: "110.000 VNĐ" },
              { date: "14/11/2024", quantity: 1, unitPrice: "55.000 VNĐ", total: "55.000 VNĐ" }
          ]
      },
      "PHINDI CASSIA": {
          code: "HC07",
          quantity: 13,
          revenue: "715.000 VNĐ",
          details: [
              { date: "16/11/2024", quantity: 5, unitPrice: "55.000 VNĐ", total: "275.000 VNĐ" },
              { date: "15/11/2024", quantity: 3, unitPrice: "55.000 VNĐ", total: "165.000 VNĐ" },
              { date: "14/11/2024", quantity: 5, unitPrice: "55.000 VNĐ", total: "275.000 VNĐ" }
          ]
      },
      "CLASSIC PHIN FREEZE": {
          code: "HC08",
          quantity: 13,
          revenue: "650.000 VNĐ",
          details: [
              { date: "16/11/2024", quantity: 3, unitPrice: "50.000 VNĐ", total: "150.000 VNĐ" },
              { date: "15/11/2024", quantity: 6, unitPrice: "50.000 VNĐ", total: "300.000 VNĐ" },
              { date: "14/11/2024", quantity: 4, unitPrice: "50.000 VNĐ", total: "200.000 VNĐ" }
          ]
      },
      "CARAMEL PHIN FREEZE": {
          code: "HC09",
          quantity: 29,
          revenue: "1.450.000 VNĐ",
          details: [
              { date: "16/11/2024", quantity: 7, unitPrice: "50.000 VNĐ", total: "350.000 VNĐ" },
              { date: "15/11/2024", quantity: 12, unitPrice: "50.000 VNĐ", total: "600.000 VNĐ" },
              { date: "14/11/2024", quantity: 10, unitPrice: "50.000 VNĐ", total: "500.000 VNĐ" }
          ]
      },
      "COOKIES & CREAM": {
          code: "HC10",
          quantity: 5,
          revenue: "250.000 VNĐ",
          details: [
              { date: "16/11/2024", quantity: 1, unitPrice: "50.000 VNĐ", total: "50.000 VNĐ" },
              { date: "15/11/2024", quantity: 2, unitPrice: "50.000 VNĐ", total: "100.000 VNĐ" },
              { date: "14/11/2024", quantity: 2, unitPrice: "50.000 VNĐ", total: "100.000 VNĐ" }
          ]
      },
      "FREEZE TRÀ XANH": {
          code: "HC11",
          quantity: 35,
          revenue: "1.750.000 VNĐ",
          details: [
              { date: "16/11/2024", quantity: 10, unitPrice: "50.000 VNĐ", total: "500.000 VNĐ" },
              { date: "15/11/2024", quantity: 9, unitPrice: "50.000 VNĐ", total: "450.000 VNĐ" },
              { date: "14/11/2024", quantity: 16, unitPrice: "50.000 VNĐ", total: "800.000 VNĐ" }
          ]
      },
      "FREEZE SÔ-CÔ-LA": {
          code: "HC12",
          quantity: 14,
          revenue: "700.000 VNĐ",
          details: [
              { date: "16/11/2024", quantity: 1, unitPrice: "50.000 VNĐ", total: "50.000 VNĐ" },
              { date: "15/11/2024", quantity: 6, unitPrice: "50.000 VNĐ", total: "300.000 VNĐ" },
              { date: "14/11/2024", quantity: 7, unitPrice: "50.000 VNĐ", total: "350.000 VNĐ" }
          ]
      },
      "TRÀ XANH ĐẬU ĐỎ": {
          code: "HC13",
          quantity: 17,
          revenue: "765.000 VNĐ",
          details: [
              { date: "16/11/2024", quantity: 7, unitPrice: "45.000 VNĐ", total: "315.000 VNĐ" },
              { date: "15/11/2024", quantity: 4, unitPrice: "45.000 VNĐ", total: "180.000 VNĐ" },
              { date: "14/11/2024", quantity: 6, unitPrice: "45.000 VNĐ", total: "270.000 VNĐ" }
          ]
      },
      "TRÀ THẠCH VẢI": {
          code: "HC14",
          quantity: 3,
          revenue: "135.000 VNĐ",
          details: [
              { date: "16/11/2024", quantity: 2, unitPrice: "45.000 VNĐ", total: "90.000 VNĐ" },
              { date: "15/11/2024", quantity: 0, unitPrice: "45.000 VNĐ", total: "0 VNĐ" },
              { date: "14/11/2024", quantity: 1, unitPrice: "45.000 VNĐ", total: "45.000 VNĐ" }
          ]
      },
      "TRÀ SEN VÀNG (SEN)": {
          code: "HC15",
          quantity: 13,
          revenue: "585.000 VNĐ",
          details: [
              { date: "16/11/2024", quantity: 3, unitPrice: "45.000 VNĐ", total: "135.000 VNĐ" },
              { date: "15/11/2024", quantity: 4, unitPrice: "45.000 VNĐ", total: "180.000 VNĐ" },
              { date: "14/11/2024", quantity: 6, unitPrice: "45.000 VNĐ", total: "270.000 VNĐ" }
          ]
      },
      "TRÀ SEN VÀNG (CỦ NĂNG)": {
          code: "HC16",
          quantity: 38,
          revenue: "1.710.000 VNĐ",
          details: [
              { date: "16/11/2024", quantity: 10, unitPrice: "45.000 VNĐ", total: "450.000 VNĐ" },
              { date: "15/11/2024", quantity: 12, unitPrice: "45.000 VNĐ", total: "540.000 VNĐ" },
              { date: "14/11/2024", quantity: 16, unitPrice: "45.000 VNĐ", total: "720.000 VNĐ" }
          ]
      },
      "TRÀ THANH ĐÀO": {
          code: "HC17",
          quantity: 1,
          revenue: "45.000 VNĐ",
          details: [
              { date: "16/11/2024", quantity: 0, unitPrice: "45.000 VNĐ", total: "0 VNĐ" },
              { date: "15/11/2024", quantity: 1, unitPrice: "45.000 VNĐ", total: "45.000 VNĐ" },
              { date: "14/11/2024", quantity: 0, unitPrice: "45.000 VNĐ", total: "0 VNĐ" }
          ]
      },
      "TRÀ THẠCH ĐÀO": {
          code: "HC18",
          quantity: 19,
          revenue: "855.000 VNĐ",
          details: [
              { date: "16/11/2024", quantity: 8, unitPrice: "45.000 VNĐ", total: "360.000 VNĐ" },
              { date: "15/11/2024", quantity: 5, unitPrice: "45.000 VNĐ", total: "225.000 VNĐ" },
              { date: "14/11/2024", quantity: 6, unitPrice: "45.000 VNĐ", total: "270.000 VNĐ" }
          ]
      }
  };
  
  function openInvoice(productName) {
      const invoice = productInvoices[productName];
      if (!invoice) return;
  
      document.getElementById("productName").innerText = productName;
      document.getElementById("productCode").innerText = invoice.code;
      document.getElementById("totalQuantity").innerText = invoice.quantity;
      document.getElementById("totalRevenue").innerText = invoice.revenue;
  
      const invoiceDetailsTable = document.getElementById("invoiceDetails");
      invoiceDetailsTable.innerHTML = ""; 
  
      invoice.details.forEach((item) => {
          const row = `<tr>
              <td>${item.date}</td>
              <td>${item.quantity}</td>
              <td>${item.unitPrice}</td>
              <td>${item.total}</td>
          </tr>`;
          invoiceDetailsTable.innerHTML += row;
      });
  
      const modal = document.getElementById("invoiceModal");
      modal.style.display = "flex";
  }
  
  function closeInvoiceModal() {
      const modal = document.getElementById("invoiceModal");
      modal.style.display = "none";
  }
  
  /* Hóa đơn KH */
  const invoices = {
      KH01: [
          {
              date: "16/11/2024",
              orderId: "A16",
              productName: "Phin sữa đá, Freeze trà xanh, Trà sen vàng (củ năng)",
              totalAmount: "855.000 VNĐ"
          },
          {
              date: "15/11/2024",
              orderId: "A15",
              productName: "Phin đen đá, Phindi hạnh nhân, Trà thạch đào",
              totalAmount: "730.000 VNĐ"
          },
          {
              date: "14/11/2024",
              orderId: "A08",
              productName: "Bạc xỉu đá, Caramel phin freeze, Trà sen vàng (sen)",
              totalAmount: "759.000 VNĐ"
          }
      ],
      KH02: [
          {
              date: "16/11/2024",
              orderId: "A05",
              productName: "Phindi kem sữa, Trà thạch vải, Cookies & Cream",
              totalAmount: "570.000 VNĐ"
          },
          {
              date: "15/11/2024",
              orderId: "A26",
              productName: "Trà thanh đào, Phin sữa đá, Trà xanh đậu đỏ",
              totalAmount: "535.000 VNĐ"
          },
          {
              date: "14/11/2024",
              orderId: "A04",
              productName: "Phin đen đá, Phindi choco, Trà sen vàng (củ năng)",
              totalAmount: "582.000 VNĐ"
          }
      ],
      KH03: [
          {
              date: "16/11/2024",
              orderId: "A06",
              productName: "Bạc xỉu đá, Phindi cassia, Classic phin freeze",
              totalAmount: "455.000 VNĐ"
          },
          {
              date: "15/11/2024",
              orderId: "A34",
              productName: "Phindi kem sữa, Trà sen vàng (sen), Freeze sô-cô-la",
              totalAmount: "555.000 VNĐ"
          },
          {
              date: "14/11/2024",
              orderId: "",
              productName: "",
              totalAmount: "0 VNĐ"
          }
      ],
      KH04: [
          {
              date: "16/11/2024",
              orderId: "A11",
              productName: "Phin sữa đá, Phin đen đá, Phindi hạnh nhân",
              totalAmount: "291.000 VNĐ"
          },
          {
              date: "15/11/2024",
              orderId: "A28",
              productName: "Freeze trà xanh, Phindi cassia",
              totalAmount: "465.000 VNĐ"
          },
          {
              date: "14/11/2024",
              orderId: "A02",
              productName: "Trà sen vàng (sen), Phin đen đá, Trà xanh đậu đỏ",
              totalAmount: "167.000 VNĐ"
          }
      ],
      KH05: [
          {
              date: "16/11/2024",
              orderId: "",
              productName: "",
              totalAmount: "0 VNĐ"
          },
          {
              date: "15/11/2024",
              orderId: "A67",
              productName: "Phin đen đá, Phindi kem sữa, Cookies & cream",
              totalAmount: "352.000 VNĐ"
          },
          {
              date: "14/11/2024",
              orderId: "A09",
              productName: "Freeze sô-cô-la, Phindi choco",
              totalAmount: "480.000 VNĐ"
          }
      ]
  };
  
  // Hiển thị modal và hóa đơn khi nhấn vào nút
  function showCustomerInvoiceModal(customerId) {
      const modal = document.getElementById("customerInvoiceModal");
      const invoiceContent = document.getElementById("customerInvoiceContent");
  
      // Lấy hóa đơn của khách hàng
      const customerInvoices = invoices[customerId] || ["Không có hóa đơn nào."];
  
      // Tạo bảng hóa đơn và chèn vào modal
      let invoiceRows = customerInvoices.map(invoice => {
          return `
              <tr>
                  <td>${invoice.date}</td>
                  <td>${invoice.orderId}</td>
                  <td>${invoice.productName}</td>
                  <td>${invoice.totalAmount}</td>
              </tr>
          `;
      }).join("");
  
      // Cập nhật nội dung bảng hóa đơn trong modal
      invoiceContent.innerHTML = invoiceRows;
      modal.style.display = "flex";
  }
  
  // Đóng modal khi nhấn vào nút "X" hoặc click ra ngoài modal
  function closeCustomerInvoiceModal() {
      const modal = document.getElementById("customerInvoiceModal");
      modal.style.display = "none";
  }
  
  // Đảm bảo rằng khi click ra ngoài modal, modal sẽ đóng lại
  window.onclick = function(event) {
      const modal = document.getElementById("customerInvoiceModal");
      if (event.target == modal) {
          closeCustomerInvoiceModal();
      }
  };
  
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
  // Hiển thị nút khi cuộn xuống 200px
  window.onscroll = function () {
    if (window.scrollY > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };
  
  // Cuộn lên đầu trang khi nhấn nút
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });