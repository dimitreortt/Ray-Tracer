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

    lineSegmentsIntersection(otherSegment: LineSegment){
        const l1 = findLineFromSegment(this)
        const l2 = findLineFromSegment(otherSegment)
      
        const intersection = lineIntersection(l1,l2)
        // const intersection2 = l1.lineIntersection(l1)
      
        // if both lines are vertical, there is no intersection
        if (intersection) {
          return checkPointInLineSegment(intersection, this) && checkPointInLineSegment(intersection, otherSegment) ? intersection : null
        }
      
        return null
    }
}