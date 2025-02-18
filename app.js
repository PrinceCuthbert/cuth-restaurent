const btnScrollToHome = document.querySelector(".btn__to__home");
const btnScrollToMenu = document.querySelector(".btn__to__menu");
const btnScrollToTestimony = document.querySelector(".btn__to__testimony");
const btnScrollToOrder = document.querySelector(".btn__to__order");

const sectionHome = document.querySelector(".intro-section");
const sectionMenu = document.querySelector(".menu-section");
const sectionTestimony = document.querySelector(".testimonial-section");
const sectionOrder = document.querySelector(".order-section");

btnScrollToHome.addEventListener("click", function (e) {
  // console.log("Button clicked");
  sectionHome.scrollIntoView({ behavior: "smooth" });
});

btnScrollToMenu.addEventListener("click", function (e) {
  sectionMenu.scrollIntoView({ behavior: "smooth" });
});

btnScrollToTestimony.addEventListener("click", function (e) {
  sectionTestimony.scrollIntoView({ behavior: "smooth" });
});

btnScrollToOrder.addEventListener("click", function (e) {
  sectionOrder.scrollIntoView({ behavior: "smooth" });
});
