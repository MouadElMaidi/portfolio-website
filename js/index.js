//Navigation Bar dropdown animation

const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
  const navBar = document.querySelector(".nav");
  navBar.classList.toggle("nav-open");
});
