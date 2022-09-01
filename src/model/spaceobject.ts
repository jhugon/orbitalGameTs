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

    // velocity is updated with dt*(acceleration + thrust)
    update(dt: number): void {
        this.thrust.x = this.thrustRequest.x*this.thrustNominal;
        this.thrust.y = this.thrustRequest.y*this.thrustNominal;
        this.velocity.x += (this.acceleration.x+this.thrust.x)*dt;
        this.velocity.y += (this.acceleration.y+this.thrust.y)*dt;
        this.position.x += this.velocity.x*dt;
        this.position.y += this.velocity.y*dt;
        this.thrustRequest = new Vector(0.,0.);
    }
}
