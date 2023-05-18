menubutton = document.querySelector("#menu-button");
menubutton.addEventListener('click', () => {
    document.querySelector("#navbar").classList.toggle('active');
    document.querySelector("#menu-open").classList.toggle('active');
    document.querySelector("#menu-close").classList.toggle('active');
});
  // meet and greet banner
let messagedate = new Date();
if (messagedate.getDay() == 1 || messagedate.getDay() == 2) {
    document.querySelector("#meet-greet").classList.add('active');
};