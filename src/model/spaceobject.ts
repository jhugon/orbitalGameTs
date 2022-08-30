
export interface Vector {
    x: number;
    y: number;
}

// All in SI base units
export interface SpaceObject {
    position: Vector;
    velocity: Vector;
    acceleration: Vector;
    thrust: Vector; // actual acceleration due to thrust
    thrustNominal: number; // nominal thrust value
    mass: number;
}

export function init(mass: number, thrustNominal: number): SpaceObject {
    const result: SpaceObject = {
        position: {x: 0., y:0.},
        velocity: {x: 0., y:0.},
        acceleration: {x: 0., y:0.},
        thrust: {x: 0., y:0.},
        thrustNominal: thrustNominal,
        mass: mass,
    };
    return result
}

export function updatePositionVelocity(so: SpaceObject, dt: number): void {
    const {position, velocity, acceleration} = so;
    velocity.x += acceleration.x*dt;
    velocity.y += acceleration.y*dt;
    position.x += velocity.x*dt;
    position.y += velocity.y*dt;
}
