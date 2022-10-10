class GameLost {
  constructor(lCtx, lCanvas, rCtx, rCanvas, audio) {
    this.lCtx = lCtx;
    this.lCanvas = lCanvas;
    this.rCtx = rCtx;
    this.rCanvas = rCanvas;
    this.audio = audio;
    this.loseImg = new Image();
    this.loseImg.src = "./src/assets/images/lose.jpg";
    this.loseSound = new Audio();
    this.loseSound.src = "./src/assets/audio/losesound.wav"

    this.renderLoseScreen();
  }

  renderLoseScreen() {
    this.audio.pause();
    this.loseSound.play();
    this.lCtx.clearRect(0, 0, this.lCanvas.width, this.lCanvas.height);
    this.rCtx.clearRect(0, 0, this.rCanvas.width, this.rCanvas.height);
    this.lCtx.font = "40px Rockwell";
    this.lCtx.fillText("Oh no! You lost", 100, 170);
    this.lCtx.fillText("Click on Brian to", 80, 250);
    this.lCtx.fillText("try again!", 150, 300);
    this.loseImg.onload = () => {
      this.rCtx.drawImage(this.loseImg, 70, 100, 260, 260)
    };
  }
}

export default GameLost;