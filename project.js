
//Hamburger function
function myFunction(x) {
  x.classList.toggle("change");
}
//Navbar function after clicking the Hamburger
document.getElementById("container").addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("navbartoggle");
})

document.querySelector(".homepagepic").addEventListener("click",function(){
  window.open("index.html");
})

document.querySelector(".spspic").addEventListener("click",function(){
  window.open("https://rudra-dey-sarkar.github.io/Rock-Paper-Scissor-Game/");
})


