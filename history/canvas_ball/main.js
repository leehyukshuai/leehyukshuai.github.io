// 设置画布

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

var width, height;
updateSize();
window.onresize = updateSize;
function updateSize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

// 生成随机数的函数

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function randomColor() {
  return 'rgb(' +
    random(0, 256) + ',' +
    random(0, 256) + ',' +
    random(0, 256) + ')';
}

function mixColor(color1, color2) {
  var myReg = /rgb\((\d+),(\d+),(\d+)\)/;
  var c1 = myReg.exec(color1);
  var c2 = myReg.exec(color2);
  var ret = 'rgb(';
  for (var i = 1; i <= 3; ++i) {
    var s1 = c1[i];
    var s2 = c2[i];
    var n1 = Number(s1);
    var n2 = Number(s2);
    var avg = Math.round((n1 + n2)/2);
    ret += avg.toString();
    if (i !== 3) {
      ret += ',';
    } else {
      ret += ')';
    }
  }
  return ret;
}

// 小球属性声明

class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
  update() {
    this.x += this.velX;
    this.y += this.velY;
    if (this.x > width - this.size) {
      this.velX *= -1;
      this.x = width - this.size;
    }
    if (this.x < this.size) {
      this.velX *= -1;
      this.x = this.size;
    }
    if (this.y > height - this.size) {
      this.velY *= -1;
      this.y = height - this.size;
    }
    if (this.y < this.size) {
      this.velY *= -1;
      this.y = this.size;
    }
  }
  detectCollision() {
    for (var ball of balls) {
      if (ball !== this) {
        var dist2 = (ball.x - this.x)**2 + (ball.y - this.y)**2;
        if (dist2 < (ball.size + this.size)**2) {
          // this.color = ball.color = mixColor(this.color, ball.color);
          this.color = ball.color = randomColor();
        }
      }
    }
  }
}

function randomBall() {
  let size = random(10, 20);
  let x = random(size, width - size);
  let y = random(size, height - size);
  let velX = random(4, 10);
  let velY = random(4, 10);
  if (Math.random() < 0.5) {
    velX *= -1;
  }
  if (Math.random() < 0.5) {
    velY *= -1;
  }
  return new Ball(x, y, velX, velY, randomColor(), size);
}

let balls = []
while (balls.length < 40) {
  balls.push(randomBall());
}

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.fillRect(0, 0, width, height);
  for (var ball of balls) {
    ball.draw();
    ball.update();
    ball.detectCollision();
  }
  requestAnimationFrame(loop);
}

loop();

canvas.onclick = addBall;

function addBall(e) {
  var ball = randomBall();
  ball.x = e.clientX;
  ball.y = e.clientY;
  balls.push(ball);
}