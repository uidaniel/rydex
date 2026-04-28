function switchTab(type, el) {
  document
    .querySelectorAll(".how-tab")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelectorAll(".how-steps")
    .forEach((s) => s.classList.remove("active"));
  el.classList.add("active");
  document.getElementById(type + "-steps").classList.add("active");
}

// Scroll reveal
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 60);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
);
revealEls.forEach((el) => observer.observe(el));

// Sticky nav change on scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.style.background = "rgba(0,0,0,0.95)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.7)";
  }
});
