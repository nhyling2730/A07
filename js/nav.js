/* nav mav-menu khi thu nhỏ */
document.querySelector('.toggle').addEventListener('click', function() {
  const navMenu = document.querySelector('.nav-menu');
  const faBars = document.querySelector('.fa-bars');
  const faXmark = document.querySelector('.fa-xmark');

  navMenu.classList.toggle('show');

  faBars.classList.toggle('active');
  faXmark.classList.toggle('active');
});

function toggleSubMenu(subMenuId) {
  const allSubMenus = document.querySelectorAll('.sub-menu');
  allSubMenus.forEach(menu => {
      if (menu.id !== subMenuId) {
          menu.style.display = 'none';
      }
  });
  
  const subMenu = document.getElementById(subMenuId);
  if (subMenu.style.display === 'flex') {
      subMenu.style.display = 'none'; 
  } else {
      subMenu.style.display = 'flex'; 
  }
}

document.querySelectorAll('.nav-menu .dropdown > a').forEach(item => {
  item.addEventListener('click', function(event) {
      event.preventDefault(); 
      const subMenuId = item.nextElementSibling.id; 
      toggleSubMenu(subMenuId); 
  });
});

/* tìm kiếm */
document.addEventListener("DOMContentLoaded", function () {
  const searchToggle = document.querySelector(".searchToggle");
  const searchBox = document.querySelector(".search-bar");
  const searchInput = document.getElementById("search-input");
  const searchBoxButton = document.querySelector(".search-box button");
  const dropdownItems1 = document.querySelectorAll("#list .dropdown-list-item");
  const dropdownItems2 = document.querySelectorAll(
    "#price-list .dropdown-list-item"
  );

  let searchParams =   new URLSearchParams(window.location.search).get("openHistory");
  if(searchParams == "true") {
    showOrderHistory();
  }

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

  searchBoxButton.addEventListener("click", function (e) {
    const query = searchInput.value.trim();

    if (query === "") {
      e.preventDefault(); 
    } else {
      span1.innerText = selectedText1;
      span2.innerText = selectedText2;
    }
  });

  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      const query = searchInput.value.trim();
      if (query === "") {
        e.preventDefault(); 
      } else {
        span1.innerText = selectedText1;
        span2.innerText = selectedText2;
      }
    }
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

/* Top */
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.getElementById('cart-icon');
  const modal = document.getElementById('login-modal');
  const closeModal = document.getElementById('close-modal');
  const modalContent = document.querySelector('.modal-content');

  cartIcon.addEventListener('click', function(event) {
    event.preventDefault(); 
    modal.style.display = 'flex'; 
    centerModal();  
    styleCloseButton();
  });

  closeModal.addEventListener('click', function() {
    modal.style.display = 'none'; 
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none'; 
    }
  });

  function centerModal() {
    const modalWidth = modalContent.offsetWidth;
    const modalHeight = modalContent.offsetHeight;

    const left = (window.innerWidth - modalWidth) / 2;
    const top = (window.innerHeight - modalHeight) / 2;

    modalContent.style.position = 'absolute';
    modalContent.style.left = left + 'px';
    modalContent.style.top = top + 'px';
  }

  window.addEventListener('resize', function() {
    if (modal.style.display === 'flex') {
      centerModal();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login-btn");
  const registerButton = document.getElementById("register-btn");

  loginButton.addEventListener("click", function() {
    window.location.href = "../login_user.html";
  });

  registerButton.addEventListener("click", function() {
    window.location.href = "../signup_user.html"; 
  });
});