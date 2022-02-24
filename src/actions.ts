const handleClick = (clickedPoint: Point) => {
  const drawer = new CanvasDrawer('space-square');
  const observerPoint = new Point(200, 250);
  drawer.drawPoint(observerPoint);
  drawer.drawPoint(clickedPoint);
};
