const menuItems = document.querySelectorAll("li > a[href='#thucdon']");

    // Thêm sự kiện click vào các phần tử menu chính
    menuItems.forEach(menu => {
        menu.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn hành động mặc định

            // Tìm sub-menu liên quan và bật/tắt nó
            const subMenu = this.nextElementSibling;
            if (subMenu.style.display === "none" || subMenu.style.display === "") {
                subMenu.style.display = "block"; // Hiển thị sub-menu
            } else {
                subMenu.style.display = "none"; // Ẩn sub-menu
            }
        });
    });

    // Tìm phần tử menu có sub-menu và thêm sự kiện hover (mouseenter và mouseleave)
    const menu = document.getElementById('menu');
    const subMenu = menu.querySelector('.sub-menu');

    // Khi rê chuột vào "THỰC ĐƠN"
    menu.addEventListener('mouseenter', function() {
        subMenu.style.display = 'block'; // Hiển thị sub-menu
    });

    // Khi rê chuột ra khỏi vùng "THỰC ĐƠN" và sub-menu
    menu.addEventListener('mouseleave', function() {
        subMenu.style.display = 'none'; // Ẩn sub-menu
    });
