// Mobile navigation toggle
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });
}

// Close the mobile menu after someone taps a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuToggle && navMenu) {
      navMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

// Friendly placeholder behavior for the contact form until a backend is added
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Thanks! Your message is ready for a future form setup.";
    contactForm.reset();
  });
}
