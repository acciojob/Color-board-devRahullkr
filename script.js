//your JS code here. If required.
const container = document.getElementById('container');
const TOTAL_SQUARES = 800;


function getRandomColor() {
const letters = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
return color;
}


for (let i = 0; i < TOTAL_SQUARES; i++) {
const square = document.createElement('div');
square.classList.add('square');
square.addEventListener('mouseenter', () => {
  const color = getRandomColor();
  square.style.backgroundColor = color;

  setTimeout(() => {
    square.style.backgroundColor = '#1d1d1d';
  }, 1000);
});


container.appendChild(square);
}