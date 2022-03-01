class Number {
  constructor(ctx, canvas, x, y) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.vegImg = new Image();
    this.vegImg.src = "./src/assets/images/veg.jpg"
    this.width = 70;
    this.height = 70;
    this.num = Math.ceil(Math.random() * 21);
  }

  draw() {
  // this.vegImg.onload = () => {
  // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // this.ctx.drawImage(this.vegImg, this.x, this.y, 25, 15);
  // };
    this.ctx.clearRect(0, 0, this.canvas.width, this.y);
    this.ctx.drawImage(this.vegImg, this.x, this.y, this.width, this.height);
    this.ctx.font = "35px Rockwell";
    this.ctx.textBaseline = "top";
    this.ctx.fillText(`${this.num}`, this.x + 10, this.y + 10);
  }

  update() {
    this.y += 1;
  }

  loop() {
    this.update();
    this.draw();
    requestAnimationFrame(this.loop.bind(this));
  }
}

export default Number;