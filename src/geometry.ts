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
    directionVector: Vector
  ) {}
}

class LineSegment {
  type = 'LineSegmentt';
  constructor(readonly start: Point, readonly finish: Point) {}
}

class Vector {
  constructor(readonly x: number, readonly y: number) {}
}
