import './style.css'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const fighter = new Image();
fighter.src = "FighterLaser_lightblue.png";

let raf;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: 'blue',
  draw() {
    ctx.drawImage(fighter,this.x,this.y);
  }
};

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > canvas.height ||
      ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width ||
      ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('click', (e) => {
  ball.vx += 1;
});

ball.draw();
draw();
