/* ***** Variables ***** */

const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const carousel = document.querySelector(".carousel");
const allCarouselItems = carousel.querySelectorAll(".inner-cont");
const menuBtn = document.querySelector(".menu-btn");
const naviagationMenu = document.querySelector(".header-list");

let carouselItem = carousel.querySelector(".inner-cont");
let slidePos = 0;

/* ***** Main Code ***** */

// left carousel btn
leftBtn.addEventListener("click", () => {
  rightBtn.disabled = false;

  let carouselItemWidth = carouselItem.getBoundingClientRect().width;
  carousel.style.transform = `translate(${-(
    ++slidePos * carouselItemWidth +
    slidePos * 80
  )}px)`;

  if (slidePos == allCarouselItems.length - 1) leftBtn.disabled = true;
});

// right carousel btn
rightBtn.addEventListener("click", () => {
  leftBtn.disabled = false;

  if (slidePos == 0) return;

  let carouselItemWidth = carouselItem.getBoundingClientRect().width;
  carousel.style.transform = `translate(-${
    --slidePos * carouselItemWidth + slidePos * 80
  }px)`;

  if (slidePos == 0) rightBtn.disabled = true;
});

// navigation menu btn
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  naviagationMenu.classList.toggle("open");
});
