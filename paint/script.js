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

let prevMouseX,
  prevMouseY,
  isDrawing = false,
  selectedTool = "pencil",
  brushWidth = 5,
  selectedColor = "#000";

let history = [],
  historyStep = -1;

const setCanvasBackground = () => {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = selectedColor;
};

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  setCanvasBackground();
});

toolBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".options .active").classList.remove("active");
    btn.classList.add("active");
    selectedTool = btn.id;
    console.log(selectedTool);
  });
});

const startDraw = (e) => {
  console.log(e);

  isDrawing = true;
  prevMouseX = e.offsetX;
  prevMouseY = e.offsetY;

  ctx.beginPath();
  ctx.lineWidth = brushWidth;
  ctx.strokeStyle = selectedColor;
  ctx.fillStyle = selectedColor;
  snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
};

const drawPencil = (e) => {
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.shadowBlur = 0;
  ctx.stroke();
};

const drawing = (e) => {
  if (!isDrawing) return;
  ctx.putImageData(snapshot, 0, 0);

  if (
    (selectedTool === "pencil" && selectedTool === "brush") ||
    selectedTool === "eraser"
  ) {
    ctx.strokeStyle = selectedTool === "eraser" ? "#ffffff" : selectedColor;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }

  drawPencil(e);
};

function saveState() {}

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => (isDrawing = false), saveState());
