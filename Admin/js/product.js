let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
import { formatDate } from "../../Client/utils/common.js";
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
function closeForm()
{
    $('.add-product-form').style.display = "none";
}
// reset product form
function Resetform()
{
    $('#productName').value = "";
    $('#productFile').value= "";
    $('#author').value= "";
    $('#productPrice').value= "";
    $('#productPages').value= "";
    $('#productQuantity').value= "";
    $('#productContent').value= "";
    $('#productSale').value= "";
    $('#image').src = "";
}
// regex input number
function formatNumberInput()
{
    hash = window.location.hash.substr(1);
    var reg = new RegExp('^[0-9]$');
    return reg.test(hash);
}
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
// upload image onchange
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
    var imageUrl = await uploadFile($('#productFile')); // upload file image
    const categorySelect = $("#categorySelect");
    const selectedCategory = categorySelect.options[categorySelect.selectedIndex];
    const categoryName = selectedCategory.text;
    if($('#productName').value.trim() == "")
    {
        $('.productNameAlert').innerHTML = "Vui lòng nhập tên sản phẩm";
        isValid = false
    }
    if($('#productFile').value == "")
    {
        $('.productImageAlert').innerHTML = "Vui lòng thêm hình ảnh sản phẩm";
        isValid = false
    }
    if($('#author').value.trim() == "")
    {
        $('.authorAlert').innerHTML = "Vui lòng nhập tên tác giả";
        isValid = false
    }
    if($('#productPrice').value.trim() == "")
    {
        $('.productPriceAlert').innerHTML = "Vui lòng nhập giá sản phẩm";
        isValid = false
    }
    if($('#productPages').value.trim() == "")
    {
        $('.productPagesAlert').innerHTML = "Vui lòng nhập số trang";
        isValid = false
    }
    if($('#productQuantity').value.trim() == "")
    {
        $('.productQuantityAlert').innerHTML = "Vui lòng nhập số lượng sản phẩm";
        isValid = false
    }
    if($('#productContent').value.trim() == "")
    {
        $('.productContentAlert').innerHTML = "Vui lòng nhập nội dung sản phẩm";
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
            productImage: imageUrl,
            productPages: +$('#productPages').value,
            author: $('#author').value,
            productPrice: +$('#productPrice').value,
            productQuantity: +$('#productQuantity').value,
            productSale: +$('#productSale').value,
            productRate: 5,
            productContent: $('#productContent').value,
            createdDate: formatDate()
        }
        const productLocal = JSON.parse(localStorage.getItem("products")) || [];
        productLocal.push(product);
        localStorage.setItem("products", JSON.stringify(productLocal));
        Resetform();
        closeForm();
        RenderProduct();
    }
})
// After RenderProduct and RenderProductFinded functions

// render table product
function RenderProduct()
{
    const productLocal = JSON.parse(localStorage.getItem("products")) || [];
    const productTable = productLocal.map((product, index) =>
    {
        return `
        <tr>
        <td>${index + 1}</td>
        <td>${product.productName}</td>
        <td class="flex justify-center"><img class="product-image-table" src="${product.productImage}"/></td>
        <td>${product.author}</td>
        <td>${product.categoryName}</td>
        <td>${product.productPages}</td>
        <td>${product.productPrice}</td>
        <td>${product.productQuantity}</td>
        <td>${product.productSale}</td>
        <td><button type="button">Sửa</button>
        <button type="button" class="delete-product-btn" onclick="deleteProductBtn(${index})">Xoá</button></td>
        </tr>
        `
    })
    const renderProduct = productTable.join("");
    $('#tbody').innerHTML = renderProduct;
}
RenderProduct();
// delete click event
$$('.delete-product-btn').forEach(btn => {
    btn.addEventListener('click', deleteProduct);
});
// delete product btn
function deleteProduct(e) {
    const rowIndex = e.target.closest('tr').rowIndex - 1;
    const productsLocal = JSON.parse(localStorage.getItem("products")) || [];

    // Confirmation (optional):
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
        productsLocal.splice(rowIndex, 1);
        localStorage.setItem("products", JSON.stringify(productsLocal));
        // rerender products table after delete products
        const productTable = document.querySelector('#tbody');
        const productRow = productTable.querySelector(`tr:nth-child(${rowIndex + 1})`);
        productRow.remove();
    }
}

// find products
$('#findProducts').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    const productsLocal = JSON.parse(localStorage.getItem("products")) || [];
    const foundProducts = productsLocal.filter(product => 
        product.productName.toLowerCase().includes(searchTerm)
    );

    // Hiển thị danh sách sản phẩm tìm kiếm
    RenderProductFinded(foundProducts);
});
// render product finded
function RenderProductFinded(productsArray) {
    const productTable = (productsArray || []).map((product, index) => {
        return `
        <tr>
            <td>${index + 1}</td>
            <td>${product.productName}</td>
            <td class="flex justify-center"><img class="product-image-table" src="${product.productImage}"/></td>
            <td>${product.author}</td>
            <td>${product.categoryName}</td>
            <td>${product.productPages}</td>
            <td>${product.productPrice}</td>
            <td>${product.productQuantity}</td>
            <td>${product.productSale}</td>
            <td>
                <button type="button">Sửa</button>
                <button type="button" onclick="deleteProductBtn(${index})">Xoá</button>
            </td>
        </tr>
        `;
    });

    const renderProduct = productTable.join("");
    $('#tbody').innerHTML = renderProduct;
}
