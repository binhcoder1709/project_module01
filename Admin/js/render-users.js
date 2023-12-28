let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let tbody = document.getElementById('tbody');
const usersLocal = JSON.parse(localStorage.getItem("users")) || [];
const tableUsers = usersLocal.map((user, index) => {
    return `
    <tr>
        <td>${index + 1}</td>
        <td>${user.userName}</td>
        <td class="flex justify-center border-none"><img src="${user.avatar}" class="rounded-full w-10 h-10 object-cover"/></td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>${user.status === 1 ? "Đang hoạt động" : "Ngừng hoạt động"} </td>
        <td><button id="lockUserBtn" onclick="lockUser('${user.userId}')"><i class="fa-solid fa-lock"></i></button></td>
    </tr>
    `;
});

const tableUsersRender = tableUsers.join("");
tbody.innerHTML = tableUsersRender;

// Thêm hàm xử lý khi nhấn nút "lockUserBtn"
function lockUser(status) {
    console.log(`Đã nhấn nút lock cho user: ${status}`);
    // Thực hiện các thao tác khác nếu cần
}
