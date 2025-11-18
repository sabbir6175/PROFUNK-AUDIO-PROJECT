const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const icon = document.getElementById("menuIcon");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  if (navLinks.classList.contains("open")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});
