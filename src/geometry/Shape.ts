interface Shape {
    type: string
    intersectsWithRay(ray: LineSegment): Point | null
}