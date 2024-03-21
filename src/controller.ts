class Controller {
    temporaryShapes: Shape[] = [];

    constructor(readonly drawer: CanvasDrawer, readonly initialShapes: Shape[]) {}

    handleClick(clickedPoint: Point) {
        // this.temporaryShapes = [clickedPoint];

        // this.drawer.drawPoint(clickedPoint);
        this.drawer.clearDraws();
        this.drawer.drawShapes(this.initialShapes.concat(this.temporaryShapes));
    
        const observerPoint = this.initialShapes[this.initialShapes.length - 1] as Point
        const direction = Vector.fromPoints(clickedPoint, observerPoint)
        this.shootRay(new Ray(observerPoint, direction, 1000))
    }

    shootRay(ray: Ray) {
        this.drawer.setLightStroke()
        this.drawer.setDefaultStroke()

        // check which points intersect with the ray
        for (const shape of this.initialShapes) {
            // const intersection = shape.intersectsWithRay(lineToBorder)
            // if (intersection) this.drawer.drawPoint(intersection)
            
            // check if shape is intersected by the 
            if (shape.type === 'Square') {
                // console.log('here')
                const rayIntersection = shape.intersectsWithRay(ray)
                if (rayIntersection) {
                    this.drawer.drawPoint(rayIntersection.intersection)
                    console.log(rayIntersection.reflexion)
                    const weight = ray.weight - 200
                    console.log(weight)
                    if (weight > 0) {
                        this.shootRay(new Ray(rayIntersection.intersection, rayIntersection.reflexion, weight))
                    }
                }
            }

            // if (shape.type === 'Rectangle') {
            //   const intersection = shape.intersectsWithRay(lineToBorder)
            //   if (intersection) this.drawer.drawPoint(intersection)
            // }
            
            // if (shape.type === 'Circle') {
            //     const rayIntersection = shape.intersectsWithRay(lineToBorder)
            //     if (rayIntersection) this.drawer.drawPoint(rayIntersection.intersection)
            // }
        }
        // calculate the closest point that intersects
    }
}
