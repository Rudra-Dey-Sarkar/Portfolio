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
  window.open("Rudra Dey Sarkar Resume.pdf");
})

//document.getElementById("homebar").classList.add("active");

let sections = document.querySelectorAll('section');

let navbarLinks = document.querySelectorAll('header navbar a');

window.onscroll = () => {

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {

      navbarLinks.forEach(links => {

        links.classList.remove('active');

        document.querySelector('header navbar a [href*=' + id + ']').classList.add('active');

      });

    };

  });

};