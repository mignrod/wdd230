const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetsData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);

}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthPlace = document.createElement('p');
        let birhtDate = document.createElement('p');
        let portrait = document.createElement('img');

        // Building full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // building birth details
        birhtDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        //Building image portrait
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('atl', `portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        //Append sections to card
        card.appendChild(fullName);
        card.appendChild(birhtDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
        
    });
}

getProphetsData();
