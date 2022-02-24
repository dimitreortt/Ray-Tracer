class Controller {
  temporaryShapes: Shape[] = [];

  constructor(readonly drawer: CanvasDrawer, readonly initialShapes: Shape[]) {}

  handleClick(clickedPoint: Point) {
    this.temporaryShapes = [clickedPoint];
    // this.drawer.drawPoint(clickedPoint);
    this.drawer.clearDraws();
    this.drawer.drawShapes(this.initialShapes.concat(this.temporaryShapes));
  }
}
