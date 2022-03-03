class Mouth {
  constructor(ctx, canvas, x, y) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.mouthImg = new Image();
    this.mouthImg.src = "./src/assets/images/mouth.jpg"
    this.width = 70;
    this.height = 70;
  }

  draw() {
    this.ctx.clearRect(0, this.canvas.height - this.height - 12, this.canvas.width, this.height + 10);
    this.ctx.drawImage(this.mouthImg, this.x, this.y - this.height - 10, this.width, this.height);
  }

  moveLeft() {
    if (this.x >= 20) {
      this.x -= 15;
    }
  }

  moveRight() {
    if (this.x <= (this.canvas.width - this.width - 10)) {
      this.x += 15;
    }
  }
}

export default Mouth;