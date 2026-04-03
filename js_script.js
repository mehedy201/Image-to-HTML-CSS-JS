const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile_menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

/* Optional: click menu item = close menu */
document.querySelectorAll(".mobile_menu li").forEach(item => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});