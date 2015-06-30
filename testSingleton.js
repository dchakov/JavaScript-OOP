var database = (function() {
    var items = [];
    var db = {
        add: function(item) {
            items.push(item);
            return db;
        },
        list: function() {
            return items.slice();
        }
    }
    return {
        get: function() {
            return db;
        }
    };
}());

console.log(database.get()
    .add('Ivan')
    .add('Asen')
    .list()
);

console.log(database.get()
    .add('Ivan1')
    .add('Asen1')
    .list()
);

var empty = {};
console.log(Object.isExtensible(empty) === true);

// ...but that can be changed.
Object.preventExtensions(empty);
console.log(Object.isExtensible(empty) === false);