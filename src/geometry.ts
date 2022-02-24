abstract class Shape {
  abstract type: string;
}

class Point implements Shape {
  type = 'Point';

  constructor(readonly x: number, readonly y: number) {}
}

class Square implements Shape {
  type = 'Square';

  constructor(readonly start: Point, readonly side: number) {}
}
