let btnLogin = document.getElementById('login')
// thuc hien nhung lenh trong btnRegister
btnLogin.onclick = function(){
    let emailInput = document.getElementById('email')
    let passwordInput = document.getElementById('password')

    let email = emailInput.value
    let password = passwordInput.value

    let EmailError = document.getElementById('EmailError');
    let passwordError = document.getElementById('passwordError');

    //  reset lỗi trước
    EmailError.innerText = "";
    passwordError.innerText = "";

    let isValid = true


    if(email === ""){
        EmailError.innerText = "Vui lòng nhập email!";
        isValid = false;
    }
    else if(password === ""){
        alert('Vui lòng nhập mật khẩu')
    }
    else if(email != userObject.email){
        alert('Sai email. Vui lòng nhập lại!')
    }
    else if(password != userObject.password){
        alert('Sai mật khẩu. Vui lòng nhập lại!')
    }
    else{
        window.location.href="./home.html"
    }
}

    if (!isValid) return;
    
    let user = localStorage.getItem('register_information')
    // JSON.parse: string -> object
    let userObject = JSON.parse(user)