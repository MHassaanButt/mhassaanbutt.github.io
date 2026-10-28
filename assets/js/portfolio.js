const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    }
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();

const focusCopy = {all: "I work across computer vision, multimodal learning, and applied AI—connecting research ideas to reliable systems people can use.", industry: "I build AI applications and vision pipelines, from model development to deployment. Explore my software projects and industry experience below.", research: "My research spans deep learning and computer vision. At NMBU, I work on multimodal environmental data and scientific AI."};
document.querySelectorAll('[data-focus]').forEach(button => button.addEventListener('click', () => {document.querySelectorAll('[data-focus]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));document.querySelector('.hero-lede').textContent = focusCopy[button.dataset.focus];}));
