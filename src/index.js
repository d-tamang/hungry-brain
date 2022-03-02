import Game from "./game";

document.addEventListener("DOMContentLoaded", () => {
  const rCanvas = document.getElementById('right-canvas');
  rCanvas.width = 400;
  rCanvas.height = 500;
  const rCtx = rCanvas.getContext('2d');

  const lCanvas = document.getElementById('left-canvas');
  lCanvas.width = 500;
  lCanvas.height = 500;
  const lCtx = lCanvas.getContext('2d');

  const game = new Game(lCtx, lCanvas, rCtx, rCanvas);
  game.startGame();

  function keyDown(e) {
    e.preventDefault();
    if (e.key === 'ArrowRight' || e.key === 'Right') {
      game.mouth.moveRight();
    }
    if (e.key === 'ArrowLeft' || e.key === 'Left') {
      game.mouth.moveLeft();
    }
    game.mouth.update();
  }

  document.addEventListener("keydown", keyDown);
});