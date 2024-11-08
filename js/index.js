/* nav mav-menu khi thu nhỏ */
const toggleIcon = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");
const faBars = document.querySelector(".fa-bars");
const faXmark = document.querySelector(".fa-xmark");

toggleIcon.addEventListener("click", function () {
  navMenu.classList.toggle("show");
  faBars.classList.toggle("hidden");
  faXmark.classList.toggle("visible");
});

window.addEventListener("click", function (event) {
  if (!toggleIcon.contains(event.target) && !navMenu.contains(event.target)) {
    navMenu.classList.remove("show");
    faBars.classList.remove("hidden");
    faXmark.classList.remove("visible");
  }
});

/* nav */
const menuLinks = document.querySelectorAll(".nav-menu ul li a");
menuLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    menuLinks.forEach((item) => item.parentElement.classList.remove("active"));
    link.parentElement.classList.add("active");
  });
});

/* poster */
let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItems = items.length;

let autoSlider = setInterval(() => {
  next.click();
}, 8000);

next.onclick = function () {
  active = (active + 1) % lengthItems;
  reloadSlider();
};

prev.onclick = function () {
  active = (active - 1 + lengthItems) % lengthItems;
  reloadSlider();
};

function reloadSlider() {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + "px";

  let lastActiveDot = document.querySelector(".slider .dots li.active");
  if (lastActiveDot) lastActiveDot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(autoSlider);
  autoSlider = setInterval(() => {
    next.click();
  }, 8000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", function () {
    active = key;
    reloadSlider();
  });
});

/* Tìm kiếm */
document.addEventListener("DOMContentLoaded", function() {
  const searchToggle = document.querySelector(".searchToggle");
  const searchBox = document.querySelector(".search-bar");
  const searchInput = document.getElementById("search-input");
  const searchBoxButton = document.querySelector(".search-box button");
  const dropdownItems1 = document.querySelectorAll("#list .dropdown-list-item");
  const dropdownItems2 = document.querySelectorAll("#price-list .dropdown-list-item");
  const dropdownList1 = document.getElementById("list");
  const dropdownList2 = document.getElementById("price-list");
  const span1 = document.getElementById("span");
  const span2 = document.getElementById("price-span");

  let selectedText1 = "Tất cả";
  let selectedText2 = "Khoảng giá";

  searchToggle.addEventListener("click", () => {
      searchToggle.classList.toggle("active");
      const isActive = searchToggle.classList.contains("active");
      searchBox.style.display = isActive ? "flex" : "none";
  });

  // Hàm thực hiện tìm kiếm
  function performSearch(e) {
      const query = searchInput.value.trim();

      if (query === "") {
          return;
      }

      searchToggle.classList.remove("active");
      searchBox.style.display = "none";

      span1.innerText = selectedText1;
      span2.innerText = selectedText2;

      console.log(`Tìm kiếm với từ khóa: ${query}`);
  }

  // Thêm sự kiện click vào nút tìm kiếm
  searchBoxButton.addEventListener("click", performSearch);

  // Thêm sự kiện keyup để thực hiện tìm kiếm khi nhấn Enter
  searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
          performSearch(e);
      }
  });

  // Sự kiện submit khi người dùng nhấn Enter hoặc gửi form
  const searchForm = document.querySelector(".search-form");
  searchForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Ngăn form gửi lại trang
      performSearch(e);
  });

  document.querySelector(".dropdown-bar1").addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownList1.classList.toggle("show");
      dropdownList2.classList.remove("show");
  });

  document.querySelector(".dropdown-bar2").addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownList2.classList.toggle("show");
      dropdownList1.classList.remove("show");
  });

  dropdownItems1.forEach((item) => {
      item.addEventListener("click", (e) => {
          selectedText1 = e.target.innerText;
          span1.innerText = selectedText1;
          updatePlaceholder();
          dropdownList1.classList.remove("show");
      });
  });

  dropdownItems2.forEach((item) => {
      item.addEventListener("click", (e) => {
          selectedText2 = e.target.innerText;
          span2.innerText = selectedText2;
          updatePlaceholder();
          dropdownList2.classList.remove("show");
      });
  });

  document.addEventListener("click", () => {
      dropdownList1.classList.remove("show");
      dropdownList2.classList.remove("show");
  });

  dropdownList1.addEventListener("click", (e) => e.stopPropagation());
  dropdownList2.addEventListener("click", (e) => e.stopPropagation());

  function updatePlaceholder() {
      searchInput.placeholder = `Tìm kiếm ${selectedText1}, ${selectedText2}`;
  }
});

/* user */
document.addEventListener("DOMContentLoaded", function () {
  const userIcon = document.querySelector(".fa-user");
  const dropdownUser = document.querySelector(".dropdown-user");
  let hideTimeout;

  userIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownUser.style.display =
      dropdownUser.style.display === "flex" ? "none" : "flex";
  });

  function hideDropdown() {
    hideTimeout = setTimeout(() => {
      dropdownUser.style.display = "none";
    }, 200);
  }

  userIcon.addEventListener("mouseleave", hideDropdown);
  dropdownUser.addEventListener("mouseleave", hideDropdown);

  dropdownUser.addEventListener("mouseenter", function () {
    clearTimeout(hideTimeout);
  });

  document.addEventListener("click", function (event) {
    if (
      !userIcon.contains(event.target) &&
      !dropdownUser.contains(event.target)
    ) {
      dropdownUser.style.display = "none";
    }
  });
});

/* Phân trang */
const productsPerPage = 4;
let currentPage = 1;

const productList = document.getElementById("productList");
const products = Array.from(productList.getElementsByClassName("menu_item"));
const totalPages = Math.ceil(products.length / productsPerPage);

function displayPage(page) {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;

    products.forEach((product, index) => {
        product.style.display = index >= start && index < end ? "block" : "none";
    });

    updatePagination();
}

function updatePagination() {
    document.querySelectorAll(".listpage li").forEach((li, index) => {
        li.classList.toggle("active", parseInt(li.textContent) === currentPage);
    });

    document.querySelector(".page1").style.pointerEvents = currentPage === 1 ? "none" : "auto";
    document.querySelector(".page1").style.opacity = currentPage === 1 ? "0.5" : "1";

    document.querySelector(".page2").style.pointerEvents = currentPage === totalPages ? "none" : "auto";
    document.querySelector(".page2").style.opacity = currentPage === totalPages ? "0.5" : "1";
}

document.querySelector(".listpage").addEventListener("click", (e) => {
    if (e.target.closest(".page1") && currentPage > 1) {
        currentPage--;
    } else if (e.target.closest(".page2") && currentPage < totalPages) {
        currentPage++;
    } else if (!isNaN(e.target.textContent)) {
        currentPage = parseInt(e.target.textContent);
    }
    displayPage(currentPage);
});

displayPage(currentPage);

/* Top */
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
