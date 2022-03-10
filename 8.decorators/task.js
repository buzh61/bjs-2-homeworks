function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        let hash = args.join(',');
        let idx = cache.findIndex((item) => item.hash === hash);

        if (idx !== -1) {
            console.log('Из кэша: ' + cache.map(item => item.value));
            return 'Из кэша: ' + cache.map(item => item.value);
        }

        let value = func(...args);
        cache.push({hash, value});

        if (cache.length > 5) cache.shift()

        console.log('Вычисляем: ' + value);
        return 'Вычисляем: ' + value;
    }
    return wrapper;
}


function debounceDecoratorNew(func, ms) {
    let timeout;
    let flag = false;

    function wrapper(...args) {
        if (flag === false) {
            func(...args);
            flag = true;
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
            flag = false;
        }, ms);
    }
    return wrapper;
}


function debounceDecorator2(func, ms) {
    let timeout;
    let flag = false;
    wrapper.count = 0;

    function wrapper(...args) {
        if (flag === false) {
            func(...args);
            flag = true;
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
            wrapper.count += 1;
            flag = false;
        }, ms);
    }
    return wrapper;
}