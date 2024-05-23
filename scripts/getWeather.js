const url = 'https://api.openweathermap.org/data/2.5/weather?lat=10.06&lon=-69.34&units=metric&appid=2a5cb590ce7ab11fe3c5edabb6585178';
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

async function getData() {
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
    const desc = data.weather[0].description;
    currentTemp.innerHTML = `${data.main.temp}&deg;C - ${data.weather[0].main}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('title', desc);
    weatherIcon.setAttribute('width', '50');

}
getData();