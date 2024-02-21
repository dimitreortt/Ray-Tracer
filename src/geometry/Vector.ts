const radiansToDegrees = (radians) => {
    return radians * (180/Math.PI)
}

const degreesToRadians = (degrees) => {
    return degrees/(180/Math.PI)
}

class Vector {
    constructor(readonly x: number, readonly y: number) {
        
    }

    angleBetween(otherVector: Vector){
        const dotProduct = this.dotProduct(otherVector);
        const cosTheta = dotProduct / (this.magnitude() * otherVector.magnitude())
        return Math.acos(cosTheta)
    }

    angleBetweenClockwise(otherVector: Vector){
        // The atan2 functions return arctan y/x in the interval [−π , +π] radians
        // double Dir_C_to_A = atan2(Ay - Cy, Ax - Cx);
        // double Dir_C_to_B = atan2(By - Cy, Bx - Cx);
        // double Angle_ACB = Dir_C_to_A - Dir_C_to_B;
        const Dir_C_to_A = Math.atan2(otherVector.y, otherVector.x)
        const Dir_C_to_B = Math.atan2(this.y, this.x)
        let Angle_ACB = Dir_C_to_A - Dir_C_to_B

        // // Handle wrap around
        const Pi = Math.acos(-1);  // or use some π constant
        if (Angle_ACB > Pi) Angle_ACB -= 2*Pi;
        else if (Angle_ACB < -Pi) Angle_ACB += 2*Pi;

        // Answer is in the range of [-pi...pi]
        return Angle_ACB;
    }

    dotProduct(otherVector: Vector){
        return this.x * otherVector.x + this.y * otherVector.y
    }

    magnitude(){
        return Math.sqrt(this.x**2 + this.y**2)
    }

    // will rotate clockwise, angle is in radians
    rotate(angle: number){
        // formula to rotate clockwise in when y axis points upwards, since it points downwards we'll use the formula to rotate counterclockwise
        // const x1 = Math.cos(angle) * this.x + Math.sin(angle) * this.y
        // const y1 =  -Math.sin(angle) * this.x + Math.cos(angle) * this.y
        // return new Vector(x1, y1)

        const x1 = Math.cos(angle) * this.x - Math.sin(angle) * this.y
        const y1 =  Math.sin(angle) * this.x + Math.cos(angle) * this.y
        return new Vector(x1, y1)
    }

    reflect(normal: Vector): Vector{
        return new Vector(0, 0) // dummy
    }
}