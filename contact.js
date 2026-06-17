// Scroll reveal
const els = document.querySelectorAll(".reveal");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 55);
        obs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
);
els.forEach((el) => obs.observe(el));

// Contact form (front-end only — no backend wired yet)
const form = document.getElementById("contactForm");
const success = document.getElementById("formSuccess");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // TODO: wire this up to a real endpoint / form service.
    success.classList.add("show");
    form.reset();
  });
}
