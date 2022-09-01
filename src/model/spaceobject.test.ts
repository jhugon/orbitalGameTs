import {describe, expect, test} from '@jest/globals';
import {SpaceObject} from "./spaceobject";
//import {Vector} from "../utils/vector";

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
  test("update", () => {
      const thrustNominal = 67.3;
      const so = new SpaceObject(0.,thrustNominal);
      expect(so.position.x).toBe(0.);
      expect(so.position.y).toBe(0.);
      expect(so.velocity.x).toBe(0.);
      expect(so.velocity.y).toBe(0.);
      expect(so.acceleration.x).toBe(0.);
      expect(so.acceleration.y).toBe(0.);

      so.update(1.);
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
      so.update(1.);
      expect(so.position.x).toBeCloseTo(ax);
      expect(so.position.y).toBeCloseTo(ay);
      expect(so.velocity.x).toBeCloseTo(ax);
      expect(so.velocity.y).toBeCloseTo(ay);
      expect(so.acceleration.x).toBeCloseTo(ax);
      expect(so.acceleration.y).toBeCloseTo(ay);
      so.update(5.);
      expect(so.position.x).toBeCloseTo((1+5*6)*ax);
      expect(so.position.y).toBeCloseTo((1+5*6)*ay);
      expect(so.velocity.x).toBeCloseTo(6*ax);
      expect(so.velocity.y).toBeCloseTo(6*ay);
      expect(so.acceleration.x).toBeCloseTo(ax);
      expect(so.acceleration.y).toBeCloseTo(ay);

      so.acceleration.x = 0.
      so.acceleration.y = 0.
      so.velocity.x = 0.
      so.velocity.y = 0.
      so.position.x = 0.
      so.position.y = 0.
      so.thrustRequest.x = 0.5;
      so.thrustRequest.y = 0.1;
      so.update(1.);
      expect(so.position.x).toBeCloseTo(0.5*thrustNominal);
      expect(so.position.y).toBeCloseTo(0.1*thrustNominal);
      expect(so.velocity.x).toBeCloseTo(0.5*thrustNominal);
      expect(so.velocity.y).toBeCloseTo(0.1*thrustNominal);
      expect(so.acceleration.x).toBeCloseTo(0.);
      expect(so.acceleration.y).toBeCloseTo(0.);
  });
});
