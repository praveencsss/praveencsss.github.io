const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0px)";
  });

});

/* Fade animation */

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

});

document.querySelectorAll(".project-card, .sidebar, .rightbar")
.forEach((el) => observer.observe(el));