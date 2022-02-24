class Controller {
  constructor(readonly drawer: CanvasDrawer) {}

  handleClick(clickedPoint: Point) {
    console.log('oi');
    this.drawer.drawPoint(clickedPoint);
  }
}
