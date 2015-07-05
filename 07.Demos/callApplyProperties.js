function sayNameAll(label) {
    console.log(label + ':' + this.name);
}
var person1 = {
    name: 'Nikolas'
};
var person2 = {
    name: 'Kolio'
};
var name = 'Michael';

sayNameAll.call(this, "global");
sayNameAll.call(person1, "person1");
sayNameAll.call(person2, 'person2');

sayNameAll.apply(this, ['global']);
sayNameAll.apply(person1, ["person1"]);
sayNameAll.apply(person2, ['person2']);

var object = {
    name: 'ivan',
    age: 15,
    adress: '15 street',
    height: 185,
    weight: 95
}
for (var prop in object) {
    console.log('Name:' + prop + ', ' + 'Value:' + object[prop]);
}

var properties = Object.keys(object);
properties.sort();
console.log(properties);
for (var i = 0, len = properties.length; i < len; i += 1) {
    console.log('Name:' + properties[i] + ', ' + 'Value:' + object[properties[i]]);
};
