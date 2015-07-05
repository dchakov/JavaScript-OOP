//instanceof to determine whether new was used in the function call

function Person(name) {
    if (this instanceof Person) {
        this.name = name;
    } else {
        return new Person(name);
    }
}

var person1 = new Person("Nicholas");
var person2 = Person("Nicholas"); // call without new

console.log(person1 instanceof Person); // true
console.log(person2 instanceof Person); // true