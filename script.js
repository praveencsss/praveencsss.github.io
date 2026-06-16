const texts = [
  "💻 Web Dev",
  "🐍 Python Enthusiast",
  "🛕 Spirituality"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {

  const currentText = texts[textIndex];

  if (!isDeleting) {
    typingElement.textContent =
      currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

  } else {
    typingElement.textContent =
      currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex++;

      if (textIndex >= texts.length) {
        textIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

/* Scroll Reveal */

ScrollReveal().reveal('.hero-content', {
  origin: 'bottom',
  distance: '80px',
  duration: 1200,
  delay: 200
});

ScrollReveal().reveal('.card, .project-card', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  interval: 150
});