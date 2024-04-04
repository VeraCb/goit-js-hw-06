function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

var button = document.querySelector('.change-color');
var colorSpan = document.querySelector('.color');


button.addEventListener('click', function() {
 
  var randomColor = getRandomHexColor();

  
  document.body.style.backgroundColor = randomColor;

  colorSpan.textContent = randomColor;
});

