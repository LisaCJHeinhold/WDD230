// select HTML elements in the document
const currentTempEl = document.querySelector('#current-temp');
const humidityEl = document.querySelector('#humidity');
const weatherIconEl = document.querySelector('#weather-icon');
const captionDescEl = document.querySelector('figcaption');

const lat = 33.15;
const lon = -117.35;
const appid = "2c9692c4d272bccd1f50b2dad5746a24";
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=imperial`

function displayResults(weatherData) {
    // api values 
    // toFixed(0) rounds the temperature to the nearest whole number
    const temp = weatherData.main.temp.toFixed(0)
    const humidity = weatherData.main.humidity.toFixed(0)
    const desc = weatherData.weather[0].description;
    // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    
    // html elements
    currentTempEl.innerHTML = `<strong>${temp}</strong>`;
    humidityEl.innerHTML = `<strong>${humidity}</strong>`
    weatherIconEl.setAttribute('src', iconsrc);
    weatherIconEl.setAttribute('alt', desc);
    captionDescEl.textContent = desc; 
  }

async function getWeather() {
    try {
      const response = await fetch(weatherURL);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
getWeather();