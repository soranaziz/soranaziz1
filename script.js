document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".animate__animated");
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("animate__fadeInUp");
      }
    });
  });
  
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }