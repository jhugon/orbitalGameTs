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

    static add(a: Vector, b: Vector): Vector {
        const result = new Vector(a.x,a.y);
        result.add(b);
        return result;
    }

    subtract(other: Vector): void {
        this.x -= other.x;
        this.y -= other.y;
    }

    static subtract(a: Vector, b: Vector): Vector {
        const result = new Vector(a.x,a.y);
        result.subtract(b);
        return result;
    }

    multiply(sf: number): void {
        this.x *= sf;
        this.y *= sf;
    }

    static multiply(a: Vector, sf: number): Vector {
        const result = new Vector(a.x,a.y);
        result.multiply(sf);
        return result;
    }

    divide(sf: number): void {
        this.x /= sf;
        this.y /= sf;
    }

    static divide(a: Vector, sf: number): Vector {
        const result = new Vector(a.x,a.y);
        result.divide(sf);
        return result;
    }

    normalize(): void {
        const mag = this.magnitude();
        this.divide(mag);
    }

    static normalize(a: Vector): Vector {
        const result = new Vector(a.x,a.y);
        result.normalize();
        return result;
    }

}
