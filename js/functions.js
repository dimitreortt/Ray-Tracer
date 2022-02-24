"use strict";
function getCanvasContext(canvasId) {
    const canva = document.getElementById(canvasId);
    const context = canva.getContext('2d');
    return context;
}
class CanvasDrawer {
    constructor(canvasId) {
        const context = getCanvasContext(canvasId);
        this.context = context;
    }
    drawCircle(center, radius) {
        this.context.beginPath();
        this.context.arc(center.x, center.y, radius, 0, 2 * Math.PI);
        this.context.stroke();
    }
    drawLine(start, finish) {
        this.context.moveTo(start.x, start.y);
        this.context.lineTo(finish.x, finish.y);
        this.context.stroke();
    }
    drawSquare(start, side) {
        this.drawLine(start, new Point(start.x + side, start.y));
        this.drawLine(new Point(start.x + side, start.y), new Point(start.x + side, start.y + side));
        this.drawLine(new Point(start.x + side, start.y + side), new Point(start.x, start.y + side));
        this.drawLine(new Point(start.x, start.y + side), start);
    }
}
