const box_container = document.querySelector('.box-container');
const form_select = document.querySelector('.form-select');
const allProductsLocal = JSON.parse(localStorage.getItem("products")) || [];
const categoriesLocal = JSON.parse(localStorage.getItem("category")) || [];
// function format money
const formatMoney = (money) =>
{
    money = money.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    return money;
}
// render all product
const allProducts = allProductsLocal.map((allProducts) =>
{
    return `
    <a href="" class="box-link">
    <div class="box-image">
        <img src="${allProducts.productImage}" alt="">
    </div>
    <div class="box-name">
        <p title="${allProducts.productName}">${allProducts.productName}</p>
    </div>
    <div class="box-type">
        <span>${allProducts.categoryName}</span>
    </div>
    <div class="box-rate-price">
        <span class="rate">${allProducts.productRate}<i class="fa-solid fa-star"></i></span>
        <span class="old-price">${allProducts.productSale != 0 ? `${formatMoney(allProducts.productPrice)}` : ""}</span>
        <span class="new-price current-price">${`${allProducts.productSale}` !=0 ? `${formatMoney(allProducts.productPrice - (allProducts.productPrice * allProducts.productSale) / 100)}` : `${formatMoney(allProducts.productPrice)}`}</span>
    </div>
</a>
    `
})
const renderAllProducts = allProducts.join("");
box_container.innerHTML = renderAllProducts;
// render select filter in book page
const categorySelect = categoriesLocal.map((options) =>
{
    return `
        <option value="${options.categoryId}">${options.categoryName}</option>
    `
})
const renderCategorySelect = categorySelect.join("");
form_select.innerHTML = renderCategorySelect;
// filter select
form_select.addEventListener('change', (e) =>
{
    const filterProducts = allProductsLocal.filter(filter => filter.categoryId === e.target.value);
    const afterFilter = filterProducts.map((products) =>
    {
        return `
        <a href="" class="box-link">
        <div class="box-image">
            <img src="${products.productImage}" alt="">
        </div>
        <div class="box-name">
            <p title="${products.productName}">${products.productName}</p>
        </div>
        <div class="box-type">
            <span>${products.categoryName}</span>
        </div>
        <div class="box-rate-price">
            <span class="rate">${products.productRate}<i class="fa-solid fa-star"></i></span>
            <span class="old-price">${`${products.productSale}` != 0 ? `${products.productPrice}` : ""}</span>
            <span class="new-price current-price">${`${products.productSale}` !=0 ? `${products.productPrice - (products.productPrice * products.productSale) / 100}` : `${products.productPrice}`}</span>
        </div>
    </a>
        `
    })
    const renderAfterFilter = afterFilter.join("");
    box_container.innerHTML = renderAfterFilter;
    
})
const box_links = document.querySelectorAll('.box-link');
box_links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Ngăn chặn hành vi liên kết mặc định
    const product = allProductsLocal.find(product => product.productName === link.querySelector('.box-name p').textContent);
    localStorage.setItem('selectedProduct', JSON.stringify(product)); // Lưu sản phẩm đã chọn vào localStorage
    window.location.href = `./detail.html?id=${product.productId}`; // Chuyển hướng sang detail.html
  });
});

