function EventTarget() {}
EventTarget.prototype = {
    constructor: EventTarget,
    addListener: function(type, listener) {
        // create an array if it doesn't exist
        if (!this.hasOwnProperty("_listeners")) {
            this._listeners = [];
        }
        if (typeof this._listeners[type] == "undefined") {
            this._listeners[type] = [];
        }
        this._listeners[type].push(listener);
    },
    fire: function(event) {
        if (!event.target) {
            event.target = this;
        }
        if (!event.type) { // falsy
            throw new Error("Event object missing 'type' property.");
        }
        if (this._listeners && this._listeners[event.type] instanceof Array) {
            var listeners = this._listeners[event.type];
            for (var i = 0, len = listeners.length; i < len; i++) {
                listeners[i].call(this, event);
            }
        }
    },
    removeListener: function(type, listener) {
        if (this._listeners && this._listeners[type] instanceof Array) {
            var listeners = this._listeners[type];
            for (var i = 0, len = listeners.length; i < len; i++) {
                if (listeners[i] === listener) {
                    listeners.splice(i, 1);
                    break;
                }
            }
        }
    }
};

var target = new EventTarget();
target.addListener("message", function(event) {
    console.log("Message is " + event.data);
})
target.fire({
    type: "message",
    data: "Hello world!"
});

function Person(name) {
    this.name = name;
}
Person.prototype = Object.create(EventTarget.prototype);
Person.prototype.constructor = Person;
Person.prototype.sayName = function() {
    console.log(this.name);
    this.fire({
        type: "namesaid",
        name: name
    });
};
var person = new Person("Nicholas");
console.log(person instanceof Person); // true
console.log(person instanceof EventTarget); // true

function mixin(receiver, supplier) {
    Object.keys(supplier).forEach(function(property) {
        var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
        Object.defineProperty(receiver, property, descriptor);
    });
    return receiver;
}
var person = mixin(new EventTarget(), {
    get name() {
        return "Nicholas"
    },
    sayName: function() {
        console.log(this.name);
        this.fire({
            type: "namesaid",
            name: 'name'
        });
    }
});
console.log(person.name); // "Nicholas"
person.name = "Greg";
console.log(person.name); // "Nicholas"
person.sayName();
