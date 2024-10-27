document.addEventListener('DOMContentLoaded', function(){
    const passwordInput = document.querySelector('.input-box input[type="password"]');
    const eyeIcon = document.querySelector('.fa-eye');
    const eyeSlashIcon = document.querySelector('.fa-eye-slash');

    eyeIcon.addEventListener('click', function(){
        if(passwordInput.type ==='password'){
            passwordInput.type = 'text';
            eyeIcon.style.display = 'none';
            eyeSlashIcon.style.display = 'inline'; 
        }
    });

    eyeSlashIcon.addEventListener('click', function() {
        if(passwordInput.type === 'text'){
            passwordInput.type = 'password';
            eyeSlashIcon.style.display = 'none';
            eyeIcon.style.display = 'inline';
        }
    })
})