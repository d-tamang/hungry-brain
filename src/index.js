import Game from "./game";
import Start from "./start";
// import WinGame from "./wingame";

document.addEventListener("DOMContentLoaded", () => {
  const audioButton = document.getElementById("audio-button");
  const audio = document.getElementById("music");

  audioButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  })

  const rCanvas = document.getElementById('right-canvas');
  rCanvas.width = 400;
  rCanvas.height = 500;
  const rCtx = rCanvas.getContext('2d');

  const lCanvas = document.getElementById('left-canvas');
  lCanvas.width = 500;
  lCanvas.height = 500;
  const lCtx = lCanvas.getContext('2d');

  new Start(lCtx, lCanvas, rCtx, rCanvas);

  rCanvas.addEventListener("click", () => {
    audio.play();

    const game = new Game(lCtx, lCanvas, rCtx, rCanvas);

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
  })

  // new WinGame(lCtx, lCanvas, rCtx, rCanvas);
});