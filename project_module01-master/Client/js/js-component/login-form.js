let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
const loginEmailInputField = $('#loginEmail').addEventListener('input', (e) =>
{
    if(e.target.value == "")
    {
        $('.loginEmailAlert').innerHTML = "Vui lòng nhập email";
    }
    else
    {
        $('.loginEmailAlert').innerHTML = "";
    }
})
const loginPasswordInputField = $('#loginPassword').addEventListener('input', (e) =>
{
    if(e.target.value == "")
    {
        $('.loginPasswordAlert').innerHTML = "Vui lòng nhập mật khẩu";
    }
    else
    {
        $('.loginPasswordAlert').innerHTML = "";
    }
})
const login_form_submit = $('#loginForm').addEventListener('submit', (e) =>
{
    isValid = true;
    isAdmin = true;
    e.preventDefault();
    const localData = JSON.parse(localStorage.getItem("users")) || [];
    const userAuthentication = localData.find(user => user.email === $('#loginEmail').value && user.password === $('#loginPassword').value);
    if(!userAuthentication)
    {
        $('.loginFormAlert').innerHTML = "Email hoặc mật khẩu không đúng";
        isValid = false;
        isAdmin = false;
    }
    else
    {
        isValid = true;
        isAdmin = false;
    }
    const userAdminData = JSON.parse(localStorage.getItem("usersAdmin")) || [];
    const userAdminAuthentication = userAdminData.find(user => user.email === $('#loginEmail').value && user.password === $('#loginPassword').value);
    if(!userAdminAuthentication)
    {
        $('.loginFormAlert').innerHTML = "Email hoặc mật khẩu không đúng";
        isAdmin = false
    }
    else
    {
        isAdmin = true;
        isValid = false;
    }
    if(isValid && !isAdmin)
    {
        localStorage.setItem("userLogin", JSON.stringify(userAuthentication));
        window.location.href = "../index.html";
    }
    if(isAdmin)
    {
        localStorage.setItem("userAdminLogin", JSON.stringify(userAdminAuthentication));
        // window.location.href = "";
        alert("trang admin");
    }
})