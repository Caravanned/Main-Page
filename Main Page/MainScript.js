const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

function showMenu() {
    const menu = document.querySelector('.hidden-nav-list');
    const clicked = document.querySelector('.hide-on-desktop');
    clicked.addEventListener('click', hideMenu);
    menu.style.display = 'flex';
}

function hideMenu() {
    const menu = document.querySelector('.hidden-nav-list');
    const clicked = document.querySelector('.hide-on-desktop');
    clicked.addEventListener('click', showMenu);
    menu.style.display = 'none';
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const navList = document.querySelector('.nav-list'); 

    if (window.scrollY > 0) {
        header.classList.add('scrolled'); 
        navList.style.display = 'none'; 
    } else {
        header.classList.remove('scrolled'); 
        navList.style.display = ''; 
    }
});