
// let btnRegister = document.getElementById('register')
// // thuc hien nhung lenh trong btnRegister
// btnRegister.onclick = function(){
//     let usernameInput = document.getElementById('name')
//     let passwordInput = document.getElementById('password')
//     let emailInput = document.getElementById('email')

//     let username = usernameInput.value
//     let password = passwordInput.value
//     let email = emailInput.value
//     // object luu tru
//     let user = {
//         username: username,
//         email: email,
//         password: password
//     }

//     if(username === "", email === "", password === ""){
//         alert("Vui lòng điền đầy đủ thông tin!")
//     }
//     else if(password.length < 8){
//         alert("Mật khẩu phải có ít nhất 8 kí tự!")
//     }
//     else if(btnRegister.onclick){
//         alert("Đã đăng ký thành công!")
//     }

//     //     //  B1: Lấy danh sách user từ localStorage
//     // let users = JSON.parse(localStorage.getItem("user")) || [];

//     // //  B2: Kiểm tra email đã tồn tại chưa
//     // const isExist = users.some(user => user.email === email);

//     // if (isExist) {
//     //     message.innerText = "Tài khoản đã tồn tại!";
//     //     message.style.color = "red";
//     //     return;
//     // }

//     // //  B3: Tạo user mới
//     // const newUser = {
//     //     username: username,
//     //     email: email
//     // };

//     // //  B4: Thêm vào mảng
//     // users.push(newUser);


//     console.log(user)
//     // object = chuoi ,,,, json.stringify doi thanh chuoi
//     // localStorage.setItem('register_information', JSON.stringify(users))
//     localStorage.setItem('register_information', JSON.stringify(user))
// }



// let btnRegister = document.getElementById('register');

// btnRegister.onclick = function () {
//     let username = document.getElementById('name').value;
//     let password = document.getElementById('password').value;
//     let email = document.getElementById('email').value;

//     //  B1: Validate rỗng
//     if (username === "" || email === "" || password === "") {
//         alert("Vui lòng điền đầy đủ thông tin!");
//         return;
//     }

//     //  B2: Validate password
//     if (password.length < 8) {
//         alert("Mật khẩu phải có ít nhất 8 kí tự!");
//         return;
//     }

//     //  B3: Lấy danh sách users từ localStorage
//     let users = JSON.parse(localStorage.getItem("users")) || [];

//     //  B4: Check email đã tồn tại chưa
//     let isExist = users.some(user => user.email === email);

//     if (isExist) {
//         alert("Tài khoản đã tồn tại!");
//         window.location.href="./login.html"
//         return;
//     }

//     //  B5: Tạo user mới
//     let newUser = {
//         username: username,
//         email: email,
//         password: password
//     };

//     //  B6: Thêm vào mảng
//     users.push(newUser);

//     //  B7: Lưu lại localStorage
//     localStorage.setItem("users", JSON.stringify(users));

//     //  B8: Thông báo thành công
//     alert("Đăng ký thành công!");
//     document.querySelector("form").reset();
//     window.location.href ="./login.html"
// };


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