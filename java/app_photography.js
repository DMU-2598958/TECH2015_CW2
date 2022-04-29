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

//To create the lightbox/gallery of images, the first step was creating a function to open and close the gallery. That was done by referring to the element, 'Modal', and change his display between 'block' and 'none'.
function openModal() {
  document.getElementById("Modal").style.display = "block";
}
function closeModal() {
  document.getElementById("Modal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

//To create the next/previous controls, a function was created to change its values between 1 and -1.
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Match the number of the thumbnails to the slides.
function currentSlide(n) {
  showSlides (slideIndex = n);
}

//Function created to change and control the slides.
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//More knowledge should be put into JavaScript in the future. There is a general understanding of how to produce the modal, however, is quite difficult to explain everything that was used and why.
