const navmenu = document.getElementById("nav-menu"),
  navtoggle = document.getElementById("nav-toggle"),
  navclose = document.getElementById("nav-close");

//   Menu terbuka
if (navtoggle) {
  navtoggle.addEventListener("click", () => {
    navmenu.classList.add("show-menu");
  });
}

// Menu sembunyi
if (navclose) {
  navclose.addEventListener("click", () => {
    navmenu.classList.remove("show-menu");
  });
}

// Menghilangkan menu
const navlink = document.querySelectorAll(".nav--link");

const linkAction = () => {
  const navmenu = document.getElementById("nav-menu");
  navmenu.classList.remove("show-menu");
};
navlink.forEach((n) => n.addEventListener("click", linkAction));

// shadow header
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

// welcome user
const usernameInput = prompt("Please enter your name:");
const usernameElement = document.getElementById("username");

usernameElement.innerHTML = `Hello, ${usernameInput}!<br>Welcome to our website, Furniture.`;

// show scroll up
const scrollup = () => {
  const scrollup = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollup.classList.add("show-scroll")
    : scrollup.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollup);
