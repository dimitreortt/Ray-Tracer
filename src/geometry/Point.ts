class Point implements Shape {
    type = 'Point';
    constructor(readonly x: number, readonly y: number) {}

    intersectsWithRay(ray: Ray): RayIntersection | null {
        return null
    }

    distanceToPoint(point: Point) {
        const deltaX = this.x - point.x;
        const deltaY = this.y - point.y;
    
        // Euclidean distance formula
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    
        return distance;
    }

    equal(otherPoint: Point) {
        return  this.x === otherPoint.x && this.y === otherPoint.y;
    }

    plusVector(vector: Vector){
        return new Point(this.x + vector.x, this.y + vector.y)
    }
}
  