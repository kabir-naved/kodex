// Selections of html Element
const canvas = document.querySelector("canvas"),
  toolBtns = document.querySelectorAll(".tool"),
  fillColor = document.querySelector("#fillColor"),
  sizeSlider = document.querySelector("#sizeSlider"),
  colorBtns = document.querySelectorAll(".colors .option"),
  colorPicker = document.querySelector("#colorPicker"),
  clearCanvas = document.querySelector(".clearCanvas"),
  saveImage = document.querySelector(".saveImg"),
  ctx = canvas.getContext("2d");

const undoButton = document.querySelector("#undo");
const redoButton = document.querySelector("#redo");

// Variable use in code
let prevMouseX,
  prevMouseY,
  isDrawing = false,
  selectedTool = "pencil",
  brushWidth = 5,
  selectedColor = "#000";

// To save history to we can do undo and redo
let history = [],
  historyStep = -1;

// At initial canvas color
const setCanvasBackground = () => {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = selectedColor;
};

// Window event to load and allow to set the width, height to canvas
window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  setCanvasBackground();
  saveState(); //new
});

// Event to select and unselect the tools btn
toolBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".options .active").classList.remove("active");
    btn.classList.add("active");
    selectedTool = btn.id;
    console.log(selectedTool);
  });
});

// This function is used to start draw in canvas on mouse move
const startDraw = (e) => {
  // console.log(e);

  isDrawing = true;
  prevMouseX = e.offsetX;
  prevMouseY = e.offsetY;

  ctx.beginPath();
  ctx.lineWidth = brushWidth;
  ctx.strokeStyle = selectedColor;
  ctx.fillStyle = selectedColor;
  snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
};

// Draw pencil function
const drawPencil = (e) => {
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.shadowBlur = 0;
  ctx.stroke();
};

// Draw brush function
const drawBrush = (e) => {
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.shadowColor = selectedColor;
  ctx.shadowBlur = 15;
  ctx.stroke();
};

// Draw triangle function
const drawTriangle = (e) => {
  ctx.beginPath();
  ctx.moveTo(prevMouseX, prevMouseY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
  ctx.closePath();
  fillColor.checked ? ctx.fill() : ctx.stroke();
};

// Draw rectangel function
const drawReact = (e) => {
  const width = prevMouseX - e.offsetX;
  const height = prevMouseY - e.offsetY;
  if (!fillColor.checked) {
    return ctx.strokeRect(e.offsetX, e.offsetY, width, height);
  }
  ctx.fillRect(e.offsetX, e.offsetY, width, height);
};

// Draw circle function
const drawCircle = (e) => {
  ctx.beginPath();
  let radius = Math.sqrt(
    Math.pow(prevMouseX - e.offsetX, 2) + Math.pow(prevMouseY - e.offsetY, 2),
  );
  ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
  fillColor.checked ? ctx.fill() : ctx.stroke();
};

// Draw square function
const drawSquare = (e) => {
  const sideLength = Math.abs(prevMouseX - e.offsetX);
  ctx.beginPath();
  ctx.rect(e.offsetX, e.offsetY, sideLength, sideLength);
  fillColor.checked ? ctx.fill() : ctx.stroke();
};

// Draw hexagon function
const drawHexagon = (e) => {
  const sideLength = Math.abs(prevMouseX - e.offsetX);
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = ((2 * Math.PI) / 6) * i;
    const x = e.offsetX + sideLength * Math.cos(angle);
    const y = e.offsetY + sideLength * Math.sin(angle);
    ctx.lineTo(x, y);
  }
  ctx.closePath();
  fillColor.checked ? ctx.fill() : ctx.stroke();
};

// Draw Pentagon function
const drawPentagon = (e) => {
  const sideLength = Math.abs(prevMouseX - e.offsetX);
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const angle = ((2 * Math.PI) / 5) * i - Math.PI / 2;
    const x = e.offsetX + sideLength * Math.cos(angle);
    const y = e.offsetY + sideLength * Math.sin(angle);
    ctx.lineTo(x, y);
  }
  ctx.closePath();
  fillColor.checked ? ctx.fill() : ctx.stroke();
};

// Draw line function
const drawLine = (e) => {
  ctx.beginPath();
  ctx.moveTo(prevMouseX, prevMouseY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
};

// Draw arrow function
const drawArrow = (e) => {
  const headLength = 15;
  const angle = Math.atan2(e.offsetY - prevMouseY, e.offsetX - prevMouseX);
  ctx.beginPath();
  ctx.moveTo(prevMouseX, prevMouseY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(
    e.offsetX - headLength * Math.cos(angle - Math.PI / 6),
    e.offsetY - headLength * Math.sin(angle - Math.PI / 6),
  );

  ctx.lineTo(e.offsetX, e.offsetX);

  ctx.lineTo(
    e.offsetX - headLength * Math.cos(angle + Math.PI / 6),
    e.offsetY - headLength * Math.sin(angle + Math.PI / 6),
  );
  ctx.closePath();
  ctx.fill();
};

// change the Size of brush and all other tools
sizeSlider.addEventListener("change", () => {
  brushWidth = sizeSlider.value;
});

// Color selection event
colorPicker.addEventListener("change", () => {
  colorPicker.parentElement.style.background = colorPicker.value;
  colorPicker.parentElement.click();
});

// Color selection function event
colorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".options .selected").classList.remove("selected");
    btn.classList.add("selected");
    selectedColor = window
      .getComputedStyle(btn)
      .getPropertyValue("background-color");
  });
});

// const drawing = (e) => {
//   if (!isDrawing) return;
//   ctx.putImageData(snapshot, 0, 0);

//   if (
//     (selectedTool === "pencil" || selectedTool === "brush") ||
//     selectedTool === "eraser"
//   ) {
//     ctx.strokeStyle = selectedTool === "eraser" ? "#ffffff" : selectedColor;
//     ctx.lineTo(e.offsetX, e.offsetY);
//     ctx.stroke();
//   } else if (selectedTool === "brush") {
//     drawBrush(e);
//   } else if (selectedTool === "triangle") {
//     drawTriangle(e);
//   } else if (selectedTool === "rectangle") {
//     drawReact(e);
//   } else if (selectedTool === "circle") {
//     drawCircle(e);
//   } else if (selectedTool === "square") {
//     drawSquare(e);
//   } else if (selectedTool === "hexagon") {
//     drawHexagon(e);
//   } else if (selectedTool === "pentagon") {
//     drawPentagon(e);
//   } else if (selectedTool === "line") {
//     drawLine(e);
//   } else if (selectedTool === "arrow") {
//     drawArrow(e);
//   } else if (selectedTool === "curve") {
//     drawCurve(e);
//   } else {
//     drawPencil(e);
//   }
//  drawPencil()
// };

// Function of all events that is work on selection of tools
const drawing = (e) => {
  if (!isDrawing) return;

  ctx.putImageData(snapshot, 0, 0);

  if (selectedTool === "pencil") {
    drawPencil(e);
  } else if (selectedTool === "brush") {
    drawBrush(e);
  } else if (selectedTool === "eraser") {
    ctx.strokeStyle = "#ffffff";
    drawPencil(e);
  } else if (selectedTool === "rectangle") {
    drawReact(e);
  } else if (selectedTool === "triangle") {
    drawTriangle(e);
  } else if (selectedTool === "circle") {
    drawCircle(e);
  } else if (selectedTool === "square") {
    drawSquare(e);
  } else if (selectedTool === "hexagon") {
    drawHexagon(e);
  } else if (selectedTool === "pentagon") {
    drawPentagon(e);
  } else if (selectedTool === "line") {
    drawLine(e);
  } else if (selectedTool === "arrow") {
    drawArrow(e);
  } else if (selectedTool === "curve") {
    drawCurve(e);
  }
};

// Function to save the drawing of canvas
function saveState() {
  history = history.slice(0, historyStep + 1);
  history.push(canvas.toDataURL());
  historyStep++;

  console.log(history);
}

// Events for draw on mouseevent
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  saveState();
  // change
});

// For undo
undoButton.addEventListener("click", () => {
  isDrawing = false; //new
  if (historyStep >= 0) {
    historyStep--;
    const img = new Image();
    img.src = history[historyStep];
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
  }
  if (historyStep == -1) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

// For redo
redoButton.addEventListener("click", () => {
  isDrawing = false; //new
  if (historyStep < history.length - 1) {
    historyStep++;
    const img = new Image();
    img.src = history[historyStep];
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
  }
});

//  To clear the cnavas
clearCanvas.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  setCanvasBackground();
});

// To save canvas as image/jpg
saveImage.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = `${Date.now()}.jpg`;
  link.href = canvas.toDataURL();
  link.click();
});
