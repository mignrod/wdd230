const BaseURL = 'https://mignrod.github.io/wdd230/';
const linksURL = 'https://mignrod.github.io/wdd230/data/links.json';

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if(response.ok) {
            const data = await response.json();
            console.log(data);
            displayLinks(data);

        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayLinks(data) {
    data.weeks.forEach(week => {
        const ul = document.querySelector('.homework');
        let li = document.createElement('li');
        li.textContent = week.week + ': ';
        week.links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.title;
            li.appendChild(a)
            li.innerHTML += ' | ';
        })
        ul.appendChild(li);
        
    });
}

getLinks();
