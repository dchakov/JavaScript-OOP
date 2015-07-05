var db = (function() {
    var objects = [];
    var lastId = 0;

    function getLastId() {
        return ++lastId;
    }

    function addObject(obj) {
        obj.id = getLastId();
        objects.push(obj);
    }

    function listObject() {
        return objects.map(function(obj) {
            return {
                name: obj.name,
                id: obj.id
            };
        }).slice();
    }
    return {
        add: addObject,
        list: listObject
    };
}());

db.add({
    name: 'Pesho'
});
console.log(db.list());

//Evil hacker - return object.slice() copy of object
var objs = db.list();
//objs.push({name:'Hacked u'});
objs[0].age = -1;
console.log(db.list());