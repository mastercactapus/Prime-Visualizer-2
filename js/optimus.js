/* modified from euler project */
$(function(){
function optimus() {
	var primes =[2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
	31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
	73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
	127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
	179, 181, 191, 193, 197, 199, 211, 223, 227, 229];
	var numbers = [-1,-1,0,0,2,]; //


	//gets the nth prime number, finding new ones as nessisary
	function getPrime(n){
		while (primes.length < n) nextPrime();
		return primes[n-1];
	}

	//gets the next prime number (that hasn't been found)
	function nextPrime(){
		var cTest = primes[primes.length-1] + 2;
		while (!isPrime(cTest)) cTest +=2;
		primes.push(cTest);
		return cTest;
	}

	function fastPrime(n){
		if (n < primes[primes.length-1])
			return (primes.indexOf(n) > -1);
	}

	//tests if a number is prime
	function isPrime(n){
		if (n < primes[primes.length-1])
			return (primes.indexOf(n) > -1);
		var limit = Math.sqrt(n);
		if (limit == Math.floor(limit)) return false;
		var cTest = 1;
		while (getPrime(cTest) <= limit){
			if (n % getPrime(cTest) === 0) return false;
			cTest++;
		}
		return true;
	}

	return {prime:getPrime,isPrime:isPrime,primes:primes};
}

window.optimus = new optimus();
$(window).trigger("optimus-online");
});

