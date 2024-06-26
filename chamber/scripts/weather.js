const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const figureCaption = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=10.07&lon=-69.32&units=metric&appid=2a5cb590ce7ab11fe3c5edabb6585178';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            displayResults(data);
            
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    let desc = data.weather[0].description;
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Weather Icon');
    weatherIcon.setAttribute('width', '60');
    weatherIcon.setAttribute('title', desc);
    figureCaption.textContent = desc.toUpperCase();
}

apiFetch();