let header = document.querySelector('.header');
window.addEventListener('scroll', (e) =>
{
    if(window.pageYOffset >= 70)
    {
        header.classList.add('isScroll');
    }
    else
    {
        header.classList.remove('isScroll');
    }
})