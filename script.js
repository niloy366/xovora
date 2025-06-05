const text = document.getElementById("animated-text");
const phrases = [
  "I am a graphic designer",
  "I love creating brands",
  "I design creative stories"
];

let i = 0;
setInterval(() => {
  text.textContent = phrases[i];
  i = (i + 1) % phrases.length;
}, 3000);

