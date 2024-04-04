const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');


fontSizeControl.addEventListener('input', function() {
  const fontSize = fontSizeControl.value;

  text.style.fontSize = `${fontSize}px`;
});