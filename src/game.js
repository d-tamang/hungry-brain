import Brain from "./brain";
import Veg from "./veg";
import Mouth from "./mouth";
import WinGame from "./wingame";
import GameOver from "./gameover";

class Game {
  constructor(leftCtx, leftCanvas, rightCtx, rightCanvas) {
    this.lCtx = leftCtx;
    this.lCanvas = leftCanvas;
    this.rCtx = rightCtx;
    this.rCanvas = rightCanvas;

    let x = Math.ceil(Math.random() * this.lCanvas.width);
    this.veg1 = new Veg(this.lCtx, this.lCanvas, x, 0);
    this.veg2 = new Veg(this.lCtx, this.lCanvas, x, 0);
    this.veg3 = new Veg(this.lCtx, this.lCanvas, x, 0);
    this.mouth = new Mouth(this.lCtx, this.lCanvas, 0, this.lCanvas.height - 10);
    this.brain = new Brain(this.rCtx, this.rCanvas, 0, 3);
    this.brainWinCount = 0;
    this.brainLivesLeft = 3;

    this.startGame();
  }

  startGame() {
    this.lCtx.clearRect(0, 0, this.lCanvas.width, this.lCanvas.height);
    this.rCtx.clearRect(0, 0, this.rCanvas.width, this.rCanvas.height);
    this.brain.update();
    this.render();
  }

  render() {
    this.veg1.update();
    this.veg2.update();
    this.veg3.update();
    this.mouth.update();
    if (this.correctVegCaught(this.veg1) || this.correctVegCaught(this.veg2) || this.correctVegCaught(this.veg3)) {
      this.brainWinCount++;
      if (this.brainWinCount >= 10) {
        cancelAnimationFrame(animate);
        return new WinGame(this.lCtx, this.lCanvas, this.rCtx, this.rCanvas);
      }
      this.brain = new Brain(this.rCtx, this.rCanvas, this.brainWinCount, this.brainLivesLeft);
    }
    // if ((this.checkVegCaught(this.veg1) || this.checkVegCaught(this.veg2) || this.checkVegCaught(this.veg3)) === "wrong") {
    //   this.brainLivesLeft--;
    //   this.brain = new Brain(this.rCtx, this.rCanvas, this.brainWinCount, this.brainLivesLeft);
    // }
    // if (this.wrongVegCaught(this.veg1) || this.wrongVegCaught(this.veg2) || this.wrongVegCaught(this.veg3)) {
    //   this.brainLivesLeft--;
    //   this.brain = new Brain(this.rCtx, this.rCanvas, this.brainWinCount, this.brainLivesLeft);
    // }
    const animate = requestAnimationFrame(this.render.bind(this));
  }

  correctVegCaught(veg) {
    let vegX = veg.x + veg.width;
    let vegY = veg.y + veg.height;
    let mouthX = this.mouth.x + this.mouth.width;
    let mouthY = this.mouth.y - this.mouth.height;
    if ((vegX >= this.mouth.x) && (veg.x <= mouthX) && (vegY >= mouthY) && (veg.num === this.brain.answer)) {
      return true;
    }
  }

  // wrongVegCaught(veg) {
  //   let vegX = veg.x + veg.width;
  //   let vegY = veg.y + veg.height;
  //   let mouthX = this.mouth.x + this.mouth.width;
  //   let mouthY = this.mouth.y - this.mouth.height;
  //   if ((vegX >= this.mouth.x) && (veg.x <= mouthX) && (vegY >= mouthY) && (veg.num !== this.brain.answer)) {
  //     return true;
  //   }
  // }
}

export default Game;