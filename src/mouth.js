class Mouth {
  constructor(ctx, canvas, x, y) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.mouthImg = new Image();
    this.mouthImg.src = "./src/assets/images/mouth.jpg"
    this.width = 80;
    this.height = 80;
    this.update();
  }

  draw() {
    // this.mouthImg.onload = () => {
    this.ctx.drawImage(this.mouthImg, this.x, this.y - this.height, this.width, this.height);
    // }
  }

  update() {
    this.ctx.clearRect(0, this.canvas.height - this.height, this.canvas.width, this.height);
    this.draw();
    requestAnimationFrame(this.update.bind(this));
  }
}

export default Mouth;