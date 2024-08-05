AOS.init({
  duration: 2000,
  easing: "ease-in-out",
  once: false,
  mirror: false,
});
 
const navLinks = document.getElementById("navLinks");
const Menu = document.getElementById("menu");

Menu.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
  Menu.classList.toggle("active");
});