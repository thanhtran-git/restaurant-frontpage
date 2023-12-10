const revealedElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0, len = revealedElements.length; i < len; i++) {
    const isElementOnScreen =
      revealedElements[i].getBoundingClientRect().top < window.innerHeight;

    if (isElementOnScreen) {
      revealedElements[i].classList.add("revealed");
    } else {
      revealedElements[i].classList.remove("revealed");
    }
  }
};

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
