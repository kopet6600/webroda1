// toggle active a menu
const navbarNav = document.querySelector(".navbar-nav");
//  toggle search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = () => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};
// ketika menu diklk
document.querySelector("#a-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik random

const amenu = document.querySelector("#a-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!amenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
