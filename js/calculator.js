const calculateBMI = e => {
	e.preventDefault();

	let bodyWeight = parseFloat(document.querySelector('#weight').value);
	let bodyHeight = parseFloat(document.querySelector('#height').value);
	let result = Math.round(bodyWeight / Math.pow(bodyHeight, 2) * 100) / 100;
	if (typeof result === 'number' && !isNaN(result)) {
		document.querySelector('#result').innerHTML = 'Your BMI is ' + result;
	}
};

document.querySelector('#calculator-form').addEventListener('submit', calculateBMI);
