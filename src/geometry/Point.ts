class Point implements Shape{
    type = 'Point';
    constructor(readonly x: number, readonly y: number) {}

    intersectsWithRay(ray: LineSegment): Point | null {
        return null
    }

    distanceToPoint(point: Point){
        const deltaX = this.x - point.x;
        const deltaY = this.y - point.y;
    
        // Euclidean distance formula
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    
        return distance;
    }
}
  