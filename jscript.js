let grid;
let lastGridSize = 16;
let randomColor = false;
let colors = ["red", "green", "blue", "yellow", "purple", "pink", "orange"];

const drawingField = document.querySelector(".drawingField") ;

const buttons = document.querySelectorAll("button");
    for (const btn of buttons) {
        btn.addEventListener("mouseover", (e) => {
            btn.style.backgroundColor = "yellow";
        });
        btn.addEventListener("mouseleave", (e) => {
            btn.style.backgroundColor = "white";
        });
    }

const deleteBtn = document.querySelector("#deleteBtn");
    deleteBtn.addEventListener("click", () => drawGrid());

const sizeBtn = document.querySelector("#sizeBtn");
    sizeBtn.addEventListener("click", () => {
        setGridSize();
        drawGrid();
    });

const randomBtn = document.querySelector("#randomBtn");
    randomBtn.addEventListener("mousedown", () => toggleRandom());

function toggleRandom() {
    if(!randomColor) {
        randomBtn.textContent = "Random";
        randomColor = true;
    }
    else {
        randomBtn.textContent = "Black";
        randomColor = false;
    }
}

function setGridSize() {
    lastGridSize = +(prompt("Bitte Grid-Size (1-64) eingeben."));
    while(!(lastGridSize > 0 && lastGridSize <= 64))
        lastGridSize = +(prompt("Bitte Grid-Size (1-64) eingeben."));
}

function createCell() {
    let cell = document.createElement("div");
        cell.style.display = "flex";
        cell.style.flexGrow = 1;
        cell.style.backgroundColor = "white";
        cell.style.outline = "2px solid grey";
        cell.addEventListener("mouseover", (e) => colorCell(e));
    return cell;
}

function drawGrid(gridSize = lastGridSize) {
    if(drawingField.hasChildNodes()) {
        drawingField.removeChild(grid);
    }
    grid = document.createElement("div");
    grid.style.display = "flex";
    grid.style.flexGrow = 1;
    for(let i=0; i<gridSize; i++) {
        const column = document.createElement("div");
        column.style.display = "flex";
        column.style.flexDirection = "column";
        column.style.flexGrow = 1;
        for (let j=0; j<gridSize; j++) {
            column.appendChild(createCell());
        }
        grid.appendChild(column);
    }
    drawingField.appendChild(grid);
}

function colorCell(event) {
    if(randomColor) {
        //color = random color from colors[]
        event.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }
    else {
        //color = black
        event.target.style.backgroundColor = "black";
    }
    
}

drawGrid();