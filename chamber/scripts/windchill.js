// function windchill(windspeed, temp){
//     //get html element to update
// const tempElement = document.querySelector("#temp");
// const windspeedElement  = document.querySelector("#wind-speed");
// const windchillElement = document.querySelector("#wind-chill");
//     //calculate windchill, iff applicable
//     let windchillmsg = "N/A";
//     if (windspeed > 3.0 && temp <= 50){
//         let chillfactor = Math.pow(windspeed, 0.16);
//         let windchillamt = Math.round(35.74 + (0.6215 * temp) - (35.75 * chillfactor) + (0.4275 * temp * chillfactor));
//         windchillmsg = `${windchillamt}`;
//     }
//     //update html element with values
//     tempElement.textContent = temp;
//     windspeedElement.textContent = windspeed;
//     windchillElement.textContent = windchillmsg;
// }

// //call windchill
// windchill(5, 45);

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const lat = 57.14;
const lon = -4.68;
const appid = "2a29b7cfbdbb553ce8984f15bc2a35a7";
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=metric`

function displayResults(weatherData) {
    // toFixed(0) rounds the temperature to the nearest whole number
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;  
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