// Stabilire il numero delle griglie

/* const easyBox = 100;
const mediumBox = 81;         // <<< prove
const hardBox = 49; */ 

const difficulty = document.getElementById("mode-selector");
const start = document.getElementById("start");

// Selezionare tipologia di griglia desiderata
start.addEventListener("click", function({
    const mode = difficulty.value;
    const gridsTotNumbers = 
    const numbers = progressiveNumbersArray(numbersOfGrids);
    grid.innerHTML = "";
    for (let i = 0; i < )
}))


// Generare griglie a seconda della modalità selezionata


// FUNZIONI

// Generare numeri nelle singole caselle

function get100Numbers() {
    for (let i = 0; i <= 100; i++) {
        console.log(i);
    }
}


// Generare le singole caselle

function generateNewBox(testo) {
    const newBox = document.createElement("div");
    newBox.classList.add("grid-element");
    newBox.innerHTML = `${testo}`;
    return newBox;
}