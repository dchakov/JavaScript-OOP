/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function findPrimes(from, to) {
    var devisor,
        maxDevisor,
        i,
        isPrime,
        primes = [];
        from = +from;
        to = +to;

        if (isNaN(from) || isNaN(to)) {
    		throw new Error();
    	}

    for (i = from; i <= to; i += 1) {

        maxDevisor = Math.sqrt(i);
        isPrime = true;
        for (devisor = 2; devisor <= maxDevisor; devisor += 1) {
            if (!(i % devisor)) {
                isPrime = false;
                break;
            }
        }
        if (isPrime && i > 1) {
            primes.push(i);
        }
    }
    return primes;
}

module.exports = findPrimes;

console.log(findPrimes(1,10));
