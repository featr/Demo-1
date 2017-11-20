const modal = $('#myModal');

$('#principles-section').on('click', e => {
	if (e.target.matches('.read-more-button')) {
		$('.modal-heading').html(e.target.parentElement.firstElementChild.innerHTML);

		$('.modal-text').html(
			e.target.parentElement.firstElementChild.nextElementSibling.innerHTML
		);

		modal.css('display', 'block');
	}
});

$('.close').on('click', () => {
	modal.css('display', 'none');
});

window.addEventListener('click', e => {
	if (e.target.matches('#myModal')) {
		modal.css('display', 'none');
	}
});
