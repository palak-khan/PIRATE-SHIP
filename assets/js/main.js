/*=============== SHOW MENU ===============*/

function navBar() {
  /////////--SHOW-MENU--////////
  const navMenu = document.getElementById("nav-menu");
  const navClose = document.getElementById("nav-close");
  const navToggle = document.getElementById("nav-toggle");
  const navLink = document.querySelectorAll(".nav--link");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }
  /////////--CLOSE-MENU--////////

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
  /*=============== REMOVE MENU MOBILE ===============*/
  function linkAction() {
    navMenu.classList.remove("show-menu");
  }
  navLink.forEach((n) => n.addEventListener("click", linkAction));
}
navBar();

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
