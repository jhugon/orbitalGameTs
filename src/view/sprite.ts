
export interface Sprite {
  img: HTMLImageElement;
  fn: string;
  pixelOffsetX: number;
  pixelOffsetY: number;
}

// fn is the location the image can be loaded from
export function init(fn: string): Sprite {
    const result: Sprite = {
        fn: fn,
        img: new Image(),
        pixelOffsetX: 0,
        pixelOffsetY: 0,
    }
    result.img.src = fn;
    result.pixelOffsetX = result.img.width*0.5;
    result.pixelOffsetY = result.img.height*0.5;
    return result;
}
