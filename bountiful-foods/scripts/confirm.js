const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format( new Date());
document.querySelector("#date").textContent = fulldate;
const fruitDataUrl = './data/fruit.json';

// const createNutritionElements = (nutritions) => {
//     console.log(nutritions)

// }

// const getNutrituion = (list, fruit) => {
//     console.log(fruit)
//     // let fruitInfo = (list.find(x => x.name === fruit))
//     // createNutritionElements(fruitInfo.nutritions)
//     fruit.forEach((fruit) => {
//         let option = document.createElement("div")
//         option.innerHTML = `<p>${fruit.name}</p><p>Carbohydrates: ${fruit.nutritions.carbohydrates}</p><p>Protein: ${fruit.nutritions.protein}</p>`
//         options.appendChild(option);
//     });
// };
// getNutrituion();
// url api stuff
// let url = new URL(window.location);
// let params = url.searchParams;
// let fruits = []

//remove
// for (const p of params) {
//     if (p[0] == 'aFruit') {
//         fruits.push(p[1])
//     }
// }

// const orderDetails = document.querySelector('.order-details')
// document.querySelector('#name').textContent = params.get("fname");
// document.querySelector('#email').textContent = params.get("email");
// document.querySelector('#phone').textContent = params.get("phone");
// document.querySelector('#option').textContent = params.get("option");
// fruits.forEach(element => {
//     let fruitParagraph = document.createElement('p')
//     fruitParagraph.textContent = element;
//     orderDetails.appendChild(fruitParagraph);
//     (async function strawberries() {
//         const response = await fetch(fruitDataUrl);
//         const data = await response.json(); // note that we reference the member array of the data object given the structure of the json file
//         getNutrituion(data.fruit, element);
//       })();
// });
// document.querySelector('#fruit').textContent = params.getAll("aFruit");
// document.querySelector('#specIn').textContent = params.get("Instructions");

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

selectedFruits.forEach((fruit, nutrition) => {
  const fruitItem = document.createElement('li');
  const fruitNutrition = document.createElement('li');
  fruitItem.textContent = fruit;
  fruitNutrition.textContent = nutrition;
  selectedFruitsList.appendChild(fruitItem, fruitNutrition);
});