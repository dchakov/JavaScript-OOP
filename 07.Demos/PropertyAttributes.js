var person = {
	name: 'Nikolas'
};

var descriptor = Object.getOwnPropertyDescriptor(person,'name');
console.log(descriptor);

console.log(Object.isExtensible(person));

Object.preventExtensions(person);
console.log(Object.isExtensible(person));
