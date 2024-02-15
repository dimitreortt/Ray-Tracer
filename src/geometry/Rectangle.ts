class Rectangle implements Shape {
    type = 'Rectangle';
    constructor(readonly start: Point, readonly finish: Point) {}

    intersectsWithRay(ray: LineSegment): Point | null {
        const rectangle = this

        const topSegment = new LineSegment(rectangle.start, new Point(rectangle.finish.x, rectangle.start.y));
        const topSegmentIntersection = ray.lineSegmentsIntersection(topSegment)
    
        const rightSegment = new LineSegment(new Point(rectangle.finish.x, rectangle.start.y), rectangle.finish);
        const rightSegmentIntersection = ray.lineSegmentsIntersection(rightSegment)
    
        const bottomSegment = new LineSegment(rectangle.finish, new Point(rectangle.start.x, rectangle.finish.y));
        const bottomSegmentIntersection = ray.lineSegmentsIntersection(bottomSegment)

        const leftSegment = new LineSegment(new Point(rectangle.start.x, rectangle.finish.y), rectangle.start);
        const leftSegmentIntersection = ray.lineSegmentsIntersection(leftSegment)

        return ray.findPointNearestToStart([topSegmentIntersection, rightSegmentIntersection, bottomSegmentIntersection, leftSegmentIntersection])
    }
}
