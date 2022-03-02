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
    this.draw();
  }

  draw() {
    // this.mouthImg.onload = () => {
    this.ctx.drawImage(this.mouthImg, this.x, this.y - this.height, this.width, this.height);
    // }
  }

  update() {
    this.ctx.clearRect(0, this.canvas.height - this.height - 12, this.canvas.width, this.height);
    this.draw();
  }

  moveLeft() {
    if (this.x >= 5) {
      this.x -= 15;
    }
  }

  moveRight() {
    if (this.x <= (this.canvas.width - this.width - 5)) {
      this.x += 15;
    }
  }
  
}

export default Mouth;