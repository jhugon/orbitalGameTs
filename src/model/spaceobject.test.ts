import {describe, expect, test} from '@jest/globals';
import {SpaceObject} from "./spaceobject";

describe("SpaceObject", () => {
  test("constructor", () => {
      const mass = 4.;
      const thrustNominal = 5.;
      const so = new SpaceObject(mass,thrustNominal);
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
  test("updatePositionVelocity", () => {
      const so = new SpaceObject(0.,0.);
      expect(so.position.x).toBe(0.);
      expect(so.position.y).toBe(0.);
      expect(so.velocity.x).toBe(0.);
      expect(so.velocity.y).toBe(0.);
      expect(so.acceleration.x).toBe(0.);
      expect(so.acceleration.y).toBe(0.);

      so.updatePositionVelocity(1.);
      expect(so.position.x).toBe(0.);
      expect(so.position.y).toBe(0.);
      expect(so.velocity.x).toBe(0.);
      expect(so.velocity.y).toBe(0.);
      expect(so.acceleration.x).toBe(0.);
      expect(so.acceleration.y).toBe(0.);

      const ax = 5.6;
      const ay = -2.1;
      so.acceleration.x = ax;
      so.acceleration.y = ay;
      so.updatePositionVelocity(1.);
      expect(so.position.x).toBeCloseTo(ax);
      expect(so.position.y).toBeCloseTo(ay);
      expect(so.velocity.x).toBeCloseTo(ax);
      expect(so.velocity.y).toBeCloseTo(ay);
      expect(so.acceleration.x).toBeCloseTo(ax);
      expect(so.acceleration.y).toBeCloseTo(ay);
      so.updatePositionVelocity(5.);
      expect(so.position.x).toBeCloseTo((1+5*6)*ax);
      expect(so.position.y).toBeCloseTo((1+5*6)*ay);
      expect(so.velocity.x).toBeCloseTo(6*ax);
      expect(so.velocity.y).toBeCloseTo(6*ay);
      expect(so.acceleration.x).toBeCloseTo(ax);
      expect(so.acceleration.y).toBeCloseTo(ay);
  });
});
