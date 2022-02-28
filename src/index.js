import Brain from "./brain";
import Number from "./number";
import Mouth from "./mouth";

// document.addEventListener("DOMContentLoaded", () => {

const rCanvas = document.getElementById('right-canvas');
const rCtx = rCanvas.getContext('2d');
const brain = new Brain(rCtx, rCanvas);
brain.draw();

const lCanvas = document.getElementById('left-canvas');
const lCtx = lCanvas.getContext('2d');

// let fallingNums = [];
// for (let i = 0; i < 5; i++) {
//   let x = Math.floor(Math.random() * lCanvas.width);
//   let y = Math.floor(Math.random() * lCanvas.height);
//   let num = new Number(lCtx, lCanvas, x, 0);
//   fallingNums.push(num);
// }

// for (let i = 0; i < fallingNums.length; i++) {
//   fallingNums[i].loop();
// }

const mouth = new Mouth(lCtx, lCanvas, 0, 120);
// mouth.draw();

function keyDown(e) {
  console.log('hit');
  e.preventDefault();
  if (e.key === 'ArrowRight' || e.key === 'Right') {
    console.log(mouth);
    mouth.x += 5;
    console.log(mouth.x);
  }
  if (e.key === 'ArrowLeft' || e.key === 'Left') {
    mouth.x -= 5;
  }
  mouth.update();
}

document.addEventListener("keydown", keyDown);

// });