const user_func = document.querySelector('.user-func')
const adminLoginLocal = JSON.parse(localStorage.getItem("userAdminLogin")) || [];
if(!Array.isArray(adminLoginLocal))
{
    const renderAdmin =
    `
    <div class="user parent-dropdown cursor-pointer h-full flex items-center gap-1" id="parent-dropdown">
        <img src="${adminLoginLocal.avatar}" class="rounded-full" alt="">
        <span>${adminLoginLocal.userName}</span>
        <i class="fa-solid fa-chevron-down" id="dropdownBtn"></i>
    </div>
    <div class="func children-dropdown hidden flex flex-col bg-gray-300 absolute" id="children-dropdown">
        <a href="#"><i class="fa-regular fa-user"></i> Thông tin cá nhân</a>
        <a href="#"><i class="fa-solid fa-gear"></i> Đổi mật khẩu</a>
        <a href="#" id="logout"><i class="fa-solid fa-arrow-right-from-bracket"></i> Đăng xuất</a>
    </div>
    `
    user_func.innerHTML = renderAdmin;
}