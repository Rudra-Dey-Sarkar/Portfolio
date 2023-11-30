//Auto Type Function
var typed = new Typed(".auto-type", {
  strings: [" a Programmer", "a Web Developer", " Athelete", "a Gamer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})

//Hamburger function
function myFunction(x) {
  x.classList.toggle("change");
}
//Navbar function after clicking the Hamburger
document.querySelector("#container").addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("navbartoggle");
})
//CV function to donwload CV
document.querySelector(".cv").addEventListener("click", function () {
  window.open("Resume Will Soon Be Uploaded.pdf");
})
//Portfolio button to goto portfolio page
document.querySelector(".portfolio").addEventListener("click", function () {
window.open("project.html");
})



//Navbar highlight depend on the section of the page
let sections = document.querySelectorAll('section');

window.onscroll = () => {
  console.log(window.location.hash);
  let currentY = window.scrollY + 400;
  sections.forEach(sec => {
    if (currentY >= sec.offsetTop && currentY < sec.offsetTop + sec.offsetHeight) {
      console.log("Scrolled to = "+sec.getAttribute('id'));
      document.getElementById("nav"+sec.getAttribute('id')).classList.add('active');
    } else {
      document.getElementById("nav"+sec.getAttribute('id')).classList.remove('active');
    }
  });

};
