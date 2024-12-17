let mobileMenu = document.getElementById("mobile-menu");
let navlist = document.querySelector(".nav-list");

mobileMenu.addEventListener('click', () => {
  navlist.classList.toggle("active");
})