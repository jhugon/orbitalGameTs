
import {describe, expect, test} from '@jest/globals';
import {Vector} from "./vector";

const x1 = 4.;
const y1 = -5;
const x2 = 2.3;
const y2 = 50.2;
const sf1 = 6.356;
const sf2 = 1e-3;

describe("Vector", () => {
  test("constructor", () => {
      const vec = new Vector(x1,y1);
      expect(vec.x).toBe(x1);
      expect(vec.y).toBe(y1);
  });
  test("magnitude", () => {
      const vec = new Vector(x1,y1);
      expect(vec.magnitude).toBe(Math.sqrt(x1*x1+y1*y1));
  });
  test("angleRadians", () => {
      const vec = new Vector(x1,y1);
      expect(vec.angleRadians).toBe(Math.atan2(y1,x1));
  });
  test("angleDegrees", () => {
      const vec = new Vector(x1,y1);
      expect(vec.angleDegrees).toBe(Math.atan2(y1,x1)*180/Math.PI);
  });
  test("add", () => {
      const vec1 = new Vector(x1,y1);
      const vec2 = new Vector(x2,y2);
      vec1.add(vec2);
      expect(vec1.x).toBe(x1+x2);
      expect(vec1.y).toBe(y1+y2);
      expect(vec2.x).toBe(x2);
      expect(vec2.y).toBe(y2);
  });
  test("static add", () => {
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
      const vec1 = new Vector(x1,y1);
      const vec2 = new Vector(x2,y2);
      vec1.subtract(vec2);
      expect(vec1.x).toBe(x1-x2);
      expect(vec1.y).toBe(y1-y2);
      expect(vec2.x).toBe(x2);
      expect(vec2.y).toBe(y2);
  });
  test("static subtract", () => {
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
  test("multiply", () => {
      const vec1 = new Vector(x1,y1);
      vec1.multiply(sf1);
      expect(vec1.x).toBe(x1*sf1);
      expect(vec1.y).toBe(y1*sf1);
      vec1.multiply(sf2);
      expect(vec1.x).toBe(x1*sf1*sf2);
      expect(vec1.y).toBe(y1*sf1*sf2);
  });
  test("static multiply", () => {
      const vec1 = new Vector(x1,y1);
      const vec2 = Vector.multiply(vec1,sf1);
      const vec3 = Vector.multiply(vec1,sf2);
      expect(vec1.x).toBe(x1);
      expect(vec1.y).toBe(y1);
      expect(vec2.x).toBe(x1*sf1);
      expect(vec2.y).toBe(y1*sf1);
      expect(vec3.x).toBe(x1*sf2);
      expect(vec3.y).toBe(y1*sf2);
  });
  test("divide", () => {
      const vec1 = new Vector(x1,y1);
      vec1.divide(sf1);
      expect(vec1.x).toBe(x1/sf1);
      expect(vec1.y).toBe(y1/sf1);
      vec1.divide(sf2);
      expect(vec1.x).toBe(x1/sf1/sf2);
      expect(vec1.y).toBe(y1/sf1/sf2);
  });
  test("static divide", () => {
      const vec1 = new Vector(x1,y1);
      const vec2 = Vector.divide(vec1,sf1);
      const vec3 = Vector.divide(vec1,sf2);
      expect(vec1.x).toBe(x1);
      expect(vec1.y).toBe(y1);
      expect(vec2.x).toBe(x1/sf1);
      expect(vec2.y).toBe(y1/sf1);
      expect(vec3.x).toBe(x1/sf2);
      expect(vec3.y).toBe(y1/sf2);
  });
  test("normalize", () => {
      const vec1 = new Vector(x1,y1);
      const mag = Math.sqrt(x1*x1+y1*y1)
      vec1.normalize();
      expect(vec1.x).toBe(x1/mag);
      expect(vec1.y).toBe(y1/mag);
      expect(Math.sqrt(vec1.x*vec1.x+vec1.y*vec1.y)).toBe(1.);
  });
  test("static normalize", () => {
      const vec1 = new Vector(x1,y1);
      const vec2 = Vector.normalize(vec1);
      const mag = Math.sqrt(x1*x1+y1*y1)
      expect(vec1.x).toBe(x1);
      expect(vec1.y).toBe(y1);
      expect(vec2.x).toBe(x1/mag);
      expect(vec2.y).toBe(y1/mag);
      expect(Math.sqrt(vec2.x*vec2.x+vec2.y*vec2.y)).toBe(1.);
  });
});
