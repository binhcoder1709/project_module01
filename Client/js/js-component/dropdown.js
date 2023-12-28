let dropdownBtn = document.querySelector('.search-btn');
let dropdownContent = document.querySelector('.search-input-container');

dropdownBtn.addEventListener('click', (e) =>
{

    if(dropdownContent.style.display == "flex")
    {
        dropdownContent.style.display = "none";
    }else {
        dropdownContent.style.display = "flex";

    }
})