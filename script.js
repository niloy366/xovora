const text = document.getElementById("animated-text");
const phrases = [
  "I am a graphic designer",
  "I design modern brands",
  "I create digital stories"
];

let i = 0;
setInterval(() => {
  text.textContent = phrases[i];
  i = (i + 1) % phrases.length;
}, 3000);
