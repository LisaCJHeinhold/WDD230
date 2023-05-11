// get current year
const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.textContent = today.getFullYear();

//get last updated
const lastupdated = document.querySelector("#updated");
lastupdated.textContent = document.lastModified;

const date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
const currentDate = document.querySelector("#date");
currentDate.textContent = date;

