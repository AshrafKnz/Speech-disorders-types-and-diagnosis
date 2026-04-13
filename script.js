window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }

  const hero = document.querySelector(".hero");
  if (hero) {
    hero.classList.add("loaded");
  }
});

/* SCROLL ANIMATION */
const elements = document.querySelectorAll(
  ".content h2, .content h3, .content p, .content ul"
);

elements.forEach(el => el.classList.add("reveal"));

function revealOnScroll() {
  const trigger = window.innerHeight * 0.88;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* PARALLAX */
window.addEventListener("scroll", () => {
  const img = document.querySelector(".hero img");
  if (img) {
    img.style.transform =
      `translateY(${window.scrollY * 0.15}px) scale(1.05)`;
  }
});