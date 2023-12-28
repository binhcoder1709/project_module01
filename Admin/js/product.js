let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
import uploadFile from "../../Client/firebase/firebase.config.js";
// close form
$('#closeProductForm').addEventListener('click', (e) =>
{
    $('.add-product-form').style.display = "none";
})
// open form
$('#openProductForm').addEventListener('click', (e) =>
{
    $('.add-product-form').style.display = "flex";
})
// render category in select of product form
const categoriesLocal = JSON.parse(localStorage.getItem("category")) || [];
const categoryOptions = categoriesLocal.map((category, index) =>
{
    return `
        <option id="categoryOption" value="${category.categoryId}">${category.categoryName}</option>
    `;
})
const renderCategoryOption = categoryOptions.join("");
$('#categorySelect').innerHTML = renderCategoryOption;
$('#productFile').addEventListener('change', async (e) =>
{
    const imageUrl = await uploadFile(e.target);
    // gan link hinh anh tu firebase vafo trong the img
    $('#image').src = imageUrl;
})
// submit form
$('#addProductForm').addEventListener('submit', async (e) =>
{
    let isValid = true;
    e.preventDefault();
    var imageUrl = await uploadFile(file);
    console.log(imageUrl);
    const categorySelect = $("#categorySelect");
    const selectedCategory = categorySelect.options[categorySelect.selectedIndex];
    const categoryName = selectedCategory.text;
    if($('#productName').value.trim() == "")
    {
        $('.productNameAlert').innerHTML = "Vui lòng nhập tên sản phẩm";
        isValid = false
    }
    if($('#productImage').value == "")
    {
        $('.productImageAlert').innerHTML = "Vui lòng thêm hình ảnh sản phẩm";
        isValid = false
    }
    if($('#productPrice').value.trim() == "")
    {
        $('.productPriceAlert').innerHTML = "Vui lòng nhập giá sản phẩm";
        isValid = false
    }
    if($('#productQuantity').value.trim() == "")
    {
        $('.productQuantityAlert').innerHTML = "Vui lòng nhập số lượng sản phẩm";
        isValid = false
    }
    if($('#productSale').value > 100)
    {
        $('.productSaleAlert').innerHTML = "Vui lòng nhập đúng giá trị giảm giá";
        isValid = false
    }
    if(isValid)
    {
        const product =
        {
            categoryId: $("#categorySelect").value,
            categoryName: categoryName,
            productId: uuidv4(),
            productName: $('#productName').value,
            productImage: "https://firebasestorage.googleapis.com/v0/b/upload-image-6a605.appspot.com/o/avatar-trang-4.jpg?alt=media&token=3cf10705-b5c6-4968-8121-a28cb8816914",
            productPrice: $('#productPrice').value,
            productQuantity: $('#productQuantity').value,
            productSale: $('#productSale').value
        }
        const productLocal = JSON.parse(localStorage.getItem("products")) || [];
        productLocal.push(product);
        localStorage.setItem("products", JSON.stringify(productLocal));
    }
})