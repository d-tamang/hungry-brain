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
    this.mouth = new Mouth(this.lCtx, this.lCanvas, 10, this.lCanvas.height);
    this.brain = new Brain(this.rCtx, this.rCanvas);

    this.setup();
  }

  setup() {
    this.lCtx.clearRect(0, 0, this.lCanvas.width, this.lCanvas.height);
    this.rCtx.clearRect(0, 0, this.rCanvas.width, this.rCanvas.height);
    this.brain.update();
    this.play();
  }

  play() {
    this.mouth.draw();
    let veggies = [this.veg1, this.veg2, this.veg3]
    for (let i = 0; i < veggies.length; i++) {
      let veg = veggies[i];
      veg.update();
      if (this.collision(veg)) {
        if (veg.num === this.brain.answer) {
          this.brain.win++;
            if (this.brain.win >= 10) {
              cancelAnimationFrame(animate);
              return new WinGame(this.lCtx, this.lCanvas, this.rCtx, this.rCanvas);
            }
          this.brain.update();
        } 
        // else {
        //   this.brain.livesLeft--;
        //   this.brain.update();
        // }
      }
    }
    const animate = requestAnimationFrame(this.play.bind(this));
  }

  collision(veg) {
    let vegX = veg.x + veg.width;
    let vegY = veg.y + 3;//veg.height;
    let mouthX = this.mouth.x + this.mouth.width;
    let mouthY = this.lCanvas.height - this.mouth.height - 10;
    if ((vegX >= this.mouth.x) && (veg.x <= mouthX) && (vegY >= mouthY)) {
      return true;
    }
  }
}

export default Game;