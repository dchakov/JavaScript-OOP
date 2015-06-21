/* Task Description */
/* 
	Create a function constructor for Person. Each Person must have:OK
	*	properties `firstname`, `lastname` and `age`:OK
		*	firstname and lastname must always be strings between 3 and 20 characters, containing only Latin letters:OK
		*	age must always be a number in the range 0 150:OK
			*	the setter of age can receive a convertible-to-number value:OK
		*	if any of the above is not met, throw Error :OK		
	*	property `fullname`:OK
		*	the getter returns a string in the format 'FIRST_NAME LAST_NAME':OK
		*	the setter receives a string is the format 'FIRST_NAME LAST_NAME':OK
			*	it must parse it and set `firstname` and `lastname`:OK
	*	method `introduce()` that returns a string in the format 'Hello! My name is FULL_NAME and I am AGE-years-old':OK
	*	all methods and properties must be attached to the prototype of the Person:OK
	*	all methods and property setters must return this, if they are not supposed to return other value:OK
		*	enables method-chaining
*/
function solve() {
    var Person = (function() {
        function Person(firstname, lastname, age) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.age = age;
        }

        function validateName(name) {
            return /^([A-z]){3,20}$/.test(name);
        }

        function validateAge(age) {
            if (0 > parseInt(age) || parseInt(age) > 150) {
                return false;
            } else {
                return true;
            }
        }

        Object.defineProperty(Person.prototype, 'firstname', {
            get: function() {
                return this._firstname;
            },
            set: function(firstname) {
                if (!validateName(firstname)) {
                    throw new Error('Name is invalid');
                }
                this._firstname = firstname;
                return this;
            }
        });
        Object.defineProperty(Person.prototype, 'lastname', {
            get: function() {
                return this._lastname;
            },
            set: function(lastname) {
                if (!validateName(lastname)) {
                    throw new Error('Name is invalid');
                }
                this._lastname = lastname;
                return this;
            }
        });
        Object.defineProperty(Person.prototype, 'age', {
            get: function() {
                return this._age;
            },
            set: function(age) {
                if (!validateAge(age)) {
                    throw new Error('Age is invalid');
                }
                this._age = age;
                return this;
            }
        });

        Object.defineProperty(Person.prototype, 'fullname', {
            get: function() {
                return this.firstname + ' ' + this.lastname;
            },
            set: function(argument) {
                this.firstname = argument.split(' ')[0];
                this.lastname = argument.split(' ')[1];
            }
        });

        Person.prototype.introduce = function() {
            return 'Hello! My name is ' + this.fullname + ' and I am ' + this.age + '-years-old';
        }


        return Person;
    }());
    return Person;
}
module.exports = solve;

