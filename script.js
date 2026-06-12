const currentPage = document.body.dataset.page;
const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach((link) => {
  link.classList.toggle("active", link.dataset.nav === currentPage);
});
