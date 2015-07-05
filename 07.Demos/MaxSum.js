function max (args) {
	var maxN = args[0],
	i,
	len = args.length;

	for (var i = 1; i < len; i++) {
		maxN =Math.max(maxN, args[i]);
	}
	return maxN;
}

console.log(max([1,2,3]));

var printMsg = function () {
	console.log('hhh');
}

printMsg();

(function () {
	console.log('Immediate function');
}());

var numbers = [1,2];

function sum (a,b) {
	return a+b;
}
var obj = sum.call(obj,1,2);
console.log(obj);
