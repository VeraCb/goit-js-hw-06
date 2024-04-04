const input = document.getElementById('validation-input');

input.addEventListener('input', function() {

  const passLength = parseInt(input.getAttribute('data-length'));
  if (input.value.length === passLength) {
    input.classList.remove('invalid');
    input.classList.add('valid'); 
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid'); 
  }
});
input.addEventListener('blur', function() {
  if (input.classList.contains('invalid')) {
    input.value = '';
  }
});