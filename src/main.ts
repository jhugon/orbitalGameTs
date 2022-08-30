import './style.css'

const canvasEl = document.getElementById('canvas');
if (canvasEl instanceof HTMLCanvasElement) {
  const canvas: HTMLCanvasElement = canvasEl;
  const ctxEl = canvas.getContext('2d');
  if (ctxEl instanceof CanvasRenderingContext2D) {
    const ctx: CanvasRenderingContext2D = ctxEl;
    const fighter = new Image();
    fighter.src = "FighterLaser_lightblue.png";
    
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
    
      window.requestAnimationFrame(draw);
    }
    
    canvas.addEventListener('click', (_) => {
      ball.vx += 1;
    });
    
    ball.draw();
    draw();
  }
}
