function changeButton(x) {
x.classList.toggle("change");
};

const menuBtn = document.getElementById('burger');

function toggleMenu() {
  const nav = document.getElementById('menu');
  nav.classList.toggle('active');
};

menuBtn.addEventListener('click', toggleMenu);

//

//


//When a function is called by an event listener, it is given information about the event. In this case, the event (evt) is set to 'preventDefault', stopping the page from reloading when the submit button of the form is pressed. The display of the 'status' element is also set to 'block.
  submittedForm = (evt) => {
  evt.preventDefault();
  document.getElementById('status').style.display = 'block';
  document.getElementById('submitbutton').style.display = 'none';
  };

//Finally, an event is added to the button, to, when clicked, trigger the 'submittedForm' function, making the phrase appear.
    document.getElementById("submitbutton").addEventListener("click",submittedForm);

//

//

let db = new PouchDB("answers");

let newAnswer = {
  _id: new Date().toISOString(),
  name: document.getElementById("Fname").value,                       //created by following the lab sheet from 19 of the academic year 2021/2022
  email: document.getElementById("Email").value,
  subject: document.getElementById("Subject").value,
  message: document.getElementById("Message").value,
};

document.getElementById("submitbutton").addEventListener("click", addAnswer);

db.put(newAnswer);
