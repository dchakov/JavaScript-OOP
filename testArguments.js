//converts function arguments to array,
// because argument act as array but are not array.

function convertsArguments() {
    var args = [].slice.apply(arguments);
    var argsCall = [].slice.call(arguments, 0);
    console.log(arguments);
    console.log(args);
    console.log(argsCall);
    console.log(Array.isArray(arguments));
    console.log(Array.isArray(args));
}

convertsArguments(1, 2, 3);

console.log((Math.random() * 10 + 10) | 0); //integer not float
