
import {Sprite} from "./sprite";
import {SpaceObject} from "../model/spaceobject";
import {Vector} from "../utils/vector";

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
    const a = new Vector(0.,0.);
    this.model.updateAcceleration(a);
    this.model.updatePositionVelocity(dt);
  }
}
