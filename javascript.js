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
    squares.classList.add('squares-black');
  });
});