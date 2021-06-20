const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");

hamburger.addEventListener("click", mobileMenu)

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}