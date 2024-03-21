class Ray {
    constructor(readonly origin: Point, readonly direction: Vector,  readonly weight: number) {}

    toLineSegment(){
        const versor = this.direction.versor()
        const sizeVector = versor.scalarMultiplication(this.weight)
        return new LineSegment(this.origin, this.origin.plusVector(sizeVector))
    }
}