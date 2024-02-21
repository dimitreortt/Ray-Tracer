class Controller {
  temporaryShapes: Shape[] = [];

  constructor(readonly drawer: CanvasDrawer, readonly initialShapes: Shape[]) {
    

  }

  handleClick(clickedPoint: Point) {
    this.temporaryShapes = [clickedPoint];

    const n = new Vector(0, 100)
    const i = new Vector(-100, -100)
    const i2 = new Vector(100, -100)

    // console.log(radiansToDegrees(n.angleBetweenClockwise(i)))
    let angle = radiansToDegrees(n.angleBetweenClockwise(i2))
    if (angle < 0) {
      angle = 360 + angle
    }
    console.log(angle)

    if (angle > 90 && angle < 180) {
      // descubra -in e faça rotate (n, -in) clockwise
      const inverseI = new Vector(-i.x, -i.y)
      const inverseIN = inverseI.angleBetweenClockwise(n)
      const r = n.rotate(inverseIN)
      console.log(r)

    } else if (angle > 180 && angle < 270) {
      // descubra ni e faça rotate (n, ni) counterclockwise
      const inverseI = new Vector(-i2.x, -i2.y)
      const nInverseI = n.angleBetweenClockwise(inverseI)
      const r = n.rotate(-nInverseI)
      console.log(r)
    } 

    // console.log(radiansToDegrees(n.angleBetweenClockwise(i2)))

    // this.drawer.drawPoint(clickedPoint);
    this.drawer.clearDraws();
    this.drawer.drawShapes(this.initialShapes.concat(this.temporaryShapes));
 
    // find line or linesegment from clicked point until border
    // draw this line as temporary
    this.shootRay()

    
  }

  shootRay() {
    const p1 = this.initialShapes[this.initialShapes.length - 1]
    const p2 = this.temporaryShapes[0]

    this.drawer.setLightStroke()


    // find vector to be used as direction
    const versor = findVersor(makeVector(p1, p2))

    // create 'infinite ray' (simply go to the border)
    const line = findLineFromPoints(p1, p2)
    const lineToBorder = findLineSegmentUntilBorder(p1, line, this.drawer.canvas)
    // this.drawer.drawLine(new LineSegment(p1 as Point, p2 as Point))
    this.drawer.drawLine(lineToBorder)
    this.drawer.setDefaultStroke()



    // check which points intersect with the ray
    for (const shape of this.initialShapes) {
      const intersection = shape.intersectsWithRay(lineToBorder)
      if (intersection) this.drawer.drawPoint(intersection)
      
      // check if shape is intersected by the 
      // if (shape.type === 'Square') {
      //   // console.log('here')
      //   const intersection = shape.intersectsWithRay(lineToBorder)
      //   if (intersection) this.drawer.drawPoint(intersection)
      // }

      // if (shape.type === 'Rectangle') {
      //   const intersection = shape.intersectsWithRay(lineToBorder)
      //   if (intersection) this.drawer.drawPoint(intersection)
      // }
      
      // if (shape.type === 'Circle') {
      //   const intersection = shape.intersectsWithRay(lineToBorder)
      //   if (intersection) this.drawer.drawPoint(intersection)
      // }
    }
    // calculate the closest point that intersects
  }


}
