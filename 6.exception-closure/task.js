function parseCount(value) {
    if (Number.isNaN(parseInt(value))) {
        let parseError = new Error("Невалидное значение");
        throw parseError;
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
            let triangleError = new Error("Треугольник с такими сторонами не существует");
            throw triangleError;
        }
    }

    getPerimeter() {
        if (this.error){
            let triangleError = new Error("Ошибка! Треугольник не существует");
            throw triangleError;
        } else {
        return this.a + this.b + this.c;
        }
    }

    getArea() {
        if (this.error){
            let triangleError = new Error("Ошибка! Треугольник не существует");
            throw triangleError;
        } else {
        let p = 1 / 2 * this.getPerimeter();

        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
        }
    }

}

function getTriangle(a, b, c){
    try {
        let triangle = new Triangle(a, b, c);
        return triangle;
    } catch {
        let triangle = new Triangle(a, b, c);
        this.getArea();
        this.getPerimeter();
    }
}

getTriangle(1, 2, 100)