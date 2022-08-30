import {describe, expect, test} from '@jest/globals';
import type {SpaceObject} from "./spaceobject";
import {init as SOinit} from "./spaceobject";

describe("SpaceObject Unit Tests", () => {
  test("initialize", () => {
      const mass = 4.;
      const thrustNominal = 5.;
      const so: SpaceObject = SOinit(mass,thrustNominal);
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
});
