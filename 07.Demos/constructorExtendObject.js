Object.prototype.extends = function(parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
}

// Student.extends(Person);
// Dog.extends(Animal);

var date = new Date();
var erlier = new Date(2010, 1, 1);

console.log(date - erlier); // miliseconds

console.log(date.getTime());