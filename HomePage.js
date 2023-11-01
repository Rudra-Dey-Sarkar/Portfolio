var typed = new Typed(".auto-type", {
  strings: [" a Programmer", "a Web Developer", "Athelete", "a Gamer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})

//hamburger function
function myFunction(x) {
  x.classList.toggle("change");
}

document.querySelector("#container").addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("navbartoggle");
})

document.querySelector(".cv").addEventListener("click", function () {
  window.open("Resume Will Soon Be Uploaded.pdf");
})

document.querySelector(".portfolio").addEventListener("click", function () {
  alert("The Page is Under Development!");
})

