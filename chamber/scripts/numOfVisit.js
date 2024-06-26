const visitCounter = document.querySelector('.visit');

const currentVisit = Date.now();
let numVisits = Number(window.localStorage.getItem('visitStorage')) || 0;
const lastVisit = Number(window.localStorage.getItem('lastVisit'));

const timePassed = ((currentVisit - lastVisit) / 86400000);
const days = Math.floor(timePassed);
console.log(days);


if(numVisits !== 0 && days === 0) {
    visitCounter.textContent = `Back so soon! Awesome!`;

} else if(numVisits !== 0 && days === 1) {
    visitCounter.textContent = `You last visited 1 day ago.`;
} else if (numVisits !== 0 && days > 1) {
    visitCounter.textContent = `You last visited ${days} days ago.`;
} else {
    visitCounter.textContent = `Welcome! Let us know if you have any questions.`;
}

numVisits++;

localStorage.setItem('visitStorage', numVisits);
localStorage.setItem('lastVisit', currentVisit);
