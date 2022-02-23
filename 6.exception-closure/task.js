function parseCount(value) {
    if (Number.isNaN(parseInt(value))) {
        throw new Error("Невалидное значение");
    } else {
        return Number.parseInt(value);
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (parseError) {
        return parseError;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.error = this.a + this.b < this.c || this.b + this.c < this.a || this.c + this.a < this.b
        
        if (this.error) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = 1 / 2 * this.getPerimeter();

        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }

}


function getTriangle(a, b, c){
    try {
        let triangle = new Triangle (a, b, c);
        console.log(triangle.getPerimeter())
        console.log(triangle.getArea())
        console.log()
        triangle.getPerimeter();
        triangle.getArea();
        return triangle;
    } catch {
        throw new Error("Ошибка! Треугольник не существует");
    }
}

getTriangle(1, 2, 100);