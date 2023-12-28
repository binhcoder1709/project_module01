import { formatDate } from "../../Client/utils/common.js";
let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
function resetCategoryForm()
{
    $('#categoryName').value = "";
    $('.categoryFormAlert').innerHTML = "";
}
function renderCategory()
{
    const categoryLocal = JSON.parse(localStorage.getItem("category")) || [];
    const tableCategories = categoryLocal.map((categories, index) =>
    {
        return `
        <tr>
            <td>${index + 1}</td>
            <td>${categories.categoryName}</td>
            <td>${categories.createdDate}</td>
            <td>    <button type="button">Sửa</button>
            <button type="button">Xoá</button></td>
        </tr>
        `
    })
    const tableCategoriesRender = tableCategories.join("");
    $('#tbody').innerHTML = tableCategoriesRender;
}
renderCategory();
function closeForm()
{
    $('#categoryForm-bg').style.display = "none";
}
$('#closeCategoryForm').addEventListener('click', ()=>
{
    $('#categoryForm-bg').style.display = "none";
    resetCategoryForm();
})
$('#openCategoryForm').addEventListener('click', ()=>
{
    $('#categoryForm-bg').style.display = "block";
})
$('#addCategoryForm').addEventListener('submit', (e) =>
{
    e.preventDefault();
    let isValid = true;
    const categoryLocal = JSON.parse(localStorage.getItem("category")) || [];
    if($('#categoryName').value.trim() == "")
    {
        $('.categoryFormAlert').innerHTML = "Vui lòng nhập tên danh mục";
        isValid = false
    }
    const categoryExist = categoryLocal.find(category => category.categoryName === $('#categoryName').value)
    if(categoryExist)
    {
        $('.categoryFormAlert').innerHTML = "Tên danh mục đã tồn tại";
        isValid = false
    }
    if(isValid)
    {
        const category =
        {
            categoryId: uuidv4(),
            categoryName: $('#categoryName').value,
            productsOfCategory: "",
            createdDate: formatDate()
        }
        categoryLocal.push(category);
        localStorage.setItem("category", JSON.stringify(categoryLocal));
        resetCategoryForm();
        closeForm();
        renderCategory();
    }
})
