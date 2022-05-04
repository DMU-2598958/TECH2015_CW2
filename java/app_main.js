//Toggle between showing and hiding the navigation menu links when the user clicks on the burger menu. To do that we use CSS selectors

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
