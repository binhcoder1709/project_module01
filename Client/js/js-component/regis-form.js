let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
import { formatDate } from "../../utils/common.js";
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
const regisEmailInputField = $('#regisEmail').addEventListener('input', (e) =>
{
    
    if(e.target.value == "")
    {
        $('.regisEmailAlert').innerHTML = "Vui lòng nhập email";
    }
    else
    {
        $('.regisEmailAlert').innerHTML = "";
    }
})
const regisPasswordInputField = $('#regisPassword').addEventListener('input', (e) =>
{
    if(e.target.value == "")
    {
        $('.regisPasswordAlert').innerHTML = "Vui lòng nhập mật khẩu";
    }
    else
    {
        $('.regisPasswordAlert').innerHTML = "";
    }
})
const regisConfirmPasswordInputField = $('#regisConfirmPassword').addEventListener('input', (e) =>
{
    if(e.target.value == "")
    {
        $('.regisConfirmPasswordAlert').innerHTML = "Vui lòng nhập lại mật khẩu";
    }
    else
    {
        $('.regisConfirmPasswordAlert').innerHTML = "";
    }
})
const regis_submit_validate = $('#regis-form').addEventListener('submit', (e) =>
{
    e.preventDefault();
    var isValid = true;
    var isAdmin = true;
    const emailInputData = $('#regisEmail').value.trim();
    if($('#regisEmail').value.trim() === "")
    {
        $('.regisEmailAlert').innerHTML = "Vui lòng nhập email";
        isValid = false
    }
    const dataLocal = JSON.parse(localStorage.getItem("users")) || [];
    const emailExist = dataLocal.find(user => user.email === $('#regisEmail').value);
    if(!validateEmail(emailInputData))
    {
        $('.regisEmailAlert').innerHTML = "Vui lòng nhập đúng định dạng email";
        isValid = false
    }
    if(emailExist)
    {
        $('.regisEmailAlert').innerHTML = "Email đã tồn tại";
        isValid = false
    }
    const passwordInputData = $('#regisPassword').value.trim();
    if($('#regisPassword').value.trim() === "")
    {
        $('.regisPasswordAlert').innerHTML = "Vui lòng nhập mật khẩu";
        isValid = false
    }
    if(passwordInputData.length < 8)
    {
        $('.regisPasswordAlert').innerHTML = "Mật khẩu tối thiểu 8 ký tự";
        isValid = false
    }
    if($('#regisConfirmPassword').value.trim() === "")
    {
        $('.regisConfirmPasswordAlert').innerHTML = "Vui lòng nhập lại mật khẩu";
        isValid = false
    }
    if($('#regisPassword').value != $('#regisConfirmPassword').value)
    {
        $('.regisConfirmPasswordAlert').innerHTML = "Mật khẩu không trùng khớp";
        isValid = false
    }
    if($('#adminKey').value.trim() != "")
    {
        if($('#adminKey').value != "key8888")
        {
            $('.regisAdminKeyAlert').innerHTML = "AdminKey không hợp lệ!";
            isAdmin = false
            isValid = false
        }
        else
        {
            isAdmin = true
            isValid = true
        }
    }
    else
    {
        isAdmin = false
    }
    if(isValid && !isAdmin)
    {
        const user =
        {
            userId: uuidv4(),
            userName: Math.random(),
            avatar: "https://firebasestorage.googleapis.com/v0/b/upload-image-6a605.appspot.com/o/avatar-trang-4.jpg?alt=media&token=3cf10705-b5c6-4968-8121-a28cb8816914",
            email: $('#regisEmail').value,
            password: $('#regisPassword').value,
            status: 1,
            wishList: [],
            createdDate: formatDate()
        }
        const userLocal = JSON.parse(localStorage.getItem("users")) || [];
        userLocal.push(user);
        localStorage.setItem("users", JSON.stringify(userLocal));
        window.location.href = "./login.html";
    }
    if(isValid && isAdmin)
    {
        const userAdmin =
        {
            userAdminId: uuidv4(),
            avatar: "https://firebasestorage.googleapis.com/v0/b/upload-image-6a605.appspot.com/o/avatar-trang-4.jpg?alt=media&token=3cf10705-b5c6-4968-8121-a28cb8816914",
            userName: Math.random(),
            email: $('#regisEmail').value,
            password: $('#regisPassword').value,
            createdDate: formatDate()
        }
        const userAdminlocal = JSON.parse(localStorage.getItem("usersAdmin")) || [];
        userAdminlocal.push(userAdmin);
        localStorage.setItem("usersAdmin", JSON.stringify(userAdminlocal));
        window.location.href = "./login.html";
    }
})