function Person(name) {
    this.name = name;
}

var person1 = new Person('Ivan');
var person2 = new Person('Asen');

console.log(person1 instanceof Person);
console.log(person2 instanceof Person);

// objects created with a custom constructor, constructor points back to that constructor function
console.log(person1.constructor === Person);
console.log(person2.constructor === Person);

Person.prototype.SayName = function() {
    console.log(this.name);
}
person1.SayName();

Array.prototype.sum = function() {
    return this.reduce(function(previous, current) {
        return previous + current;
    });
};
var numbers = [1, 2, 3, 4, 5, 6];
var result = numbers.sum();
console.log(result); // 21

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.substring(1);
};
var message = "hello world!";
console.log(message.capitalize()); // "Hello world!"
