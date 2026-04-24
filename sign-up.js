let btnRegister = document.getElementById('register');

btnRegister.onclick = function () {
    let username = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');

    //  reset lỗi trước
    nameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";

    let isValid = true;

    //  Check name
    if (username === "") {
        nameError.innerText = "Vui lòng nhập tên!";
        isValid = false;
    }

    //  Check email
    if (email === "") {
        emailError.innerText = "Vui lòng nhập email!";
        isValid = false;
    }

    //  Check password
    if (password === "") {
        passwordError.innerText = "Vui lòng nhập mật khẩu!";
        isValid = false;
    } else if (password.length < 8) {
        passwordError.innerText = "Mật khẩu phải ≥ 8 ký tự!";
        isValid = false;
    }

    //  Nếu có lỗi → dừng
    if (!isValid) return;

    //  localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let isExist = users.some(user => user.email === email);

    if (isExist) {
        emailError.innerText = "Email đã tồn tại!";
        window.location.href="./login.html"
        return;
    }

    let newUser = {
        username,
        email,
        password
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");
    document.querySelector("form").reset();
};