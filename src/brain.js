class Brain {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.win = 7;
    this.livesLeft = 3;
    this.answer;

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
    this.win10Img = new Image();

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
    this.win10Img.src = "./src/assets/images/win10.jpg";

    this.draw();
    this.drawEquation();
    this.drawWinCounter();
    this.drawLivesCounter();
  }

  draw() {
    if (this.win === 0) {
      this.startImg.onload = () => {
        this.ctx.drawImage(this.startImg, 70, 10, 260, 260)
      };
    }
    if (this.win === 1) {
      this.win1Img.onload = () => {
        this.ctx.drawImage(this.win1Img, 70, 10, 260, 260)
      };
    }
    if (this.win === 2) {
      this.win2Img.onload = () => {
        this.ctx.drawImage(this.win2Img, 70, 10, 260, 260)
      };
    }
    if (this.win === 3) {
      this.win3Img.onload = () => {
        this.ctx.drawImage(this.win3Img, 70, 10, 260, 260)
      };
    }
    if (this.win === 4) {
      this.win4Img.onload = () => {
        this.ctx.drawImage(this.win4Img, 70, 10, 260, 260)
      };
    }
    if (this.win === 5) {
      this.win5Img.onload = () => {
        this.ctx.drawImage(this.win5Img, 70, 10, 260, 260)
      };
    }
    if (this.win === 6) {
      this.win6Img.onload = () => {
        this.ctx.drawImage(this.win6Img, 70, 10, 260, 260)
      };
    }
    if (this.win === 7) {
      this.win7Img.onload = () => {
        this.ctx.drawImage(this.win7Img, 70, 10, 260, 260)
      };
    }
    if (this.win === 8) {
      this.win8Img.onload = () => {
        this.ctx.drawImage(this.win8Img, 70, 10, 260, 260)
      };
    }
    if (this.win === 9) {
      this.win9Img.onload = () => {
        this.ctx.drawImage(this.win9Img, 70, 10, 260, 260)
      };
    }
    if (this.win === 10) {
      this.win10Img.onload = () => {
        this.ctx.drawImage(this.win10Img, 70, 10, 260, 260)
      };
    }
  }

  drawEquation () {
    let num1 = Math.floor(Math.random() * 11 + 1);
    let num2 = Math.floor(Math.random() * 11);
    this.answer = num1 + num2;
    this.ctx.font = "55px Rockwell";
    this.ctx.fillText(`${num1} + ${num2}`, 130, 340)
  }

  drawWinCounter() {
    // this.ctx.fillStyle ='black';
    this.ctx.font = "25px Rockwell";
    this.ctx.fillText("Correct: " + `${this.win}`, 140, 400);
  }

  drawLivesCounter() {
    this.ctx.font = "25px Rockwell";
    this.ctx.fillText("Lives Left: " + `${this.livesLeft}`, 116, 440);
  }

}

export default Brain;