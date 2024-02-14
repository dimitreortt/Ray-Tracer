class LineSegment implements Shape {
    type = 'LineSegmentt';
    constructor(readonly start: Point, readonly finish: Point) {}

    intersectsWithRay(ray: LineSegment): Point | null {
        
        return null
    }

    findPointNearestToStart(points: (Point|null)[]){
        let distanceToStart: null | number = null
        let closestPoint : Point | null = null;

        points.forEach((point) => {
            if (point) {
                const distance = point.distanceToPoint(this.start);
                if (!distanceToStart || distance < distanceToStart) {
                    distanceToStart = distance
                    closestPoint = point
                }
            }
        })

        return closestPoint
    }
  }