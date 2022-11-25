const container = document.querySelector('#container');

for ( i = 0; i < 256; i++) {
    const singleSquare = document.createElement('div');
    singleSquare.classList.add('squares');
    container.appendChild(singleSquare);
}

const squares = document.querySelectorAll(".squares");
squares.forEach((squares) => {

  // and for each one we add a 'click' listener
  squares.addEventListener('mouseover', () => {
    squares.classList.remove('squares');
    squares.classList.remove('squares-white')
    squares.classList.add('squares-black');
  });

  squares.addEventListener('click', () => {
    squares.classList.remove('squares');
    squares.classList.add('squares-white');
  });

});

function refreshPage() {
  window.location.reload();
}


const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb = `rgb(${r},${g},${b})`;
