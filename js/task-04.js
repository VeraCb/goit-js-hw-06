
let counterValue = 0;

let decrementBtn = document.querySelector('[data-action="decrement"]');
let incrementBtn = document.querySelector('[data-action="increment"]');
let spanValue = document.getElementById('value')


// adaug actiune pentru butonul de scadere a valorii
decrementBtn.addEventListener('click', function() {
  counterValue--;
  spanValue.textContent = counterValue;
});

// adaug actiune la butonul de crestere a valorii
incrementBtn.addEventListener('click', function() {
  counterValue++;
  spanValue.textContent = counterValue;
})