interface Shape {
    type: string
    intersectsWithRay(ray: Ray): RayIntersection | null
}