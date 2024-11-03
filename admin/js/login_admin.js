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
        password_error.innerHTML = "Mật khẩu ít nhất 5 kí tự";
    }
});

function func() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var username_error = document.getElementById('username_error');
    var password_error = document.getElementById('password_error');

    // Xóa thông báo lỗi trước khi kiểm tra
    username_error.innerHTML = "";
    password_error.innerHTML = "";

    if (username == 'nhom7' && password == '1234567') {
        alert("Đăng nhập thành công");
        window.location.assign("admin.html");
    } else {
        if (username !== 'nhom7') {
            username_error.innerHTML = "Sai tên đăng nhập";
        }

        if (password !== '1234567') {
            password_error.innerHTML = "Sai mật khẩu";
        }
    }
}
