const container = document.querySelector(".container");
const gridSizeInput = document.querySelector("#gridSize");
const createSquares = document.querySelector("#createSquares");
const randomColors = document.querySelector(".random");
const reset = document.querySelector(".reset");

let isDrawing = false;
reset.style.display = "none";

let generateRamdomColors = false;

randomColors.addEventListener("click", () => {
  generateRamdomColors = !generateRamdomColors;
  if (generateRamdomColors) {
    randomColors.style.backgroundColor = "#808c8c";
  } else {
    randomColors.style.backgroundColor = "#fff";
  }
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

create = (gridSize) => {
  container.innerHTML = "";
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("cell");
    square.style.width = `calc(100%/${gridSize})`;
    square.style.height = `calc(100%/${gridSize})`;
    container.appendChild(square);
  }
};

createSquares.addEventListener("click", () => {
  const gridSize = parseInt(gridSizeInput.value);

  create(gridSize);
});

//colouring cells
container.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("cell")) {
    isDrawing = true;
    if (generateRamdomColors) {
      e.target.style.backgroundColor = getRandomColor();
    } else {
      e.target.style.backgroundColor = "#333";
    }
  }

  reset.style.display = "block";
});

container.addEventListener("mouseover", (e) => {
  if (isDrawing && e.target.classList.contains("cell")) {
    if (generateRamdomColors) {
      e.target.style.backgroundColor = getRandomColor();
    } else {
      e.target.style.backgroundColor = "#333";
    }
  }
});

document.addEventListener("mouseup", () => {
  isDrawing = false;
});

reset.addEventListener("click", (e) => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "";
  });
  reset.style.display = "none";
});
