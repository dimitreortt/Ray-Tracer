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

const hipotenuse = (opositeCatet: number, adjacentCatet: number): number => {
  return Math.sqrt(opositeCatet * opositeCatet + adjacentCatet * adjacentCatet);
};

const makeVector = (p1: Point, p2: Point) => {
  return new Vector(p2.x - p1.x, p2.y - p1.y);
};

const findLineFromPoints = (p1: Point, p2: Point) => {
  const m = (p1.y - p2.y) / (p1.x - p2.x);
  const c = m * p1.x * -1 + p1.y;
  const direction = makeVector(p1, p2);
  return new Line(m, c, direction);
};

const findLineSegmentUntilBorder = (
  point: Point,
  line: Line,
  canvas: HTMLCanvasElement
): LineSegment => {
  const directionVersor = findVersor(line.directionVector);
  const areaDiagonal = hipotenuse(canvas.width, canvas.height);
  const distanceVector = vectorTimesNumber(directionVersor, areaDiagonal);

  const distancePoint = new Point(
    point.x + distanceVector.x,
    point.y + distanceVector.y
  );

  return new LineSegment(point, distancePoint);
};
