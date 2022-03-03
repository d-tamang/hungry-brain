class Brain {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.win = 0;
    this.health = 5;
    this.answer;
    this.answer2;

    this.startImg = new Image();
    this.win1Img = new Image();
    this.win2Img = new Image();
    this.win3Img = new Image();
    this.win4Img = new Image();
    this.win5Img = new Image();
    this.win6Img = new Image();
    this.win7Img = new Image();
    this.win8Img = new Image();
    this.win9Img = new Image();

    this.startImg.src = "./src/assets/images/start.jpg";
    this.win1Img.src = "./src/assets/images/win1.jpg";
    this.win2Img.src = "./src/assets/images/win2.jpg";
    this.win3Img.src = "./src/assets/images/win3.jpg";
    this.win4Img.src = "./src/assets/images/win4.jpg";
    this.win5Img.src = "./src/assets/images/win5.jpg";
    this.win6Img.src = "./src/assets/images/win6.jpg";
    this.win7Img.src = "./src/assets/images/win7.jpg";
    this.win8Img.src = "./src/assets/images/win8.jpg";
    this.win9Img.src = "./src/assets/images/win9.jpg";
  }

  drawBrain() {
    if (this.win === 0) {
      this.startImg.onload = () => {
        this.ctx.drawImage(this.startImg, 70, 20, 260, 260)
      };
    }
    if (this.win === 1) {
      this.ctx.drawImage(this.win1Img, 70, 20, 260, 260)
    }
    if (this.win === 2) {
      this.ctx.drawImage(this.win2Img, 70, 20, 260, 260)
    }
    if (this.win === 3) {
      this.ctx.drawImage(this.win3Img, 60, 20, 300, 240)
    }
    if (this.win === 4) {
      this.ctx.drawImage(this.win4Img, 70, 20, 260, 260)
    }
    if (this.win === 5) {
      this.ctx.drawImage(this.win5Img, 70, 20, 280, 240)
    }
    if (this.win === 6) {
      this.ctx.drawImage(this.win6Img, 70, 20, 260, 260)
    }
    if (this.win === 7) {
      this.ctx.drawImage(this.win7Img, 70, 20, 250, 270)
    }
    if (this.win === 8) {
      this.ctx.drawImage(this.win8Img, 70, 20, 260, 260)
    }
    if (this.win === 9) {
      this.ctx.drawImage(this.win9Img, 70, 20, 260, 260)
    }
  }

  drawEquation() {
    let num1 = Math.ceil(Math.random() * 50);
    let num2 = Math.ceil(Math.random() * 50);
    this.answer = num1 + num2;
    this.ctx.font = "55px Rockwell";
    this.ctx.fillText(`${num1} + ${num2}`, 130, 340)
  }

  drawWinCounter() {
    this.ctx.font = "25px Rockwell";
    this.ctx.fillText("Points: " + `${this.win}`, 140, 400);
  }

  drawHealth() {
    this.ctx.font = "25px Rockwell";
    this.ctx.fillText("Health: " + `${this.health}`, 135, 440);
  }

  update() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBrain();
    this.drawEquation();
    this.drawWinCounter();
    this.drawHealth();
  }
}

export default Brain;