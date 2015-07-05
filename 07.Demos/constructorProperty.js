function Person(name) {
    this.name = name;
}

//Restore the constructor property
//to a proper value when overwriting the prototype:

Person.prototype = {
    constructor: Person,

    sayName: function() {
        console.log(this.name);
    },

    toString: function() {
        return "[Person " + this.name + "]";
    }
};

var person1 = new Person("Nicholas");
var person2 = new Person("Greg");

console.log(person1 instanceof Person); // true
console.log(person1.constructor === Person); // true
console.log(person1.constructor === Object); // false
console.log(person2 instanceof Person); // true
console.log(person2.constructor === Person); // true
console.log(person2.constructor === Object); // false
person1.sayName();
person2.sayName();
console.log(person1.toString());
console.log(person2.toString());

