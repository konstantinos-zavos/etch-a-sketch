const container = document.querySelector('#container');

for ( i = 0; i < 256; i++) {
    const singleSquare = document.createElement('div');
    singleSquare.classList.add('squares');
    container.appendChild(singleSquare);
}

// const squares = document.querySelectorAll(".squares");
// squares.forEach((squares) => {

//   squares.addEventListener('mouseover', () => {
//     squares.classList.remove('squares');
//     squares.classList.remove('squares-white')
//     squares.classList.add('squares-black');
//   });

//   squares.addEventListener('click', () => {
//     squares.classList.remove('squares');
//     squares.classList.add('squares-white');
//   });

// });

function refreshPage() {
  window.location.reload();
}


function original() {
const squares = document.querySelectorAll(".squares");
squares.forEach((squares) => {
squares.style.opacity = 1
  squares.addEventListener('mouseover', () => {
    squares.style.backgroundColor = 'black'
  });

  squares.addEventListener('click', () => {
    squares.style.backgroundColor = 'white'
  });

});
}

original();


function rainbow() {
  const squares = document.querySelectorAll(".squares");
  squares.forEach((squares) => {
  squares.style.opacity = 1
    squares.addEventListener('mouseover', () => {
      squares.style.backgroundColor = "#" + (Math.random() * 0xFFFFFF<<0).toString(16);
    });
  
    squares.addEventListener('click', () => {
      squares.style.backgroundColor = 'white'
    });
  
  });
  }

function clearCanvas() {
  const squares = document.querySelectorAll(".squares");
  squares.forEach((squares) =>{
  squares.style.backgroundColor = 'white'
})
}




// grayscale problem = It also changes the existing opacity of the divs so it's buggy

function grayscale() {
  const squares = document.querySelectorAll(".squares");

  squares.forEach((squares) => {
    squares.style.opacity = 0.1
    squares.addEventListener('mouseover', () => {
      squares.style.backgroundColor = 'black'
      squares.style.opacity = parseFloat(squares.style.opacity) + 0.1;
    });
  
    squares.addEventListener('click', () => {
      squares.style.backgroundColor = 'white'
    });
  
  });
  }

function changeSize() {
  alert("This option is not currently working. Sorry for the inconvenience.")
}










// IDEA 1 - Gia na boresw na kanw osa div tetragona thelw mesa sto container
// tha prepei na eine divs flexbox opou tha pianei olo to place pou borei na piasei to div tetragono
// px ama grapsoume to value 1, tha piasei OLO to container to ena div pou tha ftiaksoume
// kai episis ama eine 2 to idio ktlp ktlp.
// OPote prepei me CSS FLEXBOX to div pou tha ftiaxnete na pianei olo to container
// opote How to make a div fill the whole container in flexbox. 
