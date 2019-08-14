document.addEventListener("DOMContentLoaded", function(){
  
  let card = document.querySelector('.card');
  let emailInput = document.querySelector('input[name="emailField"]');
  let nameInput = document.querySelector('input[name="firstname"]');
  let emailError = document.querySelector('.error-email');
  let nameError = document.querySelector('.error-name');
  
  // submit button Function
  card.addEventListener( 'click', function() {
    event.preventDefault();
    let nameField = document.forms["contact"]["firstname"].value;
    let emailField = document.forms["contact"]["emailField"].value;

    // shake submit button if there are empty fields
     if(!nameField || !emailField){
       document.querySelector('.card__face').classList.add('shake');
        setTimeout(function(){ 
          document.querySelector('.card__face').classList.remove('shake'); 
        }, 700);
     }
    
    // show name error and listen for blur
    if(!nameField ){
      nameError.style.display='inline';
      nameInput.onchange = function() {
        if (window.getComputedStyle(nameError).display === "inline") {
          nameError.style.display='none';
        }
      };
    }

    // show email error and listen for blur
    if(!emailField ){
      emailError.style.display='inline';
      emailInput.onchange = function() {
        if (window.getComputedStyle(emailError).display === "inline") {
          emailError.style.display='none';
        }
      };
    }

    // Show success
     if(emailField && nameField){
      card.classList.toggle('is-flipped');

      let statusElement = document.querySelector('.status');
      let messageElement = document.querySelector('.message');

      statusElement.innerHTML = '<div class="success"><p>✓</p></div>';
      messageElement.innerHTML = '<div class="success-message">Message Sent</div>';
    }

  });// card click event


});
