// Get data for smoothies
const smoothiesDataUrl = './data/smoothies.json';

// Loop through smoothies data to display one at a time
async function displaySmoothies() {
  const response = await fetch(smoothiesDataUrl);
  if (response.ok) {
    const data = await response.json();
    const smoothies = data.smoothies;

    const randomIndex = Math.floor(Math.random() * smoothies.length);
    const randomSmoothie = smoothies[randomIndex];

    const smoothieContainer = document.getElementById("smoothie-container");
    smoothieContainer.innerHTML = generateSmoothieHTML(randomSmoothie);
  } else {
    console.error("There was an error loading the smoothies data.");
  }
}

// Function to generate HTML for smoothie display
function generateSmoothieHTML(smoothie) {
  const { name, desc, image } = smoothie;
  const html = `
    <div class="smoothie">
      <img src="${image}" alt="${name}"/>
      <h2>${name}</h2>
      <p>${desc}</p>
      <button onclick="window.location.href='./fresh.html';">Order Here!</button>
    </div>
  `;
  return html;
}

// Display a random smoothie on page load
window.onload = function() {
  displaySmoothies();
};

// Get the counter element by its id
let counter = document.getElementById("count");

// Define a function that gets the click count from local storage and console logs it
function getClickCount() {
  // Get the item from local storage with the key "clicks"
  let clicks = localStorage.getItem("clicks");

  // Check if the item exists and has a valid value
  if (clicks && !isNaN(clicks)) {
    // Convert the item to a number
    clicks = Number(clicks);
    //write it to home
    counter.textContent = clicks;
    // Console log the click count
    console.log("You have clicked the button " + clicks + " times.");
  }
}

// Call the function
getClickCount();