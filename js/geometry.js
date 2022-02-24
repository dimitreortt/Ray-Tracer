"use strict";
class Shape {
}
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.type = 'Point';
    }
}
class Square {
    constructor(start, side) {
        this.start = start;
        this.side = side;
        this.type = 'Square';
    }
}
