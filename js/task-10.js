function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

var input = document.querySelector('input');
var createButton = document.querySelector('[data-create]');
var destroyButton = document.querySelector('[data-destroy]');
var boxesContainer = document.getElementById('boxes');

// Adaugă un eveniment de click pe butonul de creare
createButton.addEventListener('click', function() {
  var amount = parseInt(input.value);

  // Verifică dacă numărul introdus este valid
  if (amount && amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert('Vă rugăm să introduceți un număr între 1 și 100.');
  }
});

// Adaugă un eveniment de click pe butonul de ștergere
destroyButton.addEventListener('click', function() {
  destroyBoxes();
});

// Funcția care creează colecția de elemente
function createBoxes(amount) {
  // Șterge conținutul existent din div#boxes
  boxesContainer.innerHTML = '';

  // Creează și adaugă elementele în div#boxes
  var size = 30;
  for (var i = 0; i < amount; i++) {
    var box = document.createElement('div');
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

// Funcția care șterge colecția de elemente
function destroyBoxes() {
  // Șterge conținutul din div#boxes
  boxesContainer.innerHTML = '';
}