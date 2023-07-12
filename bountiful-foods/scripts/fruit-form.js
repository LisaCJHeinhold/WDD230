const fruitDataUrl = './data/fruit.json';

async function getFruitData() {
    const response = await fetch(fruitDataUrl);
    const data = await response.json();
    // console.table(data.members);  // note that we reference the member array of the data object given the structure of the json file
    displayFruit(data.fruit);
  }
const displayFruit = (fruit) => {
    const options = document.querySelector(".checkbox-fruit");

    fruit.forEach((fruit) => {
        let option = document.createElement("form")
        option.innerHTML = `<label class="fruit-name container" for="${fruit.name}"><input type="checkbox" id="${fruit.name}" name="${fruit.name}" value="${fruit.name}"> ${fruit.name}<span class="checkmark"></span></label><br><br>`
        options.appendChild(option);
    });

};
getFruitData();