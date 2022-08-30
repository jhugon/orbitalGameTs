import './style.css'
import {Sprite} from "./view/sprite";
import {SpaceObject} from "./model/spaceobject";

class SpaceObjectUI {
  sprite: Sprite;
  model: SpaceObject;

  constructor(img_fn: string, mass: number, thrustNominal: number) {
    this.sprite = new Sprite(img_fn);
    this.model = new SpaceObject(mass,thrustNominal);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.sprite.draw(ctx,this.model.position);
  }

  update(dt: float): void {
    this.model.updatePositionVelocity(dt);
  }
}

const fighter = new SpaceObjectUI("FighterLaser_lightblue.png",0.,1.);
//fighter.model.position.x = 300;
//fighter.model.position.y = 300;
fighter.model.velocity.x = 30;
fighter.model.velocity.y = 50;

const canvasEl = document.getElementById('canvas');
if (canvasEl instanceof HTMLCanvasElement) {
  const canvas: HTMLCanvasElement = canvasEl;
  const ctxEl = canvas.getContext('2d');
  if (ctxEl instanceof CanvasRenderingContext2D) {
    const ctx: CanvasRenderingContext2D = ctxEl;
    
    function draw() {
      ctx.clearRect(0,0, canvas.width, canvas.height);
      fighter.draw(ctx);
      fighter.update(1./60.);
    
      window.requestAnimationFrame(draw);
    }
    
    canvas.addEventListener('click', (_) => {
      fighter.model.acceleration.y -= 1;
    });
    
    draw();
  }
}
