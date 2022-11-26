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




// RGB code - Might use it later

// const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
// const r = randomBetween(0, 255);
// const g = randomBetween(0, 255);
// const b = randomBetween(0, 255);
// const rgb = `rgb(${r},${g},${b})`;

// function rainbow() {
// const rainbow = document.getElementById('rainbow');
// rainbow.addEventListener('click', () => {
//     const element = document.querySelector('.squares-black');
//     element.style.backgroundColor = rgb;
// })
// }

// Another RBG code snippet


// let colors = ['#ff0000', '#00ff00', '#0000ff'];
// let random_color = colors[Math.floor(Math.random() * colors.length)];
// document.getElementById('squares-black').style.color = random_color;

// Skeftome na allaksw ton tropo pou allazo to xroma - px na min eine me div change, alla apla me 
// me javascirpt na allazei to xroma apo aspro se mavro
// meta na kanw to grayscale me kapoio function pou tha ginete activate me to button
// kai meta to rgb pou exw 2 viable codes