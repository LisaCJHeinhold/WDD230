let url = new URL(window.location);
let params = url.searchParams;

//remove
for (const p of params) {
    console.log(p)
}

document.querySelector('#name').textContent = params.get("name");
document.querySelector('#fruit').textContent = params.get("fruit");
document.querySelector('#specIn').textContent = params.get("specialInstructions");