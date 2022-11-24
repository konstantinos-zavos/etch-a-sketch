const container = document.querySelector('#container');

for ( i = 0; i < 255; i++) {
    const singleSquare = document.createElement('div');
    singleSquare.classList.add('squares');
    container.appendChild(singleSquare);
}

const toggleColor = container.querySelectorAll('squares');

// we use the .forEach method to iterate through each button
toggleColor.forEach((squares) => {

  // and for each one we add a 'click' listener
  squares.addEventListener('click', () => {
    alert("works")
  });
});