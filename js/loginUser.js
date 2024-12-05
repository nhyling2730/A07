var username =  document.querySelector('#username');
var password =  document.querySelector('#password');
var form =  document.querySelector('form');

function showError(input, message){
    var formControl = input.parentElement
    formControl.className = 'input-box error'
    var span = formControl.querySelector('span')
    span.innerText = message
}

function showSuccess(input){
    var formControl = input.parentElement
    formControl.className = 'input-box success'
    var span = formControl.querySelector('span')
    span.innerText = ''
}

function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()
        if(!input.value){
            isEmptyError = true;
            showError(input, `${input.placeholder} không được để trống`)
        }
    });
    return isEmptyError;
}

function checkLengthErrorUsername (input, min, max){
    input.value = input.value.trim();
    if(input.value.length < min){
        showError(input, `Tên đăng nhập phải ít nhất ${min} ký tự`);
        return true;
    }
    if(input.value.length > max){
        showError(input, `Tên đăng nhập không được quá ${max} ký tự`);
        return true;
    }
    showSuccess(input);
    return false;
}

function checkLengthErrorPassword(input, min, max){
    input.value = input.value.trim();
    if(input.value.length < min){
        showError(input, `Mật khẩu phải có ít nhất ${min} ký tự`);
        return true;
    }
    if(input.value.length > max){
        showError(input, `Mật khẩu phải có tối đa ${max} ký tự`);
    }
    showSuccess(input);
    return false;
}

    function CheckUserData(){
        var usernameValue = username.value;
        var passwordValue = password.value;
    
        // Lấy dữ liệu từ localStorage
        var storedUser = JSON.parse(localStorage.getItem(usernameValue));

        console.log("Username:", usernameValue, "Password:", passwordValue);
        console.log("Stored User:", storedUser);

    
        if(!storedUser){
            const modalNoExist = document.querySelector('.modalNoExist');
            modalNoExist.classList.add('activeNoExist'); // Hiện modal không tồn tại
        } else if(usernameValue != storedUser.username || passwordValue != storedUser.password){
            const modalfail = document.querySelector('.modalFail');
            modalfail.classList.add('activefail'); // Hiện modal lỗi đăng nhập
        } else {
            const modalsuccess = document.querySelector('.modalSuccess');
            modalsuccess.classList.add('active'); // Hiện modal thành công
        }
    }

const login = document.querySelector('.form')
login.addEventListener('submit', function(e){
    let isPasswordLengthError = checkLengthErrorPassword(password, 6, 20);
    let isUserNameLengthError = checkLengthErrorUsername(username, 5, 20);
    let isEmptyError = checkEmptyError([username, password]);
    e.preventDefault();
    if( !isEmptyError && !isPasswordLengthError && !isUserNameLengthError){
        CheckUserData();
    }
})