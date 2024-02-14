class Square implements Shape {
    type = 'Square';
    constructor(readonly start: Point, readonly side: number) {}

    intersectsWithRay = (ray: LineSegment) => {
        const square = this

        const topSegment = new LineSegment(square.start, new Point(square.start.x + square.side, square.start.y));
        const topSegmentIntersection = lineSegmentsIntersection(topSegment, ray)
    
        const rightSegment = new LineSegment(new Point(square.start.x + square.side, square.start.y), new Point(square.start.x + square.side, square.start.y + square.side));
        const rightSegmentIntersection = lineSegmentsIntersection(rightSegment, ray)
    
        const bottomSegment = new LineSegment(new Point(square.start.x, square.start.y + square.side), new Point(square.start.x + square.side, square.start.y + square.side));
        const bottomSegmentIntersection = lineSegmentsIntersection(bottomSegment, ray)

        const leftSegment = new LineSegment(new Point(square.start.x, square.start.y), new Point(square.start.x, square.start.y + square.side));
        const leftSegmentIntersection = lineSegmentsIntersection(leftSegment, ray)
        
        let distanceToOrigin: null | number = null;
        let closestIntersection : Point | null = null;

        [topSegmentIntersection, rightSegmentIntersection, bottomSegmentIntersection, leftSegmentIntersection].forEach((intersection) => {
            if (intersection) {
                const distance = intersection.distanceToPoint(ray.start);
                if (!distanceToOrigin || distance < distanceToOrigin) {
                    distanceToOrigin = distance
                    closestIntersection = intersection
                }
            }
        })

        return closestIntersection
    }
}
