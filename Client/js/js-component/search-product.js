let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
const formatMoney = (money) =>
{
    money = money.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    return money;
}
$('#searchProductInput').addEventListener('input', (e) => {
    if(e.target.value != "")
    {
        $('.search-dropdown').style.display = "flex";
    }
    else
    {
        $('.search-dropdown').style.display = "none";

    }
    const searchTerm = e.target.value.toLowerCase();

    const productsLocal = JSON.parse(localStorage.getItem("products")) || [];
    const foundProducts = productsLocal.filter(product => 
        product.productName.toLowerCase().includes(searchTerm)
    );

    RenderProductFinded(foundProducts);
});
// render product finded
function RenderProductFinded(productsArray) {
    const product = (productsArray || []).map((product, index) => {
        return `
        <div class="product hover:bg-gray-200 flex items-center gap-2 w-full" id="productSearch">
        <div class="" style="width: 30%;">
            <img style=" object-fit: cover;" src="${product.productImage}" alt="">
        </div>
        <div class="w-full flex flex-col gap-0">
            <div class="">
                <span class="product-name font-semibold block" style="text-transform: capitalize; width: 210px; text-overflow: ellipsis; text-wrap: nowrap; overflow: hidden;">${product.productName}</span>
            </div>
            <div>
                <span class="text-sm capitalize">${product.author}</span>
            </div>
            <div>
                <span class="text-sm capitalize">${product.categoryName}</span>
            </div>
            <div>
                <span class="text-sm line-through">${product.productSale != 0 ? `${formatMoney(product.productPrice)}` : ""}</span>
                <span class="text-sm">${`${product.productSale}` !=0 ? `${formatMoney(product.productPrice - (product.productPrice * product.productSale) / 100)}` : `${formatMoney(product.productPrice)}`}</span>
            </div>
        </div>
    </div>
        `;
    });

    const renderProduct = product.join("");
    $('.search-dropdown').innerHTML = renderProduct;
}
// link product to detail
const allProductsLocal = JSON.parse(localStorage.getItem("products")) || [];
$$('#productSearch').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Ngăn chặn hành vi liên kết mặc định
    const product = allProductsLocal.find(product => product.productName === link.querySelector('.product-name').textContent);
    localStorage.setItem('selectedProduct', JSON.stringify(product)); // Lưu sản phẩm đã chọn vào localStorage
    window.location.href = `Client/layout/detail.html?id=${product.productId}`; // Chuyển hướng sang detail.html
  });
});