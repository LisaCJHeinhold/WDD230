const fruitDataUrl = './data/fruit.json';

async function getFruitData() {
    const response = await fetch(fruitDataUrl);
    const data = await response.json();
    displayFruit(data.fruit);
  }
  const displayFruit = (fruit) => {
    const options = document.querySelector(".checkbox-fruit");
  
    fruit.forEach((fruit) => {
      let option = document.createElement("div");
      option.innerHTML = `
        <label class="fruit-name container" for="${fruit.name}">
          <input type="checkbox" id="${fruit.name}" name="aFruit" value="${fruit.name}">
          ${fruit.name}<span class="checkmark"></span>
        </label><br><br>
        <div id="${fruit.name}-nutrition" name="nutrition" style="display: none;">
          <p>Calories: ${fruit.nutritions.calories}</p><br>
          <p>Fat: ${fruit.nutritions.fat}</p><br>
          <p>Sugar: ${fruit.nutritions.sugar}</p><br>
          <p>Carbohydrates: ${fruit.nutritions.carbohydrates}</p><br>
          <p>Protein: ${fruit.nutritions.protein}</p>
        </div>
      `;
      options.appendChild(option);
    });
  };
getFruitData();

// Define a variable to store the number of clicks
let clickCount = 0;

// Get the button element by its id
let button = document.getElementById("#order-submit");
console.log(clickCount)

// Add an event listener to the button that will execute a function when clicked
button.addEventListener("click", function() {
  // Increment the click count by one
  clickCount++;
  console.log(clickCount)
  // Set the item in local storage with the key "clicks" and the value of click count
  localStorage.setItem("clicks", clickCount);
});