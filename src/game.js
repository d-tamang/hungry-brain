import Brain from "./brain";
import Veg from "./veg";
import Mouth from "./mouth";
import GameWon from "./gamewon";
import GameLost from "./gamelost";

class Game {
  constructor(lCtx, lCanvas, rCtx, rCanvas, audio) {
    this.lCtx = lCtx;
    this.lCanvas = lCanvas;
    this.rCtx = rCtx;
    this.rCanvas = rCanvas;
    this.audio = audio;
    this.eatSound = new Audio();
    this.eatSound.src = "./src/assets/audio/eatsound.wav"
    let positions = [20, 100, 180, 260, 340, 420]
    let x = positions[Math.floor(Math.random() * positions.length)]
    this.veg1 = new Veg(this.lCtx, this.lCanvas, x, 0);
    this.veg2 = new Veg(this.lCtx, this.lCanvas, x, 0);
    this.veg3 = new Veg(this.lCtx, this.lCanvas, x, 0);
    this.mouth = new Mouth(this.lCtx, this.lCanvas, 20, this.lCanvas.height);
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
    let veggies = [this.veg1, this.veg2, this.veg3];
    for (let i = 0; i < veggies.length; i++) {
      let veg = veggies[i];
      if (i === 0 && veg.y === 0) {
        veg.num = this.brain.answer;
      }
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
      if (this.brain.win >= 10) {
        cancelAnimationFrame(animate);
        return new GameWon(this.lCtx, this.lCanvas, this.rCtx, this.rCanvas, this.audio);
      }
      if (this.brain.health <= 0) {
        cancelAnimationFrame(animate);
        return new GameLost(this.lCtx, this.lCanvas, this.rCtx, this.rCanvas, this.audio);
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