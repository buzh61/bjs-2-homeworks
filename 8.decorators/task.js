function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args){
        let hash = args.join(',');
        let idx = cache.findIndex((item) => item["hash"] === hash);
        
        if (idx !== -1) {
            console.log('Из кэша: ' + cache.map(item => item.value));
            return 'Из кэша: ' + cache.map(item => item.value);
        } else {
            
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
    }

    return wrapper;

}


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
