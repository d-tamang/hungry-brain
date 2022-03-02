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
    this.lCtx.font = "25px Rockwell";
    this.rCtx.font = "35px Rockwell";
    this.lCtx.fillText("Barry the Brilliant Brain is starving!", 40, 80);
    this.lCtx.fillText("Can you help feed him and get", 40, 120);
    this.lCtx.fillText("his energy back by answering", 40, 160);
    this.lCtx.fillText("these math questions correctly?", 40, 200);
    this.lCtx.fillText("Use the left and right arrow keys", 40, 260);
    this.lCtx.fillText("to move his mouth and catch the", 40, 300);
    this.lCtx.fillText("correct number. 10 right answers", 40, 340);
    this.lCtx.fillText("and you win! But be careful, 3", 40, 380);
    this.lCtx.fillText("wrong answers and it's game over!", 40, 420);
    this.rCtx.fillText("Press here to start", 40, 400);
  }
}

export default Start;