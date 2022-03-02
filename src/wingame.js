class WinGame {
  constructor(leftCtx, leftCanvas, rightCtx, rightCanvas) {
    this.lCtx = leftCtx;
    this.lCanvas = leftCanvas;
    this.rCtx = rightCtx;
    this.rCanvas = rightCanvas;
    this.winGameImg = new Image();
    this.winGameImg.src = "./src/assets/images/wingame.jpg";

    this.renderGameWon();
  }

  renderGameWon() {
    this.lCtx.clearRect(0, 0, this.lCanvas.width, this.lCanvas.height);
    this.rCtx.clearRect(0, 0, this.rCanvas.width, this.rCanvas.height);
    this.lCtx.font = "40px Rockwell";
    this.lCtx.fillText("Congrats! You WON!", 45, 170);
    this.lCtx.fillText("Click on Barry to", 50, 250);
    this.lCtx.fillText("play again", 150, 300);
    this.winGameImg.onload = () => {
      this.rCtx.drawImage(this.winGameImg, 70, 10, 260, 260)
    };
  }
}

export default WinGame;