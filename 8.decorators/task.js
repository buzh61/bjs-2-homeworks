function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args){
        let hash = args.join(',');
        let idx = cache.findIndex((item) => item["hash"] === hash);
        
        if (idx !== -1) {
            console.log('Из кэша: ' + cache.map(item => item.value));
            return 'Из кэша: ' + cache.map(item => item.value);
        }
            
        let result = func(...args);
        cache.push({
                    "hash": hash, 
                    "value": result,
                });
        
        if (cache.length > 5) {
            cache.shift();
        }
        
        console.log('Вычисляем: ' + result);
        return 'Вычисляем: ' + result;  
    }
    return wrapper;
}


function debounceDecoratorNew(func, ms) {
    let timeout;
    let flag = false ;

    function wrapper(...args){
        if (flag === false) {
            func(...args);
            flag = true;
            timeout = setTimeout(() => {func(...args), ms});
        } else {
            timeout = setTimeout(() => {func(...args), ms});
            flag = false;
        }
        clearTimeout(timeout);
    }
    return wrapper;
}


function debounceDecorator2(func, ms) {
    let timeout;
    let flag = false ;
    
    function wrapper(...args){
        wrapper.count = 0;
        console.log(wrapper.count);
        if (flag === false){
            flag = true;
            timeout = setTimeout(() => {
                func(...args);
                wrapper.count =+ 1;
            }, ms);
            flag = false;
            
        } else {
            timeout = setTimeout(() => {func(...args), ms});
            flag = false;
        }
        clearTimeout(timeout);
    }
    return wrapper;
}



function debounceDecorator2(func, ms) {
    let timeout;
    let flag = false;
    
    function wrapper(...args){
        let count = 0;
        console.log(count);
        if (flag === false){
            flag = true;
            timeout = setTimeout(() => {
                func(...args);
                count =+ 1;
                flag = false;
            }, ms);
            
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), ms);
            
        }        
    }
    return wrapper;
}