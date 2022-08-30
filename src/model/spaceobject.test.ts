import {describe, expect, test} from '@jest/globals';
import * as spaceobject from "./spaceobject.ts";

test("initialize a SpaceObject", () => {
    const mass = 4.;
    const thrustNominal = 5.;
    const so = spaceobject.init(mass,thrustNominal);
    expect(so.position.x).toBe(0.);
    expect(so.position.y).toBe(0.);
    expect(so.velocity.x).toBe(0.);
    expect(so.velocity.y).toBe(0.);
    expect(so.acceleration.x).toBe(0.);
    expect(so.acceleration.y).toBe(0.);
    expect(so.thrust.x).toBe(0.);
    expect(so.thrust.y).toBe(0.);
    expect(so.thrustNominal).toBe(thrustNominal);
    expect(so.mass).toBe(mass);
});
