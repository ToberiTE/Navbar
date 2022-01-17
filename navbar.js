const nav = document.querySelector(".primary-nav");
const toggle = document.querySelector(".nav-toggle");

toggle.addEventListener("click", () => {
  var visible = nav.getAttribute("data-visible");
  visible === "false"
    ? nav.setAttribute("data-visible", "true") &
      toggle.setAttribute("aria-expanded", "true")
    : nav.setAttribute("data-visible", "false") &
      toggle.setAttribute("aria-expanded", "false");
});

window.addEventListener("resize", () => {
  nav.style.transition = "none";
  setTimeout(() => {
    nav.style.transition = "transform 250ms ease";
  }, 100);
});
