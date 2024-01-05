const productSelected = JSON.parse(localStorage.getItem("selectedProduct"));
const userLoginLocal = JSON.parse(localStorage.getItem("userLogin"));
const usersLocal = JSON.parse(localStorage.getItem("users")) || [];
const findToSave = usersLocal.find(user => user.userId === userLoginLocal.userId)
// format money
const formatMoney = (money) =>
{
    money = money.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    return money;
}
function RenderDetail ()
{
    if(!Array.isArray(productSelected))
{
    const productDetail =`
    <div class="detail-book">
    <div class="detail-text">
        <div class="detail-name">
            <h1 class="capitalize">${productSelected.productName}</h1>
        </div>
        <div class="detail-artist">
            <a href="#">${productSelected.author}</a>
        </div>
        <div class="rate-type-pages">
            <div class="detail-rate">
                <span class="rate-star">${productSelected.productRate}<i class="fa-solid fa-star"></i></span>
                <span class="number-of-rate">31 bài đánh giá</span>
            </div>
            <div class="detail-type-book">
                <span class="type-book-logo"><i class="fa-solid fa-book"></i></span>
                <span class="type-of-book capitalize">${productSelected.categoryName}</span>
            </div>
            <div class="detail-book-pages">
                <span class="pages">${productSelected.productPages}</span>
                <span style="font-size: x-small;color: gray;">Trang</span>
            </div>
        </div>
        <div class="detail-get-book-method">
            <button type="button" class="buy-book-btn">${`${productSelected.productSale}` != 0 ? `<span class="line-through">${formatMoney(productSelected.productPrice)}</span>Mua sách với giá ${formatMoney(productSelected.productPrice - (productSelected.productPrice * productSelected.productSale)/100)}` : `Sách điện tử giá ${formatMoney(productSelected.productPrice)}`}</button>
            <button type="button" class="rent-book-btn">Thuê sách chỉ từ ${formatMoney(productSelected.productPrice / 5)}</button>
            <button type="button" class="add-to-wishlist">${productSelected.productId === userLoginLocal.wishList ? `<i class="fa-solid fa-check"></i> Đã thêm vào yêu thích` : `<i class="fa-regular fa-bookmark"></i> Thêm vào yêu thích`}</button>
        </div>
    </div>
    <div class="detail-image">
        <img src="${productSelected.productImage}" class="dt-book-img-sz-df" alt="">
    </div>
</div>
<div class="more-info">
    <div class="introduce-container">
        <div class="introduce">
            <span class="text-xl font-semibold">Giới thiệu về sách điện tử này <i class="fa-solid fa-arrow-right cursor-pointer detail-btn"></i></span>
            <p class="introduce-text text-sm">${productSelected.productContent}</p>
        </div>
        <div class="users-rating">
            <span>Xếp hạng và đánh giá <a href="#" class="text-black"><i class="fa-solid fa-arrow-right"></i></a></span>
            <div class="rating-point">
                <h1>${productSelected.productRate}</h1>
            </div>
            <div class="users-rating-list">
                <div class="users-list-content">
                    <div class="users-rating-info">
                        <div class="users-image-name">
                            <img src="../assets/imgs/313391425_839643393894386_313422822213645344_n.jpg" alt="">
                            <div class="users-name">
                                <span>Bình Tommy</span>
                                <span class="text-gray-500">1, tháng 13, 2032</span>
                            </div>
                        </div>
                        <div class="users-report">
                            <button type="button" class="report-rating-btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                        </div>
                    </div>
                    <div class="rating-content">
                        <span>ok</span>
                    </div>
                </div>
                <div class="users-list-content">
                    <div class="users-rating-info">
                        <div class="users-image-name">
                            <img src="../assets/imgs/313391425_839643393894386_313422822213645344_n.jpg" alt="">
                            <div class="users-name">
                                <span>Bình Tommy</span>
                                <span class="text-gray-500">1, tháng 13, 2032</span>
                            </div>
                        </div>
                        <div class="users-report">
                            <button type="button" class="report-rating-btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                        </div>
                    </div>
                    <div class="rating-content">
                        <span>ok</span>
                    </div>
                </div>
                <div class="users-list-content">
                    <div class="users-rating-info">
                        <div class="users-image-name">
                            <img src="../assets/imgs/313391425_839643393894386_313422822213645344_n.jpg" alt="">
                            <div class="users-name">
                                <span>Bình Tommy</span>
                                <span class="text-gray-500">1, tháng 13, 2032</span>
                            </div>
                        </div>
                        <div class="users-report">
                            <button type="button" class="report-rating-btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                        </div>
                    </div>
                    <div class="rating-content">
                        <span>ok</span>
                    </div>
                </div>
                <div class="rating-form-container">
                    <span class="rating-form-container-text">Đánh giá sách này</span>
                    <button class="rating-form-btn" type="button">Viết bài đánh giá</button>
                </div>
            </div>
        </div>
    </div>
    <div class="books-suggestions">
        <div class="books-by-author">
            <span>Bởi Nguyên Phong <a href="#"><i class="fa-solid fa-arrow-right"></i></a></span>
            <div class="books-list">
                <a href="#" class="books-list-link">
                    <div class="books-list-image">
                        <img src="../assets/imgs/a.jpg" alt="">
                    </div>
                    <div class="books-list-text-info">
                        <span class="books-list-title">Muôn kiếp nhân sinh: Many lives dfjdfjdfbdjfb</span>
                        <span class="books-list-author">Nguyên Phong</span>
                        <span class="books-list-type">Khoa học viễn tưởng</span>
                        <div class="books-list-rate-price">
                            <span class="books-list-rate">4,7 <i class="fa-solid fa-star"></i></span>
                            <span class="books-list-old-price">122222</span>
                            <span class="books-list-new-price">122223</span>
                        </div>
                    </div>
                </a>
                <a href="#" class="books-list-link">
                    <div class="books-list-image">
                        <img src="../assets/imgs/a.jpg" alt="">
                    </div>
                    <div class="books-list-text-info">
                        <span class="books-list-title">Muôn kiếp nhân sinh: Many lives dfjdfjdfbdjfb</span>
                        <span class="books-list-author">Nguyên Phong</span>
                        <span class="books-list-type">Khoa học viễn tưởng</span>
                        <div class="books-list-rate-price">
                            <span class="books-list-rate">4,7 <i class="fa-solid fa-star"></i></span>
                            <span class="books-list-old-price">122222</span>
                            <span class="books-list-new-price">122223</span>
                        </div>
                    </div>
                </a>
                <a href="#" class="books-list-link">
                    <div class="books-list-image">
                        <img src="../assets/imgs/a.jpg" alt="">
                    </div>
                    <div class="books-list-text-info">
                        <span class="books-list-title">Muôn kiếp nhân sinh: Many lives dfjdfjdfbdjfb</span>
                        <span class="books-list-author">Nguyên Phong</span>
                        <span class="books-list-type">Khoa học viễn tưởng</span>
                        <div class="books-list-rate-price">
                            <span class="books-list-rate">4,7 <i class="fa-solid fa-star"></i></span>
                            <span class="books-list-old-price">122222</span>
                            <span class="books-list-new-price">122223</span>
                        </div>
                    </div>
                </a>
                <a href="#" class="books-list-link">
                    <div class="books-list-image">
                        <img src="../assets/imgs/a.jpg" alt="">
                    </div>
                    <div class="books-list-text-info">
                        <span class="books-list-title">Muôn kiếp nhân sinh: Many lives dfjdfjdfbdjfb</span>
                        <span class="books-list-author">Nguyên Phong</span>
                        <span class="books-list-type">Khoa học viễn tưởng</span>
                        <div class="books-list-rate-price">
                            <span class="books-list-rate">4,7 <i class="fa-solid fa-star"></i></span>
                            <span class="books-list-old-price">122222</span>
                            <span class="books-list-new-price">122223</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="related-books">
            <span>Sách điện tử liên quan <a href="#"><i class="fa-solid fa-arrow-right"></i></a></span>
            <div class="books-list">
                <a href="#" class="books-list-link">
                    <div class="books-list-image">
                        <img src="../assets/imgs/a.jpg" alt="">
                    </div>
                    <div class="books-list-text-info">
                        <span class="books-list-title">Muôn kiếp nhân sinh: Many lives dfjdfjdfbdjfb</span>
                        <span class="books-list-author">Nguyên Phong</span>
                        <span class="books-list-type">Khoa học viễn tưởng</span>
                        <div class="books-list-rate-price">
                            <span class="books-list-rate">4,7 <i class="fa-solid fa-star"></i></span>
                            <span class="books-list-old-price">122222</span>
                            <span class="books-list-new-price">122223</span>
                        </div>
                    </div>
                </a>
                <a href="#" class="books-list-link">
                    <div class="books-list-image">
                        <img src="../assets/imgs/a.jpg" alt="">
                    </div>
                    <div class="books-list-text-info">
                        <span class="books-list-title">Muôn kiếp nhân sinh: Many lives dfjdfjdfbdjfb</span>
                        <span class="books-list-author">Nguyên Phong</span>
                        <span class="books-list-type">Khoa học viễn tưởng</span>
                        <div class="books-list-rate-price">
                            <span class="books-list-rate">4,7 <i class="fa-solid fa-star"></i></span>
                            <span class="books-list-old-price">122222</span>
                            <span class="books-list-new-price">122223</span>
                        </div>
                    </div>
                </a>
                <a href="#" class="books-list-link">
                    <div class="books-list-image">
                        <img src="../assets/imgs/a.jpg" alt="">
                    </div>
                    <div class="books-list-text-info">
                        <span class="books-list-title">Muôn kiếp nhân sinh: Many lives dfjdfjdfbdjfb</span>
                        <span class="books-list-author">Nguyên Phong</span>
                        <span class="books-list-type">Khoa học viễn tưởng</span>
                        <div class="books-list-rate-price">
                            <span class="books-list-rate">4,7 <i class="fa-solid fa-star"></i></span>
                            <span class="books-list-old-price">122222</span>
                            <span class="books-list-new-price">122223</span>
                        </div>
                    </div>
                </a>
                <a href="#" class="books-list-link">
                    <div class="books-list-image">
                        <img src="../assets/imgs/a.jpg" alt="">
                    </div>
                    <div class="books-list-text-info">
                        <span class="books-list-title">Muôn kiếp nhân sinh: Many lives dfjdfjdfbdjfb</span>
                        <span class="books-list-author">Nguyên Phong</span>
                        <span class="books-list-type">Khoa học viễn tưởng</span>
                        <div class="books-list-rate-price">
                            <span class="books-list-rate">4,7 <i class="fa-solid fa-star"></i></span>
                            <span class="books-list-old-price">122222</span>
                            <span class="books-list-new-price">122223</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
    `
    document.querySelector('.detail').innerHTML = productDetail;
}
}
RenderDetail();
// add to wishlist
document.querySelector('.add-to-wishlist').addEventListener('click', (e) =>
{
    if(productSelected.productId != userLoginLocal.wishList)
    {
        const newUserLogin = 
        {
            ...userLoginLocal,
            wishList: productSelected.productId
        }
        localStorage.setItem("userLogin", JSON.stringify(newUserLogin));
        if(findToSave)
        {
            const indexUsers = usersLocal.indexOf(findToSave);
            usersLocal[indexUsers] = newUserLogin;
            localStorage.setItem("users", JSON.stringify(usersLocal));
        }
    }
    else
    {
        const newUserLogin = 
        {
            ...userLoginLocal,
            wishList: ""
        }
        localStorage.setItem("userLogin", JSON.stringify(newUserLogin));
        if(findToSave)
        {
            const indexUsers = usersLocal.indexOf(findToSave);
            usersLocal[indexUsers] = newUserLogin;
            localStorage.setItem("users", JSON.stringify(usersLocal));
        }
    }
    RenderDetail();
})
// display detail book
document.querySelector('.detail-btn').addEventListener('click', () =>
{
    document.querySelector('.book-detail').style.display = "flex";
    const detailBook = `
    <div class="form">
    <h1 class="book-name text-capitalize">${productSelected.productName} <i class="fa-solid fa-xmark relative left-72"></i></h1>
    <p class="book-content">${productSelected.productContent}</p>
    <div class="flex justify-between pr-10">
        <div class="flex flex-col gap-2">
            <div class="language flex flex-col">
                <span class="font-bold">Ngôn ngữ</span>
                <span>Tiếng việt</span>
            </div>
            <div class="seller flex flex-col">
                <span class="font-bold">Người bán</span>
                <span>Ebook</span>
            </div>
            <div class="book-pages flex flex-col">
                <span class="font-bold">Số trang</span>
                <span>${productSelected.productPages}</span>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="author flex flex-col">
                <span class="font-bold">Tác giả</span>
                <span>${productSelected.author}</span>
            </div>
            <div class="flex flex-col">
                <span class="font-bold">Nhà xuất bản</span>
                <span>NXB thanh niên</span>
            </div>
            <div class="type flex flex-col">
                <span class="font-bold">Thể loại</span>
                <span>${productSelected.categoryName}</span>
            </div>
        </div>
    </div>
</div>
    `
    document.querySelector('.book-detail').innerHTML = detailBook;
})
// render product in title
document.querySelector('title').innerHTML = productSelected.productName;