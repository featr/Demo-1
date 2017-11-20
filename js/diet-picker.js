const dietHeadings = $('.diet-plan h2');
const dietTexts = $('.diet-plan p');
let length = dietHeadings.length;

const modal = $('#myModal');

$('#random-diet-button button').on('click', e => {
	let randomNumber = Math.floor(Math.random() * length);
	let dietHeading = dietHeadings[randomNumber].innerHTML;
	let dietText = dietTexts[randomNumber].innerHTML;
	$('.modal-heading').html(dietHeading);

	$('.modal-text').html(dietText);

	modal.show('puff', 'slow');
});

$('.close').on('click', () => {
	modal.hide('puff', 'fast');
});

window.addEventListener('click', e => {
	if (e.target.matches('#myModal')) {
		modal.hide('puff', 'fast');
	}
});
