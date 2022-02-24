class Controller {
  temporaryShapes: Shape[] = [];

  constructor(readonly drawer: CanvasDrawer, readonly initialShapes: Shape[]) {}

  handleClick(clickedPoint: Point) {
    this.temporaryShapes = [clickedPoint];
    // this.drawer.drawPoint(clickedPoint);
    this.drawer.clearDraws();
    this.drawer.drawShapes(this.initialShapes.concat(this.temporaryShapes));

    // find line or linesegment from clicked point until border
    // draw this line as temporary
  }
}
