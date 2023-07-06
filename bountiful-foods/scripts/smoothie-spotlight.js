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
      <img src="${image}" alt="${name}" />
      <h2>${name}</h2>
      <p>${desc}</p>
    </div>
  `;
  return html;
}

// Display a random smoothie on page load
window.onload = function() {
  displaySmoothies();
};