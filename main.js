document.addEventListener('DOMContentLoaded', () => {
    const BtnScrollTop = document.querySelector('.naarbovenbutton');
    BtnScrollTop.style.opacity = 0;
    BtnScrollTop.style.transition = 'opacity 1s ease';
    setTimeout(() => {
        BtnScrollTop.style.opacity = 1;
    }, 300); 
});

const BtnScrollTop = document.querySelector('.naarbovenbutton')

BtnScrollTop.addEventListener('click', Scrolltop)

function Scrolltop() {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    } )
}