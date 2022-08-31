export class Vector {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    magnitude(): number {
        return Math.sqrt(this.x*this.x+this.y*this.y);
    }

    add(other: Vector): void {
        this.x += other.x;
        this.y += other.y;
    }

    subtract(other: Vector): void {
        this.x -= other.x;
        this.y -= other.y;
    }

    multiply(sf: number): void {
        this.x *= sf;
        this.y *= sf;
    }

    divide(sf: number): void {
        this.x /= sf;
        this.y /= sf;
    }

    normalize(): void {
        const mag = this.magnitude();
        this.divide(mag);
    }
}
