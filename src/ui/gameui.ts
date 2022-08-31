
import {SpaceObjectUI} from "./spaceobjectui";
export class GameUI {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    spaceobjects: SpaceObjectUI[];
    lastTimstamp: number | null;

    constructor(canvasElementId: string) {
        const canvasToCheck = document.getElementById(canvasElementId);
        if (canvasToCheck instanceof HTMLCanvasElement) {
            this.canvas = canvasToCheck;
        } else {
            throw "Couldn't find HTMLCanvasElement with ID: "+canvasElementId;
        }
        const ctxToCheck = this.canvas.getContext('2d');
        if (ctxToCheck instanceof CanvasRenderingContext2D) {
            this.ctx = ctxToCheck;
        } else {
            throw "Couldn't get CanvasRenderingContext2D from canvas with ID: "+canvasElementId;
        }
        this.lastTimstamp = null;
        this.spaceobjects = [];
    }

    addSpaceObjectUI(so: SpaceObjectUI): void {
        this.spaceobjects.push(so);
    }

    run(): void {
        this.canvas.addEventListener("click", (/*event: MouseEvent*/) => {
            this.onClick(/*event*/);
        });

        this.update(null);
    }

    // timestamp is in floating point ms
    update(timestamp: number | null): void {
        console.log("Timestamp:")
        console.log(timestamp)
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.spaceobjects.forEach( (x) => {
            x.draw(this.ctx);
        });

        if (this.lastTimstamp === null || timestamp === null) { // first couple updates
        } else {
            const dt = timestamp-this.lastTimstamp;
            this.spaceobjects.forEach ( (x) => {
                x.update(dt/1000); // convert ms to s
            });
        }
        this.lastTimstamp = timestamp;
    
        // schedule next update
        window.requestAnimationFrame((ts: number) => {
            this.update(ts);
        });
    }

    onClick(/*event: MouseEvent*/): void {
        this.spaceobjects.forEach ( (so) => {
            so.model.acceleration.y -= 1;
        });
    }
}
