class GameWon {
  constructor(lCtx, lCanvas, rCtx, rCanvas, audio) {
    this.lCtx = lCtx;
    this.lCanvas = lCanvas;
    this.rCtx = rCtx;
    this.rCanvas = rCanvas;
    this.audio = audio;
    this.winGameImg = new Image();
    this.winGameImg.src = "./src/assets/images/wingame.jpg";
    this.winSound = new Audio();
    this.winSound.src = "./src/assets/audio/winsound.mp3"

    this.renderWinScreen();
  }

  renderWinScreen() {
    this.audio.pause();
    this.winSound.play();
    this.lCtx.clearRect(0, 0, this.lCanvas.width, this.lCanvas.height);
    this.rCtx.clearRect(0, 0, this.rCanvas.width, this.rCanvas.height);
    this.lCtx.font = "40px Rockwell";
    this.lCtx.fillText("Congrats, you won!", 45, 170);
    this.lCtx.fillText("Click on Brian to", 80, 250);
    this.lCtx.fillText("play again", 130, 300);
    this.winGameImg.onload = () => {
      this.rCtx.drawImage(this.winGameImg, 55, 80, 290, 290)
    };
  }
}

export default GameWon;