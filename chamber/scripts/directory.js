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
      card.innerHTML = `<h2>${member.name} ${member.lastname}</h2>
        <h3>Date of Birth: ${member.birthdate}</h3>
        <h3>Place of Birth: ${member.birthplace}</h3>
        <img src="${member.imageurl}" height="340" width="240" loading="lazy" alt="Portrait of ${member.name} ${member.lastname}">`;
      cards.appendChild(card);
    }); // end of forEach loop
    
  }; // end of function expression
  getmemberData();