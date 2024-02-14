class Rectangle implements Shape {
    type = 'Rectangle';
    constructor(readonly start: Point, readonly finish: Point) {}

    intersectsWithRay(ray: LineSegment): Point | null {
        const rectangle = this

        const topSegment = new LineSegment(rectangle.start, new Point(rectangle.finish.x, rectangle.start.y));
        const topSegmentIntersection = lineSegmentsIntersection(topSegment, ray)
    
        const rightSegment = new LineSegment(new Point(rectangle.finish.x, rectangle.start.y), rectangle.finish);
        const rightSegmentIntersection = lineSegmentsIntersection(rightSegment, ray)
    
        const bottomSegment = new LineSegment(rectangle.finish, new Point(rectangle.start.x, rectangle.finish.y));
        const bottomSegmentIntersection = lineSegmentsIntersection(bottomSegment, ray)

        const leftSegment = new LineSegment(new Point(rectangle.start.x, rectangle.finish.y), rectangle.start);
        const leftSegmentIntersection = lineSegmentsIntersection(leftSegment, ray)

        return ray.findPointNearestToStart([topSegmentIntersection, rightSegmentIntersection, bottomSegmentIntersection, leftSegmentIntersection])
    }
}
