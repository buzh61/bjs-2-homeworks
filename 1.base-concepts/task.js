function solveEquation(a, b, c) {
    let arr = [];

    const discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant === 0) {
        let radix = -b / (2 * a);
        arr = [radix];
        return arr;
    } else if (discriminant > 0) {
        firstEquation = Math.round((-b + Math.sqrt(b)) / (2 * a));
        secondEquation = Math.round((-b - Math.sqrt(b)) / (2 * a));
        arr = [firstEquation, secondEquation];
        return arr;
    }
    return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
    let dateFrom = new Date();
    let dateTo = new Date(date);
    let rateCoefficient = (parseInt(percent) / 12) / 100;
    const creditSum = parseInt(amount) - parseInt(contribution);
    const creditDate = dateTo.getMonth() - dateFrom.getMonth() +
        (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));

    let monthlyPayment = creditSum * (rateCoefficient + (rateCoefficient / (((1 + rateCoefficient) ** creditDate) - 1)));

    if (Number.isNaN(parseInt(amount))) {
        totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
        console.log(amount);
        return totalAmount;
    } else if (Number.isNaN(parseInt(contribution))) {
        totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
        return totalAmount;
    } else if (Number.isNaN(parseInt(percent))) {
        totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
        return totalAmount;
    } else {
        totalAmount = Number((monthlyPayment * creditDate).toFixed(2));
    }

    return totalAmount;
}
