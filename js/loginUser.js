const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('form');

const username_error = document.getElementById('username_error');
const password_error = document.getElementById('password_error');

form.addEventListener('submit', function(e) {
    if(username.value === '' || username.value == null){
        e.preventDefault();
        username_error.innerHTML = "Tên đăng nhập không được để trống";
    }

    if(password.value === '' || password.value == null){
        e.preventDefault();
        password_error.innerHTML = "Mật khẩu không được để trống";
    }else if(password.value.length <= 5 ){
        e.preventDefault(); 
        password_error.innerHTML = "Mật khẩu ít nhất 6 kí tự";
    }
});

