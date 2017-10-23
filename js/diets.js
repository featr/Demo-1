let isOpen = false;

document.querySelector('.hamburger-button').addEventListener('click', () => {
    if (isOpen == false) {
        document.querySelector('.navigation-menu').style.display = 'flex';
        document.querySelector('.hamburger-button').style.opacity = 0.3;
        isOpen = true;
    } else if (isOpen == true) {
        document.querySelector('.navigation-menu').style.display = 'none';
        document.querySelector('.hamburger-button').style.opacity = 1;
        isOpen = false;
    }
})