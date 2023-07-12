const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format( new Date());
document.querySelector("#date").textContent = fulldate;

// url api stuff
let url = new URL(window.location);
let params = url.searchParams;

//remove
for (const p of params) {
    console.log(p)
}

document.querySelector('#name').textContent = params.get("fname");
document.querySelector('#email').textContent = params.get("email");
document.querySelector('#phone').textContent = params.get("phone");
document.querySelector('#option').textContent = params.get("option");
document.querySelector('#fruit').textContent = params.get("aFruit");
document.querySelector('#specIn').textContent = params.get("Instructions");