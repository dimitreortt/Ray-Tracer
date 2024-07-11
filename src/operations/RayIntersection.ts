class RayIntersection {
    reflexion: Vector

    constructor(readonly originalRay: Ray, readonly intersection: Point, readonly normal: Vector) {
        
        this.reflexion = originalRay.direction.reflect(normal)
    }
}