class Start {
  constructor(leftCtx, leftCanvas, rightCtx, rightCanvas) {
    this.lCtx = leftCtx;
    this.lCanvas = leftCanvas;
    this.rCtx = rightCtx;
    this.rCanvas = rightCanvas;
    this.startScreenImg = new Image();
    this.startScreenImg.src = "./src/assets/images/startscreen.jpg";

    this.renderStart();
  }

  renderStart() {
    this.startScreenImg.onload = () => {
      this.rCtx.drawImage(this.startScreenImg, 70, 60, 250, 250)
    };
    this.lCtx.font = "24px Rockwell";
    this.rCtx.font = "35px Rockwell";
    this.lCtx.fillText("Barry the Brilliant Brain is starving!", 40, 110);
    this.lCtx.fillText("Help feed him brainfood by", 85, 150);
    this.lCtx.fillText("answering these math problems.", 55, 190);
    this.lCtx.fillText("Use the left and right arrow keys", 55, 280);
    this.lCtx.fillText("to move his mouth. Catch 10", 80, 320);
    this.lCtx.fillText("correct numbers before his health", 50, 360);
    this.lCtx.fillText("runs out to win!", 150, 400);
    this.rCtx.fillText("Press here to start", 45, 400);
  }
}

export default Start;