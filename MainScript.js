const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const menu = document.querySelector('.hidden-nav-list'); // Get the menu element
const clicked = document.querySelector('.hide-on-desktop'); // Get the mobile menu icon

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
});

function showMenu() {
    menu.classList.add('active');
    menu.style.display = 'flex';
    clicked.onclick = hideMenu;
}

function hideMenu() {
    menu.classList.remove('active');
    menu.style.display = 'none';
    clicked.onclick = showMenu;
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-nobootstrap');
    const navList = document.querySelector('.nav-list');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        navList.style.display = 'none';
        if(menu.classList.contains('active')){ // if the menu is active while scrolling, hide it
            hideMenu();
        }
    } else {
        header.classList.remove('scrolled');
        navList.style.display = '';
    }
});

