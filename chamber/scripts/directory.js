const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
};
const url = './data/data.json'

async function getmemberData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.members);  // note that we reference the member array of the data object given the structure of the json file
    displaymembers(data.members);
  }
  
  const displaymembers = (members) => {
    const cards = document.querySelector("div.cards"); // select the output container element
  
    members.forEach((member) => {
      // Create elements to add to the div.cards element
      let card = document.createElement("section");
      card.innerHTML = `<h2>${member.name}</h2>
        <h3>Address: ${member.address}</h3>
        <h3>Phone Number: ${member.phone}</h3>
        <h3>Website: ${member.website}</h3>
        <h3>Membership Level: ${member.membership}</h3>
        <img src="${member.image}" height="300" width="400" loading="lazy" alt="Image of ${member.name}">`;
            // Add a class "gold" to cards with membership level "Gold"
        if (member.membership === "Gold") {
            card.classList.add("gold");
        }
      cards.appendChild(card);
    }); // end of forEach loop
    
  }; // end of function expression
  getmemberData();
