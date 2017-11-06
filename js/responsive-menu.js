let isOpen = false;
const toggleMenu = () => {
	if (isOpen == false) {
		document.querySelector('.navigation-menu').style.transform = 'translateY(50%)';
		isOpen = true;
	} else if (isOpen == true) {
		document.querySelector('.navigation-menu').style.transform = 'translateY(-100%)';
		isOpen = false;
	}
};

document.querySelector('.hamburger-button').addEventListener('click', toggleMenu);
