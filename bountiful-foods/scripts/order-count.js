// Get the button element by its id
const button = document.querySelector("#order-submit");
// Get the counter element by its id
let counter = document.querySelector("#count");

// Initialize the click count to zero or the value stored in local storage
let clickCount = localStorage.getItem("submitButtonClickCount")
// console.log(button)

const incrementClicks = () => {
    // Increment the click count by one
    clickCount++;
    // Store the new click count in local storage
    localStorage.setItem("submitButtonClickCount", clickCount);
}

// Update the counter element with the click count
counter.textContent = clickCount;
// Add an event listener to the button element
button.addEventListener("click", incrementClicks);


//


// document.addEventListener("DOMContentLoaded", function() {
//     // Get the button element by its id
//     let button = document.getElementById("order-submit");
  
//     // Get the counter element by its id
//     let counter = document.getElementById("count");
  
//     // Initialize the click count to zero or the value stored in local storage
//     let clickCount = localStorage.getItem("submitButtonClickCount") || 0;
  
//     // Update the counter element with the click count
//     counter.textContent = clickCount;

//     //create
  
//     // Add an event listener to the button element
//     button.addEventListener("submit", function() {
//       // Increment the click count by one
//       clickCount++;
  
//       // Update the counter element with the new click count
//       counter.textContent = clickCount;
  
//       // Store the new click count in local storage
//       localStorage.setItem("submitButtonClickCount", clickCount);
//     });
//   });