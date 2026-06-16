```javascript
// Fade-in animation

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

}, {
  threshold: 0.1
});

document.querySelectorAll(
  ".sidebar, .project-card, .rightbar"
).forEach((el) => observer.observe(el));


// Hover effect for project cards

document.querySelectorAll(".project-card")
.forEach((card) => {

  card.addEventListener("mouseenter", () => {
    card.style.transform =
      "translateY(-8px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "translateY(0px)";
  });

});
```
