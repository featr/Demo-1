const calculateBMI = e => {
	e.preventDefault();

	const image = $('.calculator-result');

	let bodyWeight = parseFloat($('#weight').val());
	let bodyHeight = parseFloat($('#height').val());

	let result = Math.round(bodyWeight / Math.pow(bodyHeight, 2) * 100) / 100;

	const slide = (heading = 'Your BMI is in the norm. Keep up the good work!', text) => {
		setTimeout(() => {
			image
				.show('slide', { direction: 'left' }, 'slow')
				.removeClass('calculator-img')
				.find('h1')
				.html(heading)
				.siblings()
				.html(text);
		}, 1000);
	};

	if (typeof result === 'number' && !isNaN(result)) {
		if (result <= 25) {
			$('#result').html('Your BMI is ' + result);
			image.hide('slide', { direction: 'right' }, 'slow', slide());
		} else if (result > 25) {
			$('#result').html('Your BMI is ' + result);
			image.hide(
				'slide',
				{ direction: 'right' },
				'slow',
				slide('Seems like you might be overweight.', 'You can choose one of our diet plans')
			);
		}
	} else {
		$('#result').html('invalid input');
	}
};

$('#calculator-form').on('submit', calculateBMI);
