"use strict";
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
class Circle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
        this.type = 'Circle';
    }
}
class Rectangle {
    constructor(start, finish) {
        this.start = start;
        this.finish = finish;
        this.type = 'Rectangle';
    }
}
class Line {
    constructor(m, c, directionVector) {
        this.m = m;
        this.c = c;
        this.type = 'Line';
    }
}
class LineSegment {
    constructor(start, finish) {
        this.start = start;
        this.finish = finish;
        this.type = 'LineSegment';
    }
}
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
