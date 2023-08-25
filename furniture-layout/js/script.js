const burger = document.querySelector(".header__burger");
const header = document.querySelector(".header");

burger.addEventListener("click", () => {
  header.classList.toggle("active");
  burger.classList.toggle("active");
  document.body.classList.toggle("lock");
});
