"use strict";
const handleClick = (clickedPoint) => {
    const drawer = new CanvasDrawer('space-square');
    const observerPoint = new Point(200, 250);
    //   drawer.drawPoint(observerPoint);
    drawer.drawPoint(clickedPoint);
};
