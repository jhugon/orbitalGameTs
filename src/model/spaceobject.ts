export class Vector {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    };
}

export class SpaceObject {
    // All in SI base units
    position: Vector;
    velocity: Vector;
    acceleration: Vector;
    thrust: Vector; // actual acceleration due to thrust
    thrustNominal: number; // nominal thrust value
    mass: number;

    constructor(mass: number, thrustNominal: number) {
        this.position = new Vector(0,0);
        this.velocity = new Vector(0,0);
        this.acceleration = new Vector(0,0);
        this.thrust = new Vector(0,0);
        this.mass = mass;
        this.thrustNominal = thrustNominal;
    };

    updatePositionVelocity(dt: number): void {
        this.velocity.x += this.acceleration.x*dt;
        this.velocity.y += this.acceleration.y*dt;
        this.position.x += this.velocity.x*dt;
        this.position.y += this.velocity.y*dt;
    }
}
