const p1 = document.querySelector('#password1');
const p2 = document.querySelector('#password2');
const error = document.querySelector('#error');

const rate = document.querySelector('#rangevalue');
const options = document.querySelector('#rating');

p2.addEventListener('focusout', validate);

function validate() {
    
    if (p2.value !== p1.value) {
        p2.value = "";
        p1.value = "";
        p1.focus();
        error.textContent = "Passwords do not match. Try again!";

    } else {
        error.textContent = "";

    }
}

options.addEventListener('change', displayRate);
options.addEventListener('input', displayRate);

function displayRate() {
    rate.innerHTML = options.value;

}