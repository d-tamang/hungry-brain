class Veg {
  constructor(ctx, canvas, x, y) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.vegImg = new Image();
    this.vegImg.src = "./src/assets/images/veg.jpg"
    this.width = 50;
    this.height = 50;
    this.num = Math.ceil(Math.random() * 11);
  }

  draw() {
  // this.vegImg.onload = () => {
  // };
    this.ctx.clearRect(0, 0, this.canvas.width, this.y);
    this.ctx.drawImage(this.vegImg, this.x, this.y, this.width, this.height);
    this.ctx.font = "25px Rockwell";
    this.ctx.textBaseline = "top";
    this.ctx.fillText(`${this.num}`, this.x + 10, this.y + 10);
  }

  fall() {
    this.y += 3;
    if (this.y >= (this.canvas.height - 70)) {
      this.y = 0;
      this.x = Math.ceil(Math.random() * (this.canvas.width - this.width));
      this.num = Math.ceil(Math.random() * 11);
    }
  }

  update() {
    this.fall();
    this.draw();
  }
}

export default Veg;