import Brain from "./brain";
import Number from "./number";
import Mouth from "./mouth";

// document.addEventListener("DOMContentLoaded", () => {

const rCanvas = document.getElementById('right-canvas');
rCanvas.width = 400;
rCanvas.height = 500;
const rCtx = rCanvas.getContext('2d');

const brain = new Brain(rCtx, rCanvas);

const lCanvas = document.getElementById('left-canvas');
lCanvas.width = 500;
lCanvas.height = 500;
const lCtx = lCanvas.getContext('2d');

let fallingNums = [];
for (let i = 0; i < 5; i++) {
  let x = Math.floor(Math.random() * lCanvas.width);
  // let y = Math.floor(Math.random() * lCanvas.height);
  let num = new Number(lCtx, lCanvas, x, 0);
  fallingNums.push(num);
}

for (let i = 0; i < fallingNums.length; i++) {
  fallingNums[i].loop();
}

const mouth = new Mouth(lCtx, lCanvas, 0, lCanvas.height - 20);

function keyDown(e) {
  e.preventDefault();
  if (e.key === 'ArrowRight' || e.key === 'Right') {
    mouth.x += 10;
  }
  if (e.key === 'ArrowLeft' || e.key === 'Left') {
    mouth.x -= 10;
  }
  mouth.update();
}

document.addEventListener("keydown", keyDown);

// });