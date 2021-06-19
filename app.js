const menu = document.querySelector('#mobile-menu');
const menuLists = document.querySelector('.navbar__menu')

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLists.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);