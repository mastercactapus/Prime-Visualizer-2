$(window).on("optimus-online", function(){

function VisualizerM(){
	var startX=2, startY=2, rows=50, cols=100;

	var factors = {};

	function getFactors(n) { //get all prime factors of n
		if (optimus.fastPrime(n)) return []; //if we are a discovered prime, then return none

		var prime = 1;
		var cPrime=optimus.getPrime(prime);
		var retr = [];

		while (cPrime <= n){
			if (cPrime == n) return retr;
			if (n % cPrime == 0) retr.push(cPrime);
			prime++;
			cPrime=optimus.getPrime(prime);
		}
		return retr;
	}

	function preGen() { //ensure factors{} is populated for our current scope
		for (var i=startX;i<startX+cols;i++) {
			if (typeof factors[i] == 'undefined') factors[i] = getFactors(i);
		}
	}

	function getGrid() {//generate grid
		var grid=[[]];
		for (var x=0;x<cols;x++) {
			for (var y=0;y<rows;y++) {
				var val = 0; //0 = default
				if (factors[x] == []) val =1; // 1 = prime
				else if (factors[x][0] == y) val =2; // 2 = lowest factor
				else if (factors[x].indexOf(y) > -1) val = 3; //3 = factor
				grid[x][y] = val;
			}
		}
	}
}

function VisualizerV(context) {
	var offsetX=0,offsetY=0,width=100,height=100;
}


window.visualizer = new visualizer("#prime-display");
});
