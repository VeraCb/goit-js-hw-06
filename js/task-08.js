document.querySelector('.login-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  var form = document.querySelector('.login-form');


  var formElements = form.elements;

  var email = formElements.email.value;
  var password = formElements.password.value;

  if (email == 'example@example.com' && password == 'password') {
  
    alert('Autentificare reușită!');
  } else {
 
    alert('Email sau parolă incorecte. Te rog să încerci din nou.');
  }

  // Resetează 
  form.reset();
});