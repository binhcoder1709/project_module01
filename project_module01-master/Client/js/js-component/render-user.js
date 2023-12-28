const userLoginData = JSON.parse(localStorage.getItem("userLogin"));

if (!Array.isArray(userLoginData)) {
    // Dữ liệu không phải là mảng

    // Render ra giao diện HTML tùy chỉnh
    const renderUser = `
    <div class="search">
    <button class="search-btn" title="Tìm kiếm"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
    <div class="support">
    <button class="support-btn" title="Trợ giúp"><i class="fa-solid fa-circle-question"></i></button>
    </div>
    <div class="user">
    <img src="${userLoginData.avatar}" alt="">
    <div class="user-dropdown absolute">
        <div class="user-dropdown-info flex items-center">
          <div class="user-dropdown-info-img">
            <img src="${userLoginData.avatar}"/>
          </div>
          <div class="user-dropdown-info-text flex flex-col">
            <span class="text-sm">${userLoginData.userName}</span>
            <span class="text-xs">${userLoginData.email}</span>
          </div>
        </div>
        <div class="user-dropdown-function flex flex-col">
          <a href="/Client/layout/information-user.html">Thông tin cá nhân</a>
          <a href="#">Sách yêu thích</a>
          <a href="#">Sách đã mua</a>
          <a href="/Client/layout/login.html" id="logout-btn">Đăng xuất</a>
        </div>
    </div>
    </div>
    `;

    document.querySelector(".user-link").innerHTML = renderUser;
}
const logout = document.querySelector('#logout-btn').addEventListener('click', (e) =>
{
    localStorage.removeItem("userLogin");
})
