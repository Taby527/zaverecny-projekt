// funkce, roztáhnutí hamburger menu----------
const hamburger = document.getElementById("hamburger");
const navUL = document.getElementsById("nav-ul");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});
// ------------------------------------
