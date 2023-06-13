const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
  }
  
  const displayProphets = (prophets) => {
    const cards = document.querySelector("div.cards"); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement("section");
      card.innerHTML = `<h2>${prophet.name} ${prophet.lastname}</h2>
        <h3>Date of Birth: ${prophet.birthdate}</h3>
        <h3>Place of Birth: ${prophet.birthplace}</h3>
        <img src="${prophet.imageurl}" height="340" width="240" loading="lazy" alt="Portrait of ${prophet.name} ${prophet.lastname}">`;
      cards.appendChild(card);
    }); // end of forEach loop
    
  }; // end of function expression
  getProphetData();