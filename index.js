class Crircle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    
    getRadius() {
        return this.radius;
    }

    getArea() {
        return (Math.PI * this.radius * this.radius).toFixed(2);
    }
}

const instance = new Crircle(20, "blue");
console.log('radius', instance.getRadius());
console.log('Area', instance.getArea());

class Cylinder extends Crircle {
    constructor(radius, color, height) {
        super(radius, color);
        this.height = height;
    }

    getHeight() {
       return this.height;     
    }

    getVolume() {
        return super.getArea() * this.height;
    }
}

const instance2 = new Cylinder(10, "blue", 10);

console.log('height', instance2.getHeight());

console.log('volume', instance2.getVolume());

console.log('radius1', instance2.radius);

console.log('area1', instance2.getArea());

