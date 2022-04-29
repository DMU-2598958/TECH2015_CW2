function changeButton(x) {
x.classList.toggle("change");
};

const menuBtn = document.getElementById('burger');

function toggleMenu() {
  const nav = document.getElementById('menu');
  nav.classList.toggle('active')
};

menuBtn.addEventListener('click', toggleMenu);


//


//


let slideIndex = 0;
showSlides();

function showSlides() {
let i;
let slides = document.getElementsByClassName("slides");
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
};
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1};

slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 2500); // Change image every 2 seconds
};
