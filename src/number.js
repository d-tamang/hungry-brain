class Number {
  constructor(ctx, canvas, x, y) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.vegImg = new Image();
    this.vegImg.src = "./src/assets/images/veg.jpg"
  }

  draw() {
  // this.vegImg.onload = () => {
  // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.vegImg, this.x, this.y, 25, 15);
  // };
  }

  update() {
    this.y += 0.3
  }

  loop() {
    this.update();
    this.draw();
    window.requestAnimationFrame(this.loop.bind(this));
  }
}

export default Number;