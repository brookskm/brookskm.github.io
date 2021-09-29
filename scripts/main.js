/* Navbar was created following W3Schools guide https://www.w3schools.com/howto/howto_js_navbar_sticky.asp */

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}