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
}
