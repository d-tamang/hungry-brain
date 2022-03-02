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
    this.lCtx.fillText("Barry the Brilliant Brain is starving!", 40, 70);
    this.lCtx.fillText("Can you help feed him brainfood so", 40, 110);
    this.lCtx.fillText("he can get his energy back?", 40, 150);
    this.lCtx.fillText("Answer these math problems!", 40, 210);
    this.lCtx.fillText("Use the left and right arrow keys", 40, 270);
    this.lCtx.fillText("to move his mouth and catch the", 40, 310);
    this.lCtx.fillText("correct number. 10 right answers", 40, 350);
    this.lCtx.fillText("and you win. But be careful, 3", 40, 390);
    this.lCtx.fillText("wrong answers and it's game over!", 40, 430);
    this.rCtx.fillText("Press here to start", 40, 400);
  }
}

export default Start;