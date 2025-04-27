const colors = ["#FFD1DC", "#D1FFD7", "#D1E0FF", "#FFF6D1", "#E8D1FF"];
const messages = [
  "Feeling playful!",
  "Feeling calm!",
  "Feeling energetic!",
  "Feeling dreamy!",
  "Feeling thoughtful!"
];

function randomMood() {
  const color = colors[Math.floor(Math.random() * colors.length)];
  const message = messages[Math.floor(Math.random() * messages.length)];
  
  document.body.style.backgroundColor = color;
  document.getElementById('mood-container').innerHTML = `<h1>${message}</h1>`;
}

// Trigger mood change
document.addEventListener('keydown', randomMood);
document.addEventListener('click', randomMood);
document.addEventListener('mousemove', randomMood);