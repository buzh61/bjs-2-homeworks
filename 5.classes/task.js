class PrintEditionItem {        	
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
	    this.type = null;
	};	
	
	fix() {
		this.state = 1.5 * this.state;
	};
	
	set state(value) {
		if (value < 0) {
			this._state = 0;
		}
		else if (value > 100) {
			this._state = 100;
		}
		else {
			this._state = value;
		}
		
	};	
	
	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state >= 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let book = this.books.find(obj => obj[type] === value)

        if (book === undefined){
            return null;
        } else {
            return book;
        }
    }

    giveBookByName(bookName) {
        let book = this.books.find(obj => obj.name === bookName);
        let bookIndex = this.books.indexOf(book);

        if (book === undefined){
            return null;
        } else {
            this.books.splice(bookIndex, 1);
            return book;
        }
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = [];
    }

    addMark(mark, course){
        let gradeBook = {
            mark: mark,
            course: course,
        }

        if (mark < 1 || mark > 5) {
            return "Ошибка, оценка должна быть числом от 1 до 5"
        } else{
            this.marks.push(gradeBook);
        }
    }

    getAverageBySubject(course){
        if (this.marks.find(obj => obj.course === course)){
            let courseMarks = this.marks.filter(obj => obj.course === course).map(obj => obj.mark);

            return courseMarks.reduce((acc, num) => acc + num, 0) / courseMarks.length;
        } else {
            return "Несуществующий предмет";
        }
    }

    getAverage() {
        let coursesMarks = this.marks.filter(obj => obj.course).map(obj => obj.mark);

        if (coursesMarks.length == 0){
            return "У студента нет оценок"
        } else {
            return coursesMarks.reduce((acc, num) => acc + num, 0) / coursesMarks.length;
        }
    }

    exclude(reason){
        return reason;
    }
}