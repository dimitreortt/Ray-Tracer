class Rectangle implements Shape {
    type = 'Rectangle';
    constructor(readonly start: Point, readonly finish: Point) {}

    intersectsWithRay(ray: Ray): RayIntersection | null {
        const rectangle = this

        const rayLineSegment = ray.toLineSegment()

        const topSegment = new LineSegment(rectangle.start, new Point(rectangle.finish.x, rectangle.start.y));
        const topSegmentIntersection = rayLineSegment.lineSegmentsIntersection(topSegment)
    
        const rightSegment = new LineSegment(new Point(rectangle.finish.x, rectangle.start.y), rectangle.finish);
        const rightSegmentIntersection = rayLineSegment.lineSegmentsIntersection(rightSegment)
    
        const bottomSegment = new LineSegment(rectangle.finish, new Point(rectangle.start.x, rectangle.finish.y));
        const bottomSegmentIntersection = rayLineSegment.lineSegmentsIntersection(bottomSegment)

        const leftSegment = new LineSegment(new Point(rectangle.start.x, rectangle.finish.y), rectangle.start);
        const leftSegmentIntersection = rayLineSegment.lineSegmentsIntersection(leftSegment)

        const nearestIntersection = rayLineSegment.findPointNearestToStart([topSegmentIntersection, rightSegmentIntersection, bottomSegmentIntersection, leftSegmentIntersection])

        let normal = null
        // see which point is the intersection and get its normal vect
        if (nearestIntersection) {
            if (topSegmentIntersection && nearestIntersection.equal(topSegmentIntersection)) {
                // get top segment Normal
                normal = new Vector(0, -1)
            } else if (rightSegmentIntersection && nearestIntersection.equal(rightSegmentIntersection)) {
                // get right segment Normal
                normal = new Vector(1, 0)
            } else if (bottomSegmentIntersection && nearestIntersection.equal(bottomSegmentIntersection)) {
                // get bottom segment Normal
                normal = new Vector(0, 1)
            } else if (leftSegmentIntersection && nearestIntersection.equal(leftSegmentIntersection)) {
                // get left segment Normal
                normal = new Vector(-1, 0)
            }

            const rayIntersection = new RayIntersection(ray, nearestIntersection, normal!)
            return rayIntersection
        }

        return null
    }
}
