class CanvasDrawer {
  context: CanvasRenderingContext2D;

  constructor(readonly canvas: HTMLCanvasElement) {
    const context = canvas.getContext('2d');
    this.context = context!;
  }

  setLightStroke() {
    this.context.strokeStyle = '#E6D14C';
  }

  setDefaultStroke() {
    this.context.strokeStyle = '#000000';
  }

  drawCircle(circle: Circle) {
    this.context.beginPath();
    this.context.arc(
      circle.center.x,
      circle.center.y,
      circle.radius,
      0,
      2 * Math.PI
    );
    this.context.stroke();
  }

  drawLine(line: LineSegment) {
    this.context.moveTo(line.start.x, line.start.y);
    this.context.lineTo(line.finish.x, line.finish.y);
    this.context.stroke();
  }

  drawSquare(square: Square) {
    const start = square.start;
    const side = square.side;
    this.drawRectangle(
      new Rectangle(start, new Point(start.x + side, start.y + side))
    );
  }

  drawRectangle(rectangle: Rectangle) {
    const start = rectangle.start;
    const finish = rectangle.finish;
    this.drawLine(new LineSegment(start, new Point(start.x, finish.y)));
    this.drawLine(new LineSegment(new Point(start.x, finish.y), finish));
    this.drawLine(new LineSegment(finish, new Point(finish.x, start.y)));
    this.drawLine(new LineSegment(new Point(finish.x, start.y), start));
  }

  drawPoint(position: Point) {
    this.drawCircle(new Circle(position, 2));
  }

  drawShapes(shapes: Shape[]) {
    for (const shape of shapes) {
      switch (shape.type) {
        case 'Circle':
          this.drawCircle(shape as Circle);
          break;
        case 'Square':
          this.drawSquare(shape as Square);
          break;
        case 'Rectangle':
          this.drawRectangle(shape as Rectangle);
          break;
        case 'LineSegment':
          this.drawLine(shape as LineSegment);
          break;
        case 'Point':
          this.drawPoint(shape as Point);
          break;
        default:
          break;
      }
    }
  }

  clearDraws() {
    const width = this.canvas.width;
    const height = this.canvas.height;
    this.context.clearRect(0, 0, width, height);
  }
}
