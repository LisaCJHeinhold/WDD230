const fruitDataUrl = './data/fruit.json';

async function getFruitData() {
    const response = await fetch(fruitDataUrl);
    const data = await response.json();
    const sortedFruit = data.fruit.sort((a, b) => a.name.localeCompare(b.name));
    displayFruit(sortedFruit);
  }
  const displayFruit = (fruit) => {
    const options = document.querySelector(".checkbox-fruit");
  
    fruit.forEach((fruit) => {
      let option = document.createElement("div");
      option.innerHTML = `
        <label class="fruit-name container" for="${fruit.name}">
          <input type="checkbox" id="${fruit.name}" name="aFruit" value="${fruit.name}">
          ${fruit.name}<span class="checkmark"></span>
        </label><br><br>`;
      options.appendChild(option);
    });
  };
getFruitData();

// Get the button element by its id
let button = document.getElementById("order-submit");

// Add an event listener to the button that will execute a function when clicked
button.addEventListener("click", function() {
  //check if clicks exists
  let clickCount = localStorage.getItem('clicks');
    if (clickCount == null){
      localStorage.setItem('clicks', 1)
    }else {
      // Increment the click count by one
      clickCount++;
      // Set the item in local storage with the key "clicks" and the value of click count
      localStorage.setItem("clicks", clickCount);
    }
});