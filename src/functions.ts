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

  drawCircle(center: Point, radius: number) {
    this.context.beginPath();
    this.context.arc(center.x, center.y, radius, 0, 2 * Math.PI);
    this.context.stroke();
  }

  drawLine(start: Point, finish: Point) {
    this.context.moveTo(start.x, start.y);
    this.context.lineTo(finish.x, finish.y);
    this.context.stroke();
  }

  drawSquare(start: Point, side: number) {
    this.drawLine(start, new Point(start.x + side, start.y));
    this.drawLine(
      new Point(start.x + side, start.y),
      new Point(start.x + side, start.y + side)
    );
    this.drawLine(
      new Point(start.x + side, start.y + side),
      new Point(start.x, start.y + side)
    );
    this.drawLine(new Point(start.x, start.y + side), start);
  }

  drawRectangle(start: Point, finish: Point) {
    this.drawLine(start, new Point(start.x, finish.y));
    this.drawLine(new Point(start.x, finish.y), finish);
    this.drawLine(finish, new Point(finish.x, start.y));
    this.drawLine(new Point(finish.x, start.y), start);
  }
}
