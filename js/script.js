document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    
        var bodyWeight = parseFloat(document.querySelector('#weight').value);
        var bodyHeight = parseFloat(document.querySelector('#height').value);
        var result = Math.round(bodyWeight / Math.pow(bodyHeight, 2) * 100) / 100;
        if ( typeof result === 'number' && !isNaN(result)  ) {
        document.querySelector('#result').innerHTML = 'Your BMI is ' + result;
        }
})
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