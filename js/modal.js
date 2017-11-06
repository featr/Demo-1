const modal = document.querySelector('#myModal');

document.querySelector('#principles-section').addEventListener('click', e => {
	if (e.target.matches('.read-more-button')) {
		document.querySelector('.modal-heading').innerHTML =
			e.target.parentElement.firstElementChild.innerHTML;
		document.querySelector('.modal-text').innerHTML =
			e.target.parentElement.firstElementChild.nextElementSibling.innerHTML;
		modal.style.display = 'block';
	}
});

document.querySelector('.close').addEventListener('click', () => {
	modal.style.display = 'none';
});

window.addEventListener('click', e => {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
});
