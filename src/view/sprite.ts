
export class Sprite {
  img: HTMLImageElement;
  fn: string;

  // fn is the location the image can be loaded from
  constructor(fn: string) {
    this.fn = fn;
    this.img = new Image();
    this.img.src = fn;
  }
}
