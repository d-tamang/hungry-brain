import Brain from "./brain";
import Veg from "./veg";
import Mouth from "./mouth";
import GameWon from "./gamewon";
import GameLost from "./gamelost";

class Game {
  constructor(leftCtx, leftCanvas, rightCtx, rightCanvas) {
    this.lCtx = leftCtx;
    this.lCanvas = leftCanvas;
    this.rCtx = rightCtx;
    this.rCanvas = rightCanvas;
    this.eatSound = new Audio();
    this.eatSound.src = "./src/assets/audio/eatsound.wav"

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
        this.eatSound.play();
        if (veg.num === this.brain.answer) {
          this.brain.win++;
          this.brain.update();
        } else {
          this.brain.health--;
          this.rCtx.clearRect(0, 400, this.rCanvas.width, 100);
          this.brain.drawHealth();
        }
      }
      if (this.brain.win >= 2) {
        cancelAnimationFrame(animate);
        return new GameWon(this.lCtx, this.lCanvas, this.rCtx, this.rCanvas);
      }
      if (this.brain.health <= 0) {
        cancelAnimationFrame(animate);
        return new GameLost(this.lCtx, this.lCanvas, this.rCtx, this.rCanvas);
      }
    }
    const animate = requestAnimationFrame(this.play.bind(this));
  }

  collision(veg) {
    let vegX = veg.x + veg.width;
    let vegY = veg.y + veg.height;
    let mouthX = this.mouth.x + this.mouth.width;
    let mouthY = this.lCanvas.height - this.mouth.height - 10;
    if ((vegX >= this.mouth.x) && (veg.x <= mouthX) && (vegY === mouthY)) {
      return true;
    }
  }
}

export default Game;