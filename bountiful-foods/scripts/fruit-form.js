const fruitDataUrl = './data/fruit.json';

async function getFruitData() {
    const response = await fetch(fruitDataUrl);
    const data = await response.json();
    displayFruit(data.fruit);
   console.log()
    // const fruitCheckboxes = document.querySelectorAll('input[name="aFruit"]');
    // fruitCheckboxes.forEach((checkbox) => {
    //   checkbox.addEventListener("change", () => {
    //     const fruitName = checkbox.value;
    //     const nutritionDiv = document.getElementById(`${fruitName}-nutrition`);
    //     if (checkbox.checked) {
    //       nutritionDiv.style.display = "none";
    //     } else {
    //       nutritionDiv.style.display = "none";
    //     }
    //   });
    // });
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

