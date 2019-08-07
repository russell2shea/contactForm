

document.addEventListener("DOMContentLoaded", function(){
  
  const card = document.querySelector('.card');
  card.addEventListener( 'click', function() {
    //prevent default, run try catch of post then..
    card.classList.toggle('is-flipped');
    //if success

    const statusElement = document.querySelector('.status');
    const messageElement = document.querySelector('.message');

    statusElement.innerHTML = '<div class="success"><p>✓</p></div>';
    messageElement.innerHTML = '<div class="success-message">Message Sent</div>';
  });



});// when ready 






// add whe click do animation and show yes button 
// success btn click toggles back to submit 
// do same but make a error button
// add listener to when all 3 field are done to add class to submit button
// add try catch and submit call to tie into submit animations
