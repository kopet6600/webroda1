// toggle active
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu diklk
document.querySelector("#a-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik random place for back

const amenu = document.querySelector("#a-menu");

document.addEventListener("click", function (e) {
  if (!amenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
