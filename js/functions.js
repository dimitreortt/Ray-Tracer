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
}
