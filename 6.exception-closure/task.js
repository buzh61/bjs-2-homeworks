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
        
        if (this.a + this.b < this.c || this.b + this.c < this.a || this.c + this.a < this.b) {
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

class fakeTriangle {
    constructor(a, b, c) {
        this.a = a;
        this.a = b;
        this.a = c;
    }

    getPerimeter(){
        return "Ошибка! Треугольник не существует"
    }
    getArea(){
        return "Ошибка! Треугольник не существует"
    }
}

function getTriangle(a, b, c){
    try {
        return new Triangle(a, b, c);
    } catch {
        return new fakeTriangle(a, b, c);
    }
}