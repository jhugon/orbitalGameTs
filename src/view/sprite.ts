import {Vector} from "../utils/vector";

export class Sprite {
  img: HTMLImageElement;
  fn: string;

  // fn is the location the image can be loaded from
  constructor(fn: string) {
    this.fn = fn;
    this.img = new Image();
    this.img.src = fn;
  }

  // draws the center of the image at x, y
  draw(ctx: CanvasRenderingContext2D, pos: Vector) {
    let x = pos.x;
    let y = pos.y;
    x -= this.img.width*0.5;
    y -= this.img.height*0.5;
    ctx.drawImage(this.img,x,y);
  }
}
