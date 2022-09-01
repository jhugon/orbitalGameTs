
import {Sprite} from "./sprite";
import {SpaceObject} from "../model/spaceobject";

export class SpaceObjectUI {
  sprite: Sprite;
  model: SpaceObject;

  constructor(img_fn: string, mass: number, thrustNominal: number) {
    this.sprite = new Sprite(img_fn);
    this.model = new SpaceObject(mass,thrustNominal);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.sprite.draw(ctx,this.model.position);
  }

  update(dt: number): void {
    this.model.update(dt);
  }
}
