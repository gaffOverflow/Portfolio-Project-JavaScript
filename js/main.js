const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");
const navLink = document.querySelectorAll(".nav__item");

/*=============== TOGGLE MENU ===============*/

navToggle.addEventListener("click", () => {
  navMenu.classList.add("nav__show");
});
navClose.addEventListener("click", () => {
  navMenu.classList.toggle("nav__show");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("nav__show");
  });
});

/*=============== SWIPER PROJECTS ===============*/

let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  // mousewheel: true,
  // keyboard: true,
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

/*=============== SWIPER TESTIMONIAL ===============*/

let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

// const sections = document.querySelectorAll("section[id]");

// const scrollActive = () => {
//   const scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 58,
//       sectionId = current.getAttribute("id"),
//       sectionsClass = document.querySelector(
//         ".nav__menu a[href*=" + sectionId + "]"
//       );

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       sectionsClass.classList.add("active-link");
//     } else {
//       sectionsClass.classList.remove("active-link");
//     }
//   });
// };
// window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== DARK LIGHT THEME ===============*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
origin: 'top',
distance: '60px',
duration: 2500,
delay: 400,

// reset: true /*Animations repeat*/

})

sr.reveal('.home__data, .projects__container, .testimonial__container, .footer__container')
sr.reveal('.home__info div', {delay: 400, origin: 'bottom', interval: 100})
sr.reveal('.skills__content:nth-child(1), .contact__content:nth-child(1)', {origin: 'left'})
sr.reveal(".skills__content:nth-child(2), .contact__content:nth-child(2)", {
  origin: "right",
});
sr.reveal('.qualification__content, .services__card', {interval: 100})
