let past = 0;
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > past + 10) {
    hideNav();
  } else if (window.pageYOffset < past - 10) {
    showNav();
  }
  past = window.pageYOffset;
});

function hideNav() {
  if (!navbar.classList.contains("hide")) {
    navbar.classList.add("hide");
  }
}
function showNav() {
  if (navbar.classList.contains("hide")) {
    navbar.classList.remove("hide");
  }
}
