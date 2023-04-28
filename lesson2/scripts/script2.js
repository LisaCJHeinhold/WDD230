// get current year
const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.textContent = today.getFullYear();

//get last updated
const lastupdated = document.querySelector("#updated");
lastupdated.textContent = document.lastModified;