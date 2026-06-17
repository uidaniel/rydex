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

// Mobile menu toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
if (navToggle && navLinks) {
  const closeMenu = () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  };
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  // Close the menu after tapping a link
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });
}

// Highlight the active section link while scrolling
const sectionLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const sections = sectionLinks
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);
if (sections.length) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionLinks.forEach((a) =>
            a.classList.toggle(
              "active",
              a.getAttribute("href") === "#" + entry.target.id,
            ),
          );
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  sections.forEach((s) => spy.observe(s));
}
