/* modified from euler project */

function Optimus(seed){
	this.primes = seed || [2,3,5,7,11,13,17,19,23,29,31,37,41];
}

Optimus.prototype = {
	get lastPrime(){
		return this.primes[this.primes.length-1];
	},

	//return the nth prime number
	getPrime: function(n) {
		while (this.primes.length < n) this.getNextPrime();
		return this.primes[n-1];
	},

	getNextPrime: function(){
		var n = this.lastPrime + 2;
		while (!this.isPrime(n)) n+=2;
		this.primes.push(n);
		return n;
	},

	isPrime: function(n) {
		if (n < this.lastPrime)
			return this.primes.indexOf(n) !== -1;

		var max = Math.sqrt(n);
		if (max===Math.floor(max)) return false; //even squares are not prime

		var i, prime = 1;
		while ((i=this.getPrime(prime)) <= max) {
			if (n % i === 0) return false;
			prime++;
		}

		return true;
	}
};

