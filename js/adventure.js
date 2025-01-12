
let currentSlide = 0;
const slides = document.querySelectorAll(".slider img");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Change slide on image click
slides.forEach((slide) => {
  slide.addEventListener("click", nextSlide);
});

// Show the first slide
showSlide(currentSlide);

function toggleMenu() {
  const menuList = document.querySelector(".menuList");
  menuList.classList.toggle("active");
  const menuIcon = document.querySelector(".menuIcon");
  menuIcon.classList.toggle("active");
}
