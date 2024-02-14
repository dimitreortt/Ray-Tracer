class LineSegment implements Shape {
    type = 'LineSegmentt';
    constructor(readonly start: Point, readonly finish: Point) {}

    intersectsWithRay(ray: LineSegment): Point | null {
        
        return null
    }
  }