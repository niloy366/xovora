// Text animation
const text = document.getElementById("animated-text");
const phrases = [
  "I’m a graphic designer & developer",
  "I create clean, modern brands",
  "I design visual stories"
];
let i = 0;
if (text) {
  setInterval(() => {
    text.textContent = phrases[i];
    i = (i + 1) % phrases.length;
  }, 3000);
}

// Mobile nav toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Dark mode toggle
const darkToggle = document.getElementById("dark-mode-toggle");
if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}
