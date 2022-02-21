function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if (this.marks === undefined) {
        this.marks = [mark];
    } else {
        this.marks.push(mark);
    }
}

// Student.prototype.addMarks = function (...mark) {
//     this.marks.push([...mark]);
// }

Student.prototype.addMarks = function (...marks) {
    if (!this.marks){
        this.marks = [...marks];
    } else {
        this.marks.push(...marks);      
    }

}

Student.prototype.getAverage = function () {
    if (!this.marks) {
        return "Нет оценок"
    } else {
    return this.marks.reduce((acc, num) => acc + num, 0) / this.marks.length;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
