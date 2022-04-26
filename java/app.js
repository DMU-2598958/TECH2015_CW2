//To make the menu appear and disappear when pressed it was necessary to use JavaScript. Starting by creating two functions (a way of grouping lines of code, giving them a name): the first, called 'openMenu', that has the necessary settings for the menu to be seen; and the second, 'closeMenu' that returns the element to its original size.
openMenu = () => {
//Referencing HTML elements on Java is done using the 'document' object and, in this case, to reference an element using its Id, it is used the 'getElementById'.
//The reference is used to get the 'menu' and 'cover' elements and set the right position to '0', making them appear on the page.
  document.getElementById("menu").style.right = '0';
};

closeMenu = () => {
//The 'closeMenu' function sets the values back to their original way, putting the right position on the 'menu' and 'cover' back to '-100%'.
  document.getElementById("menu").style.right = '-100%';
};
//Finally, two Events were added. First, it was necessary to add the context, that being referencing the elements to which the event was to occur. That was done using the 'document' object to get the 'burger' and 'cover' elements. Then, to tell the browser what was supposed to happen, the 'click' event was added, along with what should happen. The event placed in the 'burger' should trigger the 'openMenu' function, and click on the 'cover' should trigger the 'closeMenu'.
  document.getElementById("burger").addEventListener("click",openMenu);


//When a function is called by an event listener, it is given information about the event. In this case, the event (evt) is set to 'preventDefault', stopping the page from reloading when the submit button of the form is pressed. The display of the 'status' element is also set to 'block.
    submittedForm = (evt) => {
      evt.preventDefault();
      document.getElementById("status").style.display = 'block';
      document.getElementById('submitbutton').style.display = 'none';
    };

//Finally, an event is added to the button, to, when clicked, trigger the 'submittedForm' function, making the phrase appear.
    document.getElementById("submitbutton").addEventListener("click",submittedForm);
