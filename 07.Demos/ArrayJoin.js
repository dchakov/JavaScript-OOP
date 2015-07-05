function arrJoin(arr, separator) {
    var i,
        len,
        result = '';

    for (i = 0, len = arr.length; i < len; i += 1) {
        result += arr[i];
        if (i !== len - 1) {
            result += separator;
        }
    }
    return result;
}

console.log(arrJoin([1, 1, 2], '-'));

String.prototype.repeat = function (argument) {
    return new Array(argument+1).join(this);
}
console.log('-'.repeat(5));
// closure
function outer(x) {
    return function inner(y) {
        return x + '' + y;
    };
}

var f1 = outer(5);
console.log(f1(6));
var f2 = outer('Georgi');
console.log(f2('Ivanov'));

function Person(name) {
    var self = this;
    self.name = name;
    self.getName = function getPersonName() {
        return self.name;
    }
}
var p = Person("Peter"); // call function without new so it acts not like constructor
console.log(p);

var categories = [];
function addCategory(argument) {
    categories[argument] = {
        books: [],
        ID: categories.length + 1
    };
}
addCategory('war');
addCategory('peace');
addCategory('metal')
categories['war'].books.push('wwI');
categories['war'].books.push('wwII');
console.log(categories);
console.log(Object.keys(categories).indexOf('peace'));
