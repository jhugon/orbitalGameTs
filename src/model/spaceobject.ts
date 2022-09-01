import {Vector} from "../utils/vector";

export class SpaceObject {
    // All in SI base units
    position: Vector;
    velocity: Vector;
    acceleration: Vector;
    thrustNominal: number; // nominal thrust magnitude
    thrustRequest: Vector; // requested thrust, which will be multiplied by nominal
    mass: number;

    constructor(mass: number, thrustNominal: number) {
        this.position = new Vector(0,0);
        this.velocity = new Vector(0,0);
        this.acceleration = new Vector(0,0);
        this.thrustRequest = new Vector(0,0);
        this.mass = mass;
        this.thrustNominal = thrustNominal;
    }

    // velocity is updated with dt*(acceleration + thrust)
    update(dt: number): void {
        this.velocity.x += (this.acceleration.x+this.thrust.x)*dt;
        this.velocity.y += (this.acceleration.y+this.thrust.y)*dt;
        this.position.x += this.velocity.x*dt;
        this.position.y += this.velocity.y*dt;
        this.thrustRequest.x = 0;
        this.thrustRequest.y = 0;
    }

    get thrust(): Vector { // actual acceleration due to thrust
        return Vector.multiply(this.thrustRequest,this.thrustNominal);
    }
}
