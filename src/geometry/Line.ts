class Line implements Shape {
    type = 'Line';
    constructor(
      readonly m: number | null, // null for vertical lines
      readonly c: number,
      readonly directionVector: Vector
    ) {}

    intersectsWithRay(ray: LineSegment): Point | null {
        return null
    }

    // lineIntersection(otherLine: Line) {
    //     console.log(this, otherLine)
    //     // vertical lines have no intersection
    //     if (isVerticalLine(this) && isVerticalLine(otherLine)) {
    //       return null
    //     }
    
    //     if (isVerticalLine(this)) {
    //       const x = this.c
    //       const y = otherLine.m! * x + otherLine.c
    //       return new Point(x, y)
    //     }
        
    //     if (isVerticalLine(otherLine)) {
    //       const x = otherLine.c
    //       const y = this.m! * x + this.c
    //       return new Point(x, y)
    //     }
    
    //     const x = (otherLine.c - this.c) / (this.m! - otherLine.m!)
    //     const y = this.m! * x + this.c
    
    //     return new Point(x,y)
    // }
  }
  