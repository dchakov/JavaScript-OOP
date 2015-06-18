/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/

function sum(numbers) {
    if (numbers.length === 0) {
        return null;
    } else {
        var sum = numbers.reduce(function(sum, number) {
            number = +number;
            if (isNaN(number)) {
                throw new Error();
            }
            return sum + number;
        }, 0);
        return sum;
    }
}

module.exports = sum;
