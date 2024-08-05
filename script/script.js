// Initialize AOS (Animate On Scroll) library
AOS.init({
  duration: 2000,
  easing: "ease-in-out",
  once: false,
  mirror: false,
});

// Countdown function
function countDown(seconds, elementId, maxTime, interval) {
  const time = document.getElementById(elementId);

  const x = setInterval(() => {
    let actualTime = Number(time.innerText);
    actualTime = seconds++;
    if (actualTime >= maxTime) clearInterval(x);
    time.innerText = `${actualTime}`;
  }, interval);
}

// Initialize countdowns
countDown(0, "time", 3000, 1);
countDown(0, "time2", 320, 10);
countDown(0, "time3", 1000, 10);
countDown(0, "time4", 587, 10);

// Toggle navigation menu
const navLinks = document.getElementById("navLinks");
const menuButton = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  navLinks.style.display = "flex";
  navLinks.classList.toggle("hidden");
  menuButton.classList.toggle("active");
});
