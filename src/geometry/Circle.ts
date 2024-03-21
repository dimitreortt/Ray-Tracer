class Circle implements Shape {
    type = 'Circle';
    constructor(readonly center: Point, readonly radius: number) {}

    intersectsWithRay(ray: Ray): RayIntersection | null {
        const rayLineSegment = ray.toLineSegment()
        const result = this.findIntersectionWithLineSegment(rayLineSegment)
        if (result) {
            const closestIntersection = rayLineSegment.findPointNearestToStart(result)
            const rayIntersection = new RayIntersection(ray, closestIntersection!, Vector.fromPoints(closestIntersection!, this.center))
            return rayIntersection
        }
        return null
    }

    findIntersectionWithLineSegment(lineSegment: LineSegment): Point[] | null {
        const cx = this.center.x;
        const cy = this.center.y;
        const r = this.radius;
    
        const pointA = lineSegment.start
        const pointB = lineSegment.finish
        const x1 = pointA.x;
        const y1 = pointA.y;
        const x2 = pointB.x;
        const y2 = pointB.y;
    
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;
    
        const A = deltaX ** 2 + deltaY ** 2;
        const B = 2 * (deltaX * (x1 - cx) + deltaY * (y1 - cy));
        const C = (x1 - cx) ** 2 + (y1 - cy) ** 2 - r ** 2;
    
        // Calculate the discriminant
        const discriminant = B ** 2 - 4 * A * C;
    
        if (discriminant < 0) {
          // No intersection
          return null;
        }
    
        // Calculate the two possible values for t
        const t1 = (-B + Math.sqrt(discriminant)) / (2 * A);
        const t2 = (-B - Math.sqrt(discriminant)) / (2 * A);
    
        // Check if the intersection points are within the line segment
        const intersectionPoints: Point[] = [];
    
        if (t1 >= 0 && t1 <= 1) {
          intersectionPoints.push(new Point(x1 + t1 * deltaX, y1 + t1 * deltaY));
        }
    
        if (t2 >= 0 && t2 <= 1) {
          intersectionPoints.push(new Point(x1 + t2 * deltaX, y1 + t2 * deltaY));
        }
    
        return intersectionPoints.length > 0 ? intersectionPoints : null;
      }
  }
  