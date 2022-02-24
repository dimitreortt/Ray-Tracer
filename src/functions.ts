function getCanvasContext(canvasId: string) {
  const canva: any = document.getElementById(canvasId);
  const context = canva!.getContext('2d');
  return context;
}

class CanvasDrawer {
  context: any;

  constructor(canvasId: string) {
    const context = getCanvasContext(canvasId);
    this.context = context;
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
    // this.drawLine(new LineSegment(start, new Point(start.x + side, start.y)));
    // this.drawLine(
    //   new LineSegment(
    //     new Point(start.x + side, start.y),
    //     new Point(start.x + side, start.y + side)
    //   )
    // );
    // this.drawLine(
    //   new LineSegment(
    //     new Point(start.x + side, start.y + side),
    //     new Point(start.x, start.y + side)
    //   )
    // );
    // this.drawLine(new LineSegment(new Point(start.x, start.y + side), start));
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
    console.log(shapes);
    for (const shape of shapes) {
      console.log(shape);
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
}
