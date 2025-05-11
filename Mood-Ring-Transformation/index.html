// Define mood states with associated colors and emojis
const moods = [
  { color: '#7FFFD4', emoji: '😊' }, // Calm
  { color: '#FFD700', emoji: '😄' }, // Happy
  { color: '#FF69B4', emoji: '😍' }, // Love
  { color: '#FF4500', emoji: '😠' }, // Angry
  { color: '#1E90FF', emoji: '😢' }, // Sad
  { color: '#800080', emoji: '😴' }  // Sleepy
];

let currentMoodIndex = 0;

// Function to update the mood
function updateMood() {
  const mood = moods[currentMoodIndex];
  
  // Smoothly transition background color
  document.body.style.transition = 'background-color 2s ease';
  document.body.style.backgroundColor = mood.color;
  
  // Create and animate emoji
  const emojiElement = document.createElement('div');
  emojiElement.textContent = mood.emoji;
  emojiElement.style.position = 'absolute';
  emojiElement.style.top = `${Math.random() * 80 + 10}%`;
  emojiElement.style.left = `${Math.random() * 80 + 10}%`;
  emojiElement.style.fontSize = '3rem';
  emojiElement.style.opacity = '0';
  emojiElement.style.transition = 'opacity 1s ease, transform 1s ease';
  emojiElement.style.transform = 'scale(0.5)';
  
  document.body.appendChild(emojiElement);
  
  // Trigger animation
  requestAnimationFrame(() => {
    emojiElement.style.opacity = '1';
    emojiElement.style.transform = 'scale(1)';
  });
  
  // Remove emoji after animation
  setTimeout(() => {
    emojiElement.style.opacity = '0';
    emojiElement.style.transform = 'scale(0.5)';
    setTimeout(() => {
      document.body.removeChild(emojiElement);
    }, 1000);
  }, 2000);
  
  // Update mood index
  currentMoodIndex = (currentMoodIndex + 1) % moods.length;
}

// Event listeners for user interactions
document.addEventListener('mousemove', () => {
  // Throttle updates to once every 3 seconds
  if (!updateMood.throttle) {
    updateMood();
    updateMood.throttle = true;
    setTimeout(() => {
      updateMood.throttle = false;
    }, 3000);
  }
});

document.addEventListener('keydown', () => {
  updateMood();
});
