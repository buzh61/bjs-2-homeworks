function parseCount(value) {
    if (Number.isNaN(parseInt(value))) {
        let parseError = new Error("Невалидное значение");
        throw parseError;
    } else {
        return Number.parseInt(value);
    }
}

parseCount();
    
    