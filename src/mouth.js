class Mouth {
  constructor(ctx, canvas, x, y) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.mouthImg = new Image();
    this.mouthImg.src = "./src/assets/images/mouth.jpg"
  }

  draw() {
    this.mouthImg.onload = () => {
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(this.mouthImg, this.x, this.y, 30, 20);
    }
  }

  // update() {
  //   this.x += 0.5;
  // }

  // loop() {
  //   this.update();
  //   this.draw();
  //   window.requestAnimationFrame(this.loop.bind(this));
  // }
}

export default Mouth;