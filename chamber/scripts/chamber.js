const menu = document.querySelector('#menu');
const links = document.querySelector('#hidden-links');
const topBtn = document.querySelector('#top');

menu.textContent = '☰';
menu.addEventListener('click', () => {
    if(menu.textContent.includes('☰')) {
        links.style.display = 'block';
        menu.textContent = '⛌';

    } else {
        menu.textContent = '☰';
        links.style.display = 'none';

    }
});

const currentDate = new Date();

document.querySelector('#date').innerHTML = `&copy${currentDate.getFullYear()}`;

let fileModification = new Date(document.lastModified);

document.querySelector('#lastModified').innerHTML = `Last Modification: ${fileModification.toLocaleString('en-US')}`;