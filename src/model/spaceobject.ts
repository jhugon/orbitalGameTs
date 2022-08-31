import {Vector} from "../utils/vector";

export class SpaceObject {
    // All in SI base units
    position: Vector;
    velocity: Vector;
    acceleration: Vector;
    thrust: Vector; // actual acceleration due to thrust
    thrustNominal: number; // nominal thrust value
    thrustRequest: Vector; // requested thrust, which will be multiplied by nominal
    mass: number;

    constructor(mass: number, thrustNominal: number) {
        this.position = new Vector(0,0);
        this.velocity = new Vector(0,0);
        this.acceleration = new Vector(0,0);
        this.thrust = new Vector(0,0);
        this.thrustRequest = new Vector(0,0);
        this.mass = mass;
        this.thrustNominal = thrustNominal;
    }

    updatePositionVelocity(dt: number): void {
        this.velocity.x += this.acceleration.x*dt;
        this.velocity.y += this.acceleration.y*dt;
        this.position.x += this.velocity.x*dt;
        this.position.y += this.velocity.y*dt;
    }

    updateAcceleration(acceleration: Vector): void {
        this.thrust.x = this.thrustRequest.x*this.thrustNominal;
        this.thrust.y = this.thrustRequest.y*this.thrustNominal;
        this.acceleration.x = acceleration.x+this.thrust.x;
        this.acceleration.y = acceleration.y+this.thrust.y;
        this.thrustRequest = new Vector(0.,0.);
    }
}
