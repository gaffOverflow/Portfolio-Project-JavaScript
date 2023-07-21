const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");
const navLink = document.querySelectorAll(".nav__item");

/*=============== SHOW MENU ===============*/
navToggle.addEventListener("click", () => {
  navMenu.classList.add("nav__show");
});
navClose.addEventListener("click", () => {
  navMenu.classList.toggle("nav__show");
});

navLink.forEach( link => {
  link.addEventListener("click", () => {
  navMenu.classList.toggle("nav__show");
  })
})


/*=============== REMOVE MENU MOBILE ===============*/

/*=============== SWIPER PROJECTS ===============*/

/*=============== SWIPER TESTIMONIAL ===============*/

/*=============== EMAIL JS ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
