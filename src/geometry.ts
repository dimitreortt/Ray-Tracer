abstract class Shape {
  abstract type: string;
}

class Point implements Shape {
  type = 'Point';
  constructor(readonly x: number, readonly y: number) {}
}
