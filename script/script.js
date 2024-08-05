AOS.init({
  duration: 2000,
  easing: "ease-in-out",
  once: false,
  mirror: false,
});

const navLinks = document.getElementById("navLinks");
const Menu = document.getElementById("menu");

Menu.addEventListener("click", () => {
  let isOpen = true;
  if (isOpen == false) {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
  navLinks.classList.toggle("hidden");
  Menu.classList.toggle("active");
});
