// type Shape = Point | Square | Circle | Rectangle | LineSegment;



// class Point {
//   type = 'Point';
//   constructor(readonly x: number, readonly y: number) {}
// }

// class Square {
//   type = 'Square';
//   constructor(readonly start: Point, readonly side: number) {}
// }

// class Circle {
//   type = 'Circle';
//   constructor(readonly center: Point, readonly radius: number) {}
// }

// class Rectangle {
//   type = 'Rectangle';
//   constructor(readonly start: Point, readonly finish: Point) {}
// }

class Line {
  type = 'Line';
  constructor(
    readonly m: number | null, // null for vertical lines
    readonly c: number,
    readonly directionVector: Vector
  ) {}
}



class Vector {
  constructor(readonly x: number, readonly y: number) {}
}

const vectorTimesNumber = (vector: Vector, number: number): Vector => {
  return new Vector(vector.x * number, vector.y * number);
};

const findVersor = (vector: Vector) => {
  const magnitude = Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2));
  const versor = new Vector(vector.x / magnitude, vector.y / magnitude);
  return versor;
};

const hipotenuse = (opositeCatet: number, adjacentCatet: number): number => {
  return Math.sqrt(opositeCatet * opositeCatet + adjacentCatet * adjacentCatet);
};

const makeVector = (p1: Point, p2: Point) => {
  return new Vector(p2.x - p1.x, p2.y - p1.y);
};

const findLineFromPoints = (p1: Point, p2: Point) => {
  // if is vertical line, formula is: x = c
  if (p1.x === p2.x) {
    return new Line(null, p1.x, new Vector(1, 1))
  }

  const m = (p1.y - p2.y) / (p1.x - p2.x);
  const c = m * p1.x * -1 + p1.y;
  const direction = makeVector(p1, p2);
  return new Line(m, c, direction);
};

const findLineFromSegment = (segment: LineSegment) => {
    return findLineFromPoints(segment.start, segment.finish)
}

const findLineSegmentUntilBorder = (
  point: Point,
  line: Line,
  canvas: HTMLCanvasElement
): LineSegment => {
  const directionVersor = findVersor(line.directionVector);
  const areaDiagonal = hipotenuse(canvas.width, canvas.height);
  const distanceVector = vectorTimesNumber(directionVersor, areaDiagonal);

  const distancePoint = new Point(
    point.x + distanceVector.x,
    point.y + distanceVector.y
  );

  return new LineSegment(point, distancePoint);
};

const isVerticalLine = (line: Line) => {
  return line.m === null
}

const lineIntersection = (line1: Line, line2: Line) => {
    // vertical lines have no intersection
    if (isVerticalLine(line1) && isVerticalLine(line2)) {
      return null
    }

    if (isVerticalLine(line1)) {
      const x = line1.c
      const y = line2.m! * x + line2.c
      return new Point(x, y)
    }
    
    if (isVerticalLine(line2)) {
      const x = line2.c
      const y = line1.m! * x + line1.c
      return new Point(x, y)
    }

    const x = (line2.c - line1.c) / (line1.m! - line2.m!)
    const y = line1.m! * x + line1.c

    return new Point(x,y)
}

const checkValueInLineSegmentAxis = (point: Point, segment: LineSegment, axis: 'x' | 'y') => {
  if (segment.start[axis] < segment.finish[axis]) {
    if (point[axis] >= segment.start[axis] && point[axis] <= segment.finish[axis]) {
      return true
    }
  } else {
    if (point[axis] >= segment.finish[axis] && point[axis] <= segment.start[axis]) {
      return true
    }
  }
  return false
}

const checkPointInLineSegment = (point: Point, segment: LineSegment) => {
  return checkValueInLineSegmentAxis(point,  segment, "x") && checkValueInLineSegmentAxis(point, segment, "y");
}

const lineSegmentsIntersection = (segment1: LineSegment, segment2: LineSegment) => {
  const l1 = findLineFromSegment(segment1)
  const l2 = findLineFromSegment(segment2)

  const intersection = lineIntersection(l1, l2)

  // if both lines are vertical, there is no intersection
  if (intersection) {
    return checkPointInLineSegment(intersection, segment1) && checkPointInLineSegment(intersection, segment2) ? intersection : null
  }

  return null
}

const squareIntersectsWithRay = (square: Square, line: LineSegment) => {
    // intersects with top? 
    const topSegment = new LineSegment(square.start, new Point(square.start.x + square.side, square.start.y));
    // console.log(lineSegmentsIntersection(topSegment, line))

    // intersects with right?
    const rightSegment = new LineSegment(new Point(square.start.x + square.side, square.start.y), new Point(square.start.x + square.side, square.start.y + square.side));
    // console.log(lineSegmentsIntersection(rightSegment, line))

    // intersects with bottom?
    const bottomSegment = new LineSegment(new Point(square.start.x, square.start.y + square.side), new Point(square.start.x + square.side, square.start.y + square.side));
    // console.log(lineSegmentsIntersection(bottomSegment, line))

    // intersects with left?
    const leftSegment = new LineSegment(new Point(square.start.x, square.start.y), new Point(square.start.x, square.start.y + square.side));
    // console.log(lineSegmentsIntersection(leftSegment, line))

    return lineSegmentsIntersection(topSegment, line) ||
          lineSegmentsIntersection(rightSegment, line) ||
          lineSegmentsIntersection(bottomSegment, line) ||
          lineSegmentsIntersection(leftSegment, line)
}