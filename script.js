// Simple fade-in animation on scroll
const sections = document.querySelectorAll(".section");

const observer = new Observer(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(30px)";
  section.style.transition = "all 1s ease";
  observer.observe(section);
});
