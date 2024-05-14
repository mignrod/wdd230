const visitNumber = document.querySelector('.visit');

let numVisits = Number(window.localStorage.getItem('visitStorage')) || 0;

if(numVisits !== 0) {
    visitNumber.textContent = numVisits;

} else {
    visitNumber.textContent = `Hi! This is your first visit. Welcome!.`;
};

numVisits++;

localStorage.setItem('visitStorage', numVisits);
