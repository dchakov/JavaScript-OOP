/* Task Description */
/*
 * Create an object domElement, that has the following properties and methods:OK
 * use prototypal inheritance, without function constructors:OK
 * method init() that gets the domElement type:OK
 * i.e. `Object.create(domElement).init('div')`:OK
 * property type that is the type of the domElement:OK
 * a valid type is any non-empty string that contains only Latin letters and digits:OK
 * property innerHTML of type string:OK
 * gets the domElement, parsed as valid HTML:OK
 * <type attr1="value1" attr2="value2" ...> .. content / children's.innerHTML .. </type>:OK
 * property content of type string:OK
 * sets the content of the element:OK
 * works only if there are no children
 * property attributes:OK
 * each attribute has name and value:OK
 * a valid attribute has a non-empty string for a name that contains only Latin letters and digits or dashes (-):OK
 * property children
 * each child is a domElement or a string:OK
 * property parent
 * parent is a domElement
 * method appendChild(domElement / string)
 * appends to the end of children list
 * method addAttribute(name, value)
 * throw Error if type is not valid
 * // method removeAttribute(attribute)
 */


var domElement = solve();

var meta = Object.create(domElement)
    .init('meta')
    .addAttribute('charset', 'utf-8');

var head = Object.create(domElement)
    .init('head')
    .appendChild(meta)

var div = Object.create(domElement)
    .init('div')
    .addAttribute('style', 'font-size: 42px');

div.content = 'Hello, world!';

var body = Object.create(domElement)
    .init('body')
    .appendChild(div)
    .addAttribute('id', 'cuki')
    .addAttribute('bgcolor', '#012345');

var root = Object.create(domElement)
    .init('html')
    .appendChild(head)
    .appendChild(body);

console.log(root.innerHTML);

// Outputs:
// <html><head><meta charset="utf-8"></meta></head><body bgcolor="#012345" id="cuki"><div style="font-size: 42px">Hello, world!</div></body></html>


function solve() {
    var domElement = (function() {
        var domElement = {
            init: function(type) {
                this.type = type;
                this.content = '';
                this.attributes = {};
                this.children = [];
                this.parent;
                return this;
            },
            appendChild: function(child) {
                if (typeof child !== 'string') {
                    child.parent = this;
                }
                this.children.push(child);
                return this;

            },
            addAttribute: function(name, value) {
                if (!/^[A-z0-9-]+$/.test(name)) {
                    throw Error();
                };
                this.attributes[name] = value;
                return this;
            },
            removeAttribute: function(attribute) {
                // body...
            },
            get innerHTML() {
                var result = '',
                    i,
                    len = this.children.length;

                result += '<' + this.type + insertAttributes(this.attributes) + '>';
                for (i = 0; i < len; i += 1) {
                    if (typeof this.children[i] === 'string') {
                        result += this.children[i];
                    } else {
                        result += this.children[i].innerHTML;
                    }
                };
                result += this.content;
                result += '</' + this.type + '>';
                return result;
            }
        };

        function insertAttributes(obj) {
            var stringAttributes = '';
            var keys = Object.keys(obj),
                j, keysLen = keys.length;

            keys.sort();

            for (j = 0; j < keysLen; j += 1) {
                stringAttributes += (' ' + keys[j] + '="' + obj[keys[j]] + '"');
            };

            return stringAttributes;
        }

        Object.defineProperty(domElement, 'type', {
            get: function() {
                return this._type;
            },
            set: function(value) {

                if (!/^[A-z0-9]+$/.test(value) || typeof value !== 'string') {
                    throw Error('Must contain only Latin letters and digits');
                }
                this._type = value;
            }
        });

        Object.defineProperty(domElement, 'content', {
            get: function() {
                if (!this.children.length) {
                    return this._content;
                }
                return '';
            },
            set: function(value) {
                this._content = value;
            }
        });

        Object.defineProperty(domElement, 'attributes', {
            get: function() {
                return this._attributes;
            },
            set: function(value) {
                this._attributes = value;
            }
        });

        Object.defineProperty(domElement, 'children', {
            get: function() {
                return this._children;
            },
            set: function(value) {
                this._children = value;
            }
        });

        Object.defineProperty(domElement, 'parent', {
            get: function() {
                return this._parent;
            },
            set: function(value) {
                this._parent = value;
            }
        });

        return domElement;
    }());
    return domElement;
}

module.exports = solve;
