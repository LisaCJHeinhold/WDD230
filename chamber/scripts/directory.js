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
      cards.appendChild(card);
    }); // end of forEach loop
    
  }; // end of function expression
  getmemberData();