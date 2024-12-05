
function toggleAddressInput() {
    const newAddressFields = document.getElementById("newAddressFields");
    const isDefaultAddress = document.getElementById("defaultAddress").checked;

    if (isDefaultAddress) {
        newAddressFields.style.display = "none";
    } else {
        newAddressFields.style.display = "block";
    }
}
document.getElementById('payment__method').addEventListener('change', function (e) {
    const visaPayment = document.getElementById('visaPayment');
    const cashPayment = document.getElementById('cashPayment');

    if (e.target.id === 'btnradioVisa') {
        visaPayment.classList.remove('hidden');
        cashPayment.classList.add('hidden');
    }

    else if (e.target.id === 'btnradioCash') {
        visaPayment.classList.add('hidden');
        cashPayment.classList.remove('hidden');
    }
});


/* nav mav-menu khi thu nhỏ */
document.querySelector('.toggle').addEventListener('click', function () {
    const navMenu = document.querySelector('.nav-menu');
    const faBars = document.querySelector('.fa-bars');
    const faXmark = document.querySelector('.fa-xmark');

    navMenu.classList.toggle('show');
    this.classList.toggle('active');

    if (this.classList.contains('active')) {
        faBars.style.opacity = '0';
        faXmark.style.opacity = '1';
    } else {
        faBars.style.opacity = '1';
        faXmark.style.opacity = '0';
    }
});

function setActiveMenu(menuItem) {
    document.querySelectorAll('.nav-menu li').forEach(item => {
        item.classList.remove('active');
    });
    menuItem.classList.add('active');
}

document.querySelectorAll('.nav-menu .dropdown > a').forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        const subMenuId = item.nextElementSibling.id;
        toggleSubMenu(subMenuId);
    });
});

document.querySelectorAll('.nav-menu li a').forEach(item => {
    item.addEventListener('click', function () {
        setActiveMenu(item.parentElement);
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const cartQuantityElement = document.getElementById("cartQuantity");

//     const cartQuantity = localStorage.getItem("cart");
//     const count = JSON.parse(cartQuantity).length;

//     cartQuantityElement.textContent = count || 0;
// });

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("defaultAddress").addEventListener("click", () => {
        document.getElementById("defaultAddressFields").style.display = "block";
        document.getElementById("newAddressFields").style.display = "none";
    });

    document.getElementById("newAddress").addEventListener("click", () => {
        document.getElementById("defaultAddressFields").style.display = "none";
        document.getElementById("newAddressFields").style.display = "block";
    });
});

function validateAndShowModal() {
    const paymentOptions = document.querySelectorAll('#payment__method input[type="radio"]');
    let isPaymentSelected = false;

    paymentOptions.forEach(option => {
        if (option.checked) {
            isPaymentSelected = true;
        }
    });

    if (!isPaymentSelected) {
        const modal = document.getElementById("custom-order-modal");
        modal.style.display = "flex";
        return false;
    }

    return true;
}

document.getElementById("custom-close-order-modal").onclick = function () {
    const modal = document.getElementById("custom-order-modal");
    modal.style.display = "none";
};

window.onclick = function (event) {
    const modal = document.getElementById("custom-order-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const paymentMethods = document.querySelectorAll(".payment__method");

    paymentMethods.forEach((method) => {
        const input = method.querySelector("input[type='radio']");
        const detail = method.querySelector("div");

        input.addEventListener("change", () => {
            document.querySelectorAll(".payment__method div").forEach((el) => {
                el.classList.remove("visible");
                el.classList.add("hidden");
            });

            detail.classList.remove("hidden");
            detail.classList.add("visible");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const visaRadio = document.getElementById("btnradioVisa");
    const visaForm = document.getElementById("visaForm");
    const paymentMethodRadios = document.getElementsByName("paymentMethod");

    // Ẩn khung thông tin thẻ lúc ban đầu
    visaForm.style.display = "none";

    // Lắng nghe sự kiện thay đổi của các phương thức thanh toán
    paymentMethodRadios.forEach(radio => {
        radio.addEventListener("change", function () {
            if (visaRadio.checked) {
                visaForm.style.display = "block"; // Hiển thị khung thông tin thẻ
            } else {
                visaForm.style.display = "none"; // Ẩn khung thông tin thẻ
            }
        });
    });
});
