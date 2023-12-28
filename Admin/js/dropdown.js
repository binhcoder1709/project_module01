let dropdownBtn = document.querySelector('#dropdownBtn');
let dropdownContent = document.querySelector('.children-dropdown');
dropdownBtn.addEventListener('click', () =>
{
    if(dropdownContent.style.display == "none")
    {
        dropdownContent.style.display = "flex";
    }
    else
    {
        dropdownContent.style.display = "none";
    }
})