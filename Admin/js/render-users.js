let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let tbody = document.getElementById('tbody');
const usersLocal = JSON.parse(localStorage.getItem("users")) || [];
function RenderUserTable()
{
    const tableUsers = usersLocal.map((user, index) => {
        return `
        <tr>
            <td>${index + 1}</td>
            <td>${user.userName}</td>
            <td class="flex justify-center border-none"><img src="${user.avatar}" class="rounded-full w-10 h-10 object-cover"/></td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.status === 1 ? "Đang hoạt động" : "Ngừng hoạt động"} </td>
            <td><button id="lockUserBtn" onclick="lockUser('${user.userId}')">${user.status === 1 ? `<i class="fa-solid fa-lock"></i>` : `<i class="fa-solid fa-lock-open"></i>`}</button></td>
        </tr>
        `;
    });
    
    const tableUsersRender = tableUsers.join("");
    tbody.innerHTML = tableUsersRender;
    
}
RenderUserTable();
// lockuser handle
function lockUser(status) {
    // search user id in database
    const findUser = usersLocal.find(user => user.userId === status);
    if(findUser.status === 1)
    {
        const newChangeUser =
        {
            ...findUser,
            status: 0
        }
        if(findUser)
        {
            const indexUsers = usersLocal.indexOf(findUser);
            usersLocal[indexUsers] = newChangeUser;
            localStorage.setItem("users", JSON.stringify(usersLocal));
        }
        RenderUserTable();
    }
    else
    {
        const newChangeUser =
        {
            ...findUser,
            status: 1
        }
        if(findUser)
        {
            const indexUsers = usersLocal.indexOf(findUser);
            usersLocal[indexUsers] = newChangeUser;
            localStorage.setItem("users", JSON.stringify(usersLocal));
        }
        RenderUserTable();
    }
}
