
import {describe, expect, test} from '@jest/globals';
import {Vector} from "./vector";

describe("Vector", () => {
  test("constructor", () => {
      const x = 4.;
      const y = -5.;
      const vec = new Vector(x,y);
      expect(vec.x).toBe(x);
      expect(vec.y).toBe(y);
  });
  test("magnitude", () => {
      const x = 4.;
      const y = -5.;
      const vec = new Vector(x,y);
      expect(vec.magnitude()).toBe(Math.sqrt(x*x+y*y));
  });
  test("angleRadians", () => {
      const x = 4.;
      const y = -5.;
      const vec = new Vector(x,y);
      expect(vec.angleRadians()).toBe(Math.atan2(y,x));
  });
  test("angleDegrees", () => {
      const x = 4.;
      const y = -5.;
      const vec = new Vector(x,y);
      expect(vec.angleDegrees()).toBe(Math.atan2(y,x)*180/Math.PI);
  });
  test("add", () => {
      const x1 = 4;
      const y1 = -5;
      const x2 = 2.3;
      const y2 = 50.2;
      const vec1 = new Vector(x1,y1);
      const vec2 = new Vector(x2,y2);
      vec1.add(vec2);
      expect(vec1.x).toBe(x1+x2);
      expect(vec1.y).toBe(y1+y2);
      expect(vec2.x).toBe(x2);
      expect(vec2.y).toBe(y2);
  });
  test("static add", () => {
      const x1 = 4;
      const y1 = -5;
      const x2 = 2.3;
      const y2 = 50.2;
      const vec1 = new Vector(x1,y1);
      const vec2 = new Vector(x2,y2);
      const vec3 = Vector.add(vec1,vec2);
      expect(vec1.x).toBe(x1);
      expect(vec1.y).toBe(y1);
      expect(vec2.x).toBe(x2);
      expect(vec2.y).toBe(y2);
      expect(vec3.x).toBe(x1+x2);
      expect(vec3.y).toBe(y1+y2);
  });
  test("subtract", () => {
      const x1 = 4;
      const y1 = -5;
      const x2 = 2.3;
      const y2 = 50.2;
      const vec1 = new Vector(x1,y1);
      const vec2 = new Vector(x2,y2);
      vec1.subtract(vec2);
      expect(vec1.x).toBe(x1-x2);
      expect(vec1.y).toBe(y1-y2);
      expect(vec2.x).toBe(x2);
      expect(vec2.y).toBe(y2);
  });
  test("static subtract", () => {
      const x1 = 4;
      const y1 = -5;
      const x2 = 2.3;
      const y2 = 50.2;
      const vec1 = new Vector(x1,y1);
      const vec2 = new Vector(x2,y2);
      const vec3 = Vector.subtract(vec1,vec2);
      expect(vec1.x).toBe(x1);
      expect(vec1.y).toBe(y1);
      expect(vec2.x).toBe(x2);
      expect(vec2.y).toBe(y2);
      expect(vec3.x).toBe(x1-x2);
      expect(vec3.y).toBe(y1-y2);
  });
});
