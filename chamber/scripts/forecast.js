const forecastCard = document.querySelector('#forecast');
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const temp1 = document.createElement('p');
const temp2 = document.createElement('p');
const temp3 = document.createElement('p');
const icon1 = document.createElement('img');
const icon2 = document.createElement('img');
const icon3 = document.createElement('img');
const description1 = document.createElement('p');
const description2 = document.createElement('p');
const description3 = document.createElement('p');
const day1 = document.createElement('p');
const day2 = document.createElement('p');
const day3 = document.createElement('p');


const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=10.07&lon=-69.32&units=metric&appid=2a5cb590ce7ab11fe3c5edabb6585178';

async function forecastFetch() {
    try {
        const response = await fetch(urlForecast);
        if(response.ok) {
            const dataForecast = await response.json();
            display(dataForecast);
            console.log(dataForecast);
            
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function display(dataForecast) {
    // Day 1 forecast
    const timestamp1 = dataForecast.list[6].dt;
    const date1 = new Date(timestamp1 * 1000);
    const formattedDate1 = date1.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    day1.textContent = formattedDate1;
    description1.textContent = dataForecast.list[6].weather[0].description;
    // description1.classList('temps');
    temp1.textContent = `${dataForecast.list[6].main.temp}ºC`;

    const iconsrc1 = `https://openweathermap.org/img/w/${dataForecast.list[6].weather[0].icon}.png`;

    icon1.setAttribute('src', iconsrc1);
    icon1.setAttribute('alt', 'Weather Icon');
    icon1.setAttribute('width', '50');
    icon1.setAttribute('title', description1);

    section1.appendChild(day1);
    section1.appendChild(temp1);
    section1.appendChild(icon1);
    section1.appendChild(description1);

    // Day 2 Forecast
    const timestamp2 = dataForecast.list[14].dt;
    const date2 = new Date(timestamp2 * 1000);
    const formattedDate2 = date2.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    day2.textContent = formattedDate2;
    description2.textContent = dataForecast.list[14].weather[0].description;
    temp2.textContent = `${dataForecast.list[14].main.temp}ºC`;

    const iconsrc2 = `https://openweathermap.org/img/w/${dataForecast.list[14].weather[0].icon}.png`;

    icon2.setAttribute('src', iconsrc2);
    icon2.setAttribute('alt', 'Weather Icon');
    icon2.setAttribute('width', '50');
    icon2.setAttribute('title', description2);

    section2.appendChild(day2);
    section2.appendChild(temp2);
    section2.appendChild(icon2);
    section2.appendChild(description2);

    // Day 3 forecast
    const timestamp3 = dataForecast.list[22].dt;
    const date3 = new Date(timestamp3 * 1000);
    const formattedDate3 = date3.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

    day3.textContent = formattedDate3;
    description3.textContent = dataForecast.list[22].weather[0].description;
    temp3.textContent = `${dataForecast.list[22].main.temp}ºC`;

    const iconsrc3 = `https://openweathermap.org/img/w/${dataForecast.list[22].weather[0].icon}.png`;

    icon3.setAttribute('src', iconsrc3);
    icon3.setAttribute('alt', 'Weather Icon');
    icon3.setAttribute('width', '50');
    icon3.setAttribute('title', description3);

    section3.appendChild(day3);
    section3.appendChild(temp3);
    section3.appendChild(icon3);
    section3.appendChild(description3);

}

forecastFetch();
