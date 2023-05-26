function windchill(windspeed, temp){
    //get html element to update
const tempElement = document.querySelector("#temp");
const windspeedElement  = document.querySelector("#wind-speed");
const windchillElement = document.querySelector("#wind-chill");
    //calculate windchill, iff applicable
    let windchillmsg = "N/A";
    if (windspeed > 3.0 && temp <= 50){
        let chillfactor = Math.pow(windspeed, 0.16);
        let windchillamt = Math.round(35.74 + (0.6215 * temp) - (35.75 * chillfactor) + (0.4275 * temp * chillfactor));
        windchillmsg = `${windchillamt}`;
    }
    //update html element with values
    tempElement.textContent = temp;
    windspeedElement.textContent = windspeed;
    windchillElement.textContent = windchillmsg;
}

//call windchill
windchill(5, 45);