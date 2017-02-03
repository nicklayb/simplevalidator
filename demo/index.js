//import SimpleValidator from '../src';
let SimpleValidator = require('../src');
let validator = new SimpleValidator({
    rules: {
        name: () => {
            return document.getElementById('nameInput').value.length > 0;
        },
        age: () => {
            return document.getElementById('ageInput').value > 18;
        }
    },
    valid: () => {
        document.getElementById('repsonse').innerHTML = 'Alright';
    },
    notValid: () => {
        document.getElementById('repsonse').innerHTML = 'Whoops...';
    }
});

document.getElementById('nameInput').addEventListener('change', () => {
    validator.check();
});
document.getElementById('ageInput').addEventListener('change', () => {
    validator.check();
});
