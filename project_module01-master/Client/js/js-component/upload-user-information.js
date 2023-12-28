let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
import uploadFile from "../../firebase/firebase.config.js"
const userLoginData = JSON.parse(localStorage.getItem("userLogin"));
if(!Array.isArray(userLoginData))
{
    const renderUser =
    `        <form id="form">
    <h2>Thông tin tài khoản</h2>
    <div class="mb-3 user-image">
        <img src="${userLoginData.avatar}" id="image" alt="">
        <input type="file" id="file">
      </div>
    <div class="mb-3">
        <label for="userName" class="form-label">Tên người dùng</label>
        <input type="text" class="form-control" id="userName" value="${userLoginData.userName}">
      </div>
    <div class="mb-3">
      <label for="userEmail" class="form-label">Email</label>
      <input type="email" class="form-control" disabled id="userEmail" value="${userLoginData.email}">
    </div>
    <div class="mb-3">
      <label for="userPassword" class="form-label">Mật khẩu</label>
      <input type="password" class="form-control" id="userPassword">
    </div>
    <button type="submit" class="btn btn-primary">Lưu</button>
  </form>`;
  document.querySelector(".information-form").innerHTML = renderUser;
}

// lang nghe su kien change 
file.addEventListener('change', async (e) =>
{
    const imageUrl = await uploadFile(e.target);
    // gan link hinh anh tu firebase vafo trong the img
    image.src = imageUrl;
})
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userLoginData = JSON.parse(localStorage.getItem("userLogin"));
    if (file.files.length > 0) {
        var imageUrl = await uploadFile(file);
    } else {
        // Sử dụng lại ảnh cũ nếu không có file mới được chọn
        var imageUrl = userLoginData.avatar;
    }
    const usersData = JSON.parse(localStorage.getItem("users")) || [];
    const newUserLogin =
    {
        ...userLoginData,
        avatar: `${imageUrl}`,
        userName: $('#userName').value
    }
    localStorage.setItem("userLogin", JSON.stringify(newUserLogin));
    const findToSave = usersData.find(user => user.email === userLoginData.email);
    if(findToSave)
    {
        const indexUsers = usersData.indexOf(findToSave);
        usersData[indexUsers] = newUserLogin;
        localStorage.setItem("users", JSON.stringify(usersData));
    }
    location.reload();
} )