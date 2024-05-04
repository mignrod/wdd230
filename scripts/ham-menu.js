const hamBtn = document.querySelector('#myBtn');
const navElements = document.querySelector('.links');

hamBtn.addEventListener('click', () => {
    navElements.classList.toggle('open');
    hamBtn.classList.toggle('open');

    if (hamBtn.textContent.includes('☰')) {
        hamBtn.textContent = '⛌';
    } else {
        hamBtn.textContent = '☰';
    }
    
});

