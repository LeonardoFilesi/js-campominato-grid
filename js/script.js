// Stabilire il numero delle griglie
const easyBox = 100;
const mediumBox = 81;
const hardBox = 49;

// Generare griglie partendo da easyBox

const numberOfSquares = 64;
const numbers = generateRandomNumbersArray(numberOfSquares);

const grid = document.querySelector(".grid");
for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    const newItem = generateGridItem(currentNumber);
    newItem.addEventListener("click", handleItemClick)
    grid.append(newItem);
}

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