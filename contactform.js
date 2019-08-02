function contactForm(){

  document.addEventListener("DOMContentLoaded", function(){
    var current = null;
    var submitBtn = document.querySelectorAll('.submit');

    submitBtn[0].addEventListener("click", function(){
      console.log('hey'); 
      if (current) current.pause();

      current = anime({
        targets: '.contact_intro',
        height: '0px',
        easing: 'easeInOutQuad'
      });


      

    });
  }); 

} // conactForm


contactForm();