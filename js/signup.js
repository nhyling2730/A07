var username = document.querySelector('#username');
var address = document.querySelector('#address');
var phone = document.querySelector('#phone');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#password-confirm');
var form = document.querySelector('form');

function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();
        if (!input.value) {
            isEmptyError = true;
            showError(input, `${input.placeholder} không được để trống`);
        } else {
            showSuccess(input);
        }
    });
    return isEmptyError;
}

function showError(input, message) {
    var formControl = input.parentElement;
    formControl.className = 'input-box error';
    var span = formControl.querySelector('span');
    span.innerText = message;
}

function showSuccess(input) {
    var formControl = input.parentElement;
    formControl.className = 'input-box success';
    var span = formControl.querySelector('span');
    span.innerText = '';
}

function checkAddressError(input) {
    const regexAddress = /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u;
    input.value = input.value.trim();
    let isAddressError = !regexAddress.test(input.value);
    if (!isAddressError) {
        showSuccess(input);
    } else {
        showError(input, 'Địa chỉ nhập không hợp lệ!');
    }
    return isAddressError;
}

function checkPhoneError(input) {
    const regexPhone = /^[0-9]{10}$/;
    input.value = input.value.trim();
    let isPhoneError = !regexPhone.test(input.value);
    if (!isPhoneError) {
        showSuccess(input);
    } else {
        showError(input, 'Số điện thoại nhập không hợp lệ');
    }
    return isPhoneError;
}

function checkLengthErrorUsername(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min) {
        showError(input, `Tên đăng nhập phải có ít nhất ${min} ký tự`);
        return true;
    }
    if (input.value.length > max) {
        showError(input, `Tên đăng nhập không được quá ${max} ký tự`);
        return true;
    }
    showSuccess(input);
    return false;
}

function checkLengthErrorPassword(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min) {
        showError(input, `Mật khẩu phải có ít nhất ${min} ký tự`);
        return true;
    }
    if (input.value.length > max) {
        showError(input, `Mật khẩu không được quá ${max} ký tự`);
        return true;
    }
    showSuccess(input);
    return false;
}

function checkMatchPasswordError(password, confirmPassword) {
    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Mật khẩu xác nhận không khớp!');
        return true;
    }
    showSuccess(confirmPassword);
    return false;
}

function saveUserData() {
    var user = {
        username: username.value,
        address: address.value,
        phone: phone.value,
        password: password.value
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username.value, json);
}

document.addEventListener('DOMContentLoaded', function() {
    const modalsuccess = document.querySelector('.modal-highlands');
    modalsuccess.classList.remove('active'); // Đảm bảo modal không hiển thị khi tải trang
}); 

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isMacthError = checkMatchPasswordError(password, confirmPassword);
    let isPasswordLengthError = checkLengthErrorPassword(password, 6, 20);
    let isUserNameLengthError = checkLengthErrorUsername(username, 5, 20);
    let isPhoneError = checkPhoneError(phone);
    let isAddressError = checkAddressError(address);
    let isEmptyError = checkEmptyError([username, address, phone, password, confirmPassword]);

    if (!isUserNameLengthError && !isMacthError && !isPasswordLengthError && !isPhoneError && !isAddressError && !isEmptyError) {
        saveUserData();
        const modalsuccess = document.querySelector('.modal-highlands');
        modalsuccess.classList.add('active'); // Hiển thị modal
    }
});
