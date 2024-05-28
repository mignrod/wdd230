const url = 'https://mignrod.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMembersData() {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const dataMembers = await response.json();
            displayMemberData(dataMembers.companies);
            console.log(dataMembers);

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const displayMemberData = (companies) => {
    companies.forEach((company) => {
        const companyCard = document.createElement('section');
        const logo = document.createElement('img');
        const name = document.createElement('p');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('a');
        const level = document.createElement('p');
        const area = document.createElement('p');
        
        // Company Logo
        // logo.setAttribute('src', `images/${company.icon}`);
        logo.setAttribute('src', company.icon);
        logo.setAttribute('alt', `${company.name} Logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '400');
        logo.setAttribute('height', '200');

        // Company details
        name.textContent = company.name;
        address.textContent = company.address;
        phone.textContent = company.phone;
        website.textContent = company.weburl;
        level.textContent = `${company.memberLevel} Member`;
        area.textContent = `Area: ${company.area}`;
        
        // Build Card
        companyCard.appendChild(logo);
        companyCard.appendChild(name);
        companyCard.appendChild(address);
        companyCard.appendChild(phone);
        companyCard.appendChild(website);
        companyCard.appendChild(level);
        companyCard.appendChild(area);
        
        // Append to the card
        cards.appendChild(companyCard);

    });
}

getMembersData();
