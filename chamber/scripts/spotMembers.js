const urlJson = 'https://mignrod.github.io/wdd230/chamber/data/members.json';

async function getData() {
    try {
        const response = await fetch(urlJson);
        if(response.ok) {
            const data = await response.json();
            spotlightMembers(data.companies);

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const spotlightMembers = (companies) => {
    const compToshow = companies.filter(comp => comp.memberLevel === 'Gold' || comp.memberLevel === 'Silver');
    const companySelected = [];
    let randomCompany = [];

    while(companySelected.length < 3) {
        const i = Math.floor(Math.random() * compToshow.length);
        randomCompany = compToshow.splice(i, 1)[0];

        companySelected.push(randomCompany);

    }

    for(let j = 0; j <= 2; j++) {
        let imagen = document.querySelector(`#memb${j+1}`);
        imagen.setAttribute('src', companySelected[j].icon);
        imagen.setAttribute('alt', 'Company Icon');
        imagen.setAttribute('width', '80');
        imagen.setAttribute('height', '80');
        let text = document.querySelector(`#p${j+1}`);
        text.textContent = `${companySelected[j].name} Is a company in the area of ${companySelected[j].area}, located in Barquisimeto, Venezuela ${companySelected[j].address}`
        let a = document.createElement('a');
        a.href = companySelected[j].weburl;
        a.textContent = `\n ${companySelected[j].weburl}`;
        text.appendChild(a);


    }

}

getData();
