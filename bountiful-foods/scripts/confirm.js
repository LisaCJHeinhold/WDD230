const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format( new Date());
document.querySelector("#date").textContent = fulldate;

const fruitDataUrl = './data/fruit.json';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

document.querySelector('#name').textContent = urlParams.get("fname");
document.querySelector('#email').textContent = urlParams.get("email");
document.querySelector('#phone').textContent = urlParams.get("phone");
document.querySelector('#option').textContent = urlParams.get("option");
document.querySelector('#specIn').textContent = urlParams.get("Instructions");

const selectedFruits = urlParams.getAll("aFruit");
const selectedFruitsList = document.querySelector('#selected-fruits');
const nutritionInfo = urlParams.getAll("nutrition");
const nutritionEL = document.querySelector('#nutrition');

async function main() {
  const response = await fetch(fruitDataUrl);
  const data = await response.json();
  const fruitData = data.fruit;
  let cals = 0;
  let fat = 0;
  let sugar = 0;
  let carbs = 0;
  let protein = 0;
  selectedFruits.forEach((fruit) => {
    const fruitItem = document.createElement('li');
    const fruitNutrition = document.createElement('li');
    const thisFruitNutrition = fruitData.find(x => x.name === fruit).nutritions;
    cals += Math.round(thisFruitNutrition.calories)
    fat += Math.round(thisFruitNutrition.fat)
    sugar += Math.round(thisFruitNutrition.sugar)
    carbs += Math.round(thisFruitNutrition.carbohydrates)
    protein += Math.round(thisFruitNutrition.protein)
    fruitItem.textContent = fruit;
    fruitNutrition.textContent = nutrition;
    selectedFruitsList.appendChild(fruitItem, fruitNutrition);
  });
  nutritionEL.innerHTML = ` Calories ${cals} Fat ${fat} Sugar ${sugar} Carbohydrates ${carbs} Proteins ${protein}`
}
main();