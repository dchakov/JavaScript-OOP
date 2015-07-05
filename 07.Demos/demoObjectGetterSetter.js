console.log("object literal notation");
console.log("-----------------------");
var person1 = {
    _name: 'Nikolas',

    get name() {
        console.log("Read name:");
        return this._name;
    },
    set name(value) {
        console.log("Setting name to %s", value);
        this._name = value;
    }
};
console.log(person1.name); // "Reading name" then "Nicholas"
person1.name = "Greg";
console.log(person1.name); // "Setting name to Greg" then "Greg"

console.log("-----------------------");
console.log("accessor property attributes");
console.log("-----------------------");
var person2 = {
    _name: "Nicholas"
};

Object.defineProperty(person2, "name", {
    get: function() {
        console.log("Reading name");
        return this._name;
    },
    set: function(value) {
        console.log("Setting name to %s", value);
        this._name = value;
    },
    enumerable: true,
    configurable: true
});

console.log(person2.name); // "Reading name" then "Nicholas"
person1.name = "Greg";
console.log(person1.name); // "Setting name to Greg" then "Greg"
console.log("-----------------------");

var person2 = {
    name: 'Nikolas'
};
Object.defineProperty(person2, 'name', {
    enumerable: false
});
console.log('name' in person2);
console.log(person2.propertyIsEnumerable("name"));

var properties = Object.keys(person2);
console.log(properties.length);

Object.defineProperty(person2, "name", {
    configurable: false
});

// try to delete the Property
delete person2.name;
console.log("name" in person1); // true
console.log(person2.name); // "Nicholas"
// Object.defineProperty(person2, "name", { // error!!!
//     configurable: true
// });
