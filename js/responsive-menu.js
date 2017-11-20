let isOpen = false;
const toggleMenu = () => {
	if (isOpen == false) {
		$('.navigation-menu').css('transform', 'translateY(30%)');
		isOpen = true;
	} else if (isOpen == true) {
		$('.navigation-menu').css('transform', 'translateY(-100%)');
		isOpen = false;
	}
};

$('.hamburger-button').on('click', toggleMenu);
