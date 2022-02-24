type Shape = Point | Square | Circle | Rectangle | LineSegment;

class Point {
  type = 'Point';
  constructor(readonly x: number, readonly y: number) {}
}

class Square {
  type = 'Square';
  constructor(readonly start: Point, readonly side: number) {}
}

class Circle {
  type = 'Circle';
  constructor(readonly center: Point, readonly radius: number) {}
}

class Rectangle {
  type = 'Rectangle';
  constructor(readonly start: Point, readonly finish: Point) {}
}

class Line {
  type = 'Line';
  constructor(
    readonly m: number,
    readonly c: number,
    readonly directionVector: Vector
  ) {}
}

class LineSegment {
  type = 'LineSegmentt';
  constructor(readonly start: Point, readonly finish: Point) {}
}

class Vector {
  constructor(readonly x: number, readonly y: number) {}
}

const vectorTimesNumber = (vector: Vector, number: number): Vector => {
  return new Vector(vector.x * number, vector.y * number);
};

const findVersor = (vector: Vector) => {
  const magnitude = Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2));
  const versor = new Vector(vector.x / magnitude, vector.y / magnitude);
  return versor;
};

// const findLineSegmentUntilBorder = (
//   point: Point,
//   line: Line,
//   canvas: HTMLCanvasElement
// ): LineSegment => {};
