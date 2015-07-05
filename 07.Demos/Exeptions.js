function getExeption() {
    var exceptions = [
        'var f;f();',
        'f()',
        'function(){}'
    ];
    var index = (Math.random() * exceptions.length) | 0;
    return eval(exceptions[index]);
}

try {
    getExeption();
} catch (ex) {
    console.log('-----------');
    console.log(ex.name);
    console.log(ex.message);
    console.log('-----------');
}
