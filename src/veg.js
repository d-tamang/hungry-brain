class Veg {
  constructor(ctx, canvas, x, y) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.vegPics = ["./src/assets/images/veg1.png", "./src/assets/images/veg2.png", "./src/assets/images/veg3.png", "./src/assets/images/veg4.png"]
    this.vegImg = new Image();
    this.vegImg.src = this.vegPics[Math.floor(Math.random() * this.vegPics.length)]
    this.width = 50;
    this.height = 50;
    this.num = Math.ceil(Math.random() * 50);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.y);
    this.ctx.drawImage(this.vegImg, this.x, this.y, this.width, this.height);
    this.ctx.font = "25px Rockwell";
    this.ctx.textBaseline = "top";
    this.ctx.fillText(`${this.num}`, this.x + 12, this.y + 10);
  }

  fall() {
    this.y += 2;
  }

  update() {
    this.fall();
    if (this.y >= this.canvas.height - 80) {
      let positions = [20, 100, 180, 260, 340, 420];
      this.x = positions[Math.floor(Math.random() * positions.length)];
      this.y = 0;
      this.num = Math.ceil(Math.random() * 50);
    }
    this.draw();
  }
}

export default Veg;