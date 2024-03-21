class Square implements Shape {
    type = 'Square';
    constructor(readonly start: Point, readonly side: number) {}

    intersectsWithRay = (ray: Ray) => {
        const rectangle = new Rectangle(this.start, new Point(this.start.x + this.side, this.start.y + this.side))
        return rectangle.intersectsWithRay(ray)
    }
}
