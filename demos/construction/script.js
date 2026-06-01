// Mobile menu, before/after slider, and quote form message
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const slider = document.querySelector(".before-slider");
const beforePanel = document.querySelector(".before-panel");

if (slider && beforePanel) {
  slider.addEventListener("input", () => {
    beforePanel.style.width = `${slider.value}%`;
  });
}

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    if (status) {
      status.textContent = "Estimate request ready for future form setup.";
    }
    form.reset();
  });
});
