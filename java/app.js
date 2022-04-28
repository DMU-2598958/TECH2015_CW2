  function changeButton(x) {
  x.classList.toggle("change");
};

  const menuBtn = document.getElementById('burger');

  function toggleMenu() {
    const nav = document.getElementById('menu');
    nav.classList.toggle('active')
  };

  menuBtn.addEventListener('click', toggleMenu);


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

//To create the lightbox/gallery of images, the first step was creating a function to open and close the gallery. That was done by referring to the element, 'Modal', and change his display between 'block' and 'none'.
function openModal() {
  document.getElementById("Modal").style.display = "block";
};
function closeModal() {
  document.getElementById("Modal").style.display = "none";
};

var slideRatio = 1;
displaySlides(slideRatio);

//To create the next/previous controls, a function was created to change its values between 1 and -1.
function plusSlides(n) {
  displaySlides(slideRatio += n);
};

//Match the number of the thumbnails to the slides.
function currentSlide(n) {
  displaySlides (slideRatio = n);
};

//Function created to change and control the slides.
function displaySlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideRatio = 1};
  if (n < 1) {slideRatio = slides.length};
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  slides[slideRatio-1].style.display = "block";
};

//More knowledge should be put into JavaScript in the future. There is a general understanding of how to produce the modal, however, is quite difficult to explain everything that was used and why.



//When a function is called by an event listener, it is given information about the event. In this case, the event (evt) is set to 'preventDefault', stopping the page from reloading when the submit button of the form is pressed. The display of the 'status' element is also set to 'block.
  submittedForm = (evt) => {
  evt.preventDefault();
  document.getElementById("status").style.display = 'block';
  document.getElementById('submitbutton').style.display = 'none';
  };

//Finally, an event is added to the button, to, when clicked, trigger the 'submittedForm' function, making the phrase appear.
    //document.getElementById("submitbutton").addEventListener("click",submittedForm);
