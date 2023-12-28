let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
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
// submit form
$('#addProductForm').addEventListener('submit', (e) =>
{
    const isValid = true;
    e.preventDefault();
    if($('#productName').value.trim() == "")
    {
        $('.productNameAlert').innerHTML = "Vui lòng nhập tên sản phẩm";
        isValid = false
    }
    if($('#productImage').value.trim() == "")
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
            categoryId: 
        }
    }
})