let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    // this.setAttribute("aria-expanded", "false");
    // this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    // this.setAttribute("aria-label", "close menu");
    // this.setAttribute("aria-expanded", "true");
  }
});

// nav bar toggle functionality
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("slider");
let mainmenu = document.getElementById("main");

// document.addEventListener('DOMContentLoaded', function () {
//     navBarToggle.addEventListener('click', function () {
//         mainNav.classList.toggle('active');
//     });
// });
function navbarToggle() {
  mainNav.classList.toggle("closed");
  // mainmenu.classList.toggle('opened');
}
// navv bar toggle functionality ends here
