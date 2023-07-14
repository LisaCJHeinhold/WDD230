// Get the button element by its id
let button = document.getElementById("order-submit");

// Get the counter element by its id
let counter = document.getElementById("count");

// Initialize the click count to zero or the value stored in local storage
let clickCount = localStorage.getItem("submitButtonClickCount") || 0;

// Update the counter element with the click count
counter.textContent = clickCount;

// Add an event listener to the button element
button.addEventListener("click", function() {
  // Increment the click count by one
  clickCount++;

  // Update the counter element with the new click count
  counter.textContent = clickCount;

  // Store the new click count in local storage
  localStorage.setItem("submitButtonClickCount", clickCount);
});