class Number {
  constructor(ctx, canvas, x, y) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.vegImg = new Image();
    this.vegImg.src = "./src/assets/images/veg.jpg"
    this.width = 30;
    this.height = 20;
    this.num = Math.floor(Math.random() * 21);
  }

  draw() {
  // this.vegImg.onload = () => {
  // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // this.ctx.drawImage(this.vegImg, this.x, this.y, 25, 15);
  // };
    this.ctx.clearRect(0, 0, this.canvas.width, this.y);
    this.ctx.drawImage(this.vegImg, this.x, this.y, this.width, this.height);
    this.ctx.font = "12px Rockwell";
    this.ctx.textBaseline = "top";
    this.ctx.fillText(`${this.num}`, this.x + 10, this.y + 6);
  }

  update() {
    this.y += 0.4
  }

  loop() {
    this.update();
    this.draw();
    requestAnimationFrame(this.loop.bind(this));
  }
}

export default Number;