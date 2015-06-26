var animal = {
    init: function(name, age) {
        this.name = name;
        this.age = age;
        return this;
    }
};

var dog = (function(parent){
  var dog = Object.create(parent);
  Object.defineProperty(dog, 'init', {
    value: function(name, age, breed){
      parent.init.call(this, name, age);
      this.breed = breed;
      return this;
    }
  });
  return dog;
}(animal));

Object.defineProperty(dog,'toString',{
	value : function(name,age,breed){
		return this.name + this.age + this.breed;
	}
})

var johny = Object.create(dog)
    .init('pinki', 2, 'dogo');

console.log(johny.toString());


