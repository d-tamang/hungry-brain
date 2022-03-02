class GameOver {
  constructor(leftCtx, leftCanvas, rightCtx, rightCanvas) {
    this.lCtx = leftCtx;
    this.lCanvas = leftCanvas;
    this.rCtx = rightCtx;
    this.rCanvas = rightCanvas;
    this.loseImg = new Image();
    this.loseImg.src = "./src/assets/images/lose.jpg";

    this.renderGameOver();
  }

  renderGameOver() {
    this.lCtx.clearRect(0, 0, this.lCanvas.width, this.lCanvas.height);
    this.rCtx.clearRect(0, 0, this.rCanvas.width, this.rCanvas.height);
    this.lCtx.font = "40px Rockwell";
    this.lCtx.fillText("Oh no! You lost", 100, 170);
    this.lCtx.fillText("Click on Barry to", 50, 250);
    this.lCtx.fillText("try again", 150, 300);
    this.loseImg.onload = () => {
      this.rCtx.drawImage(this.loseImg, 70, 10, 260, 260)
    };
  }
}

export default GameOver;