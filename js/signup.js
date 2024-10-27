const form = document.getElementById('form');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
//const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordconfirm = document.getElementById('password-confirm');


const username_error = document.getElementById('username_error'); 
const address_error = document.getElementById('address_error');
const phone_error = document.getElementById('phone_error');
//const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');
const passwordconfirm_error = document.getElementById('password-confirm_error');

form.addEventListener('submit', function(e) {

    //var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

    if(username.value === '' || username.value == null){
        e.preventDefault(); 
        username_error.innerHTML = "Tên đăng nhập không được để trống";
    }

    if(address.value === '' || address.value == null){
        e.preventDefault(); 
        address_error.innerHTML = "Địa chỉ không được để trống";
    }

    /*if(email.value === '' || email.value == null){
        e.preventDefault();
        email_error.innerHTML = "Email không được để trống";
    } else if(!email.value.match(email_check)){
        e.preventDefault();
        email_error.innerHTML = "Email không hợp lệ";
    }*/
    
    var phone_check = /^[0-9]{10}$/;


    if(phone.value === '' || phone.value == null){
            e.preventDefault(); 
            phone_error.innerHTML = "Số điện thoại không được để trống";
    }

    if(!phone.value.match(phone_check)){
        e.preventDefault();
        phone_error.innerHTML = "Số điện thoại tối đa 10 số";
    }
    
    if(password.value === '' || password.value == null){
        e.preventDefault(); 
        password_error.innerHTML = "không được để trống";
    }else if(password.value.length <= 5 ){
        e.preventDefault(); 
        password_error.innerHTML = "Mật khẩu ít nhất 6 kí tự";
    }

    if(passwordconfirm.value ==='' || passwordconfirm.value == null){
        e.preventDefault();
        passwordconfirm_error.innerHTML ="không được để trống";
    }
    if(passwordconfirm.value !== password.value){
        passwordconfirm_error.innerHTML=" Xác nhận mật khẩu không khớp";
    }

});
