
function PrimeGraph(canvas,options) {
	options = options||{};
	if (!options.startX) options.startX = 2;
	if (!options.startY) options.startY = 1;
	if (!options.countX) options.countX = 200;
	if (!options.countY) options.countY = 50;

	this.options = options;
	this.canvas = canvas;
	this.optimus = new Optimus();
	this.ctx = this.canvas.getContext("2d");
}

PrimeGraph.prototype = {
	cachedRender: function(){
		if (JSON.stringify(this.options) !== this.lastRender)
			this.render();
	},
	render: function(){
		this.lastRender = JSON.stringify(this.options);

		var elim = {};
		var width = Math.ceil(this.canvas.width/this.options.countX);
		var height = Math.ceil(this.canvas.height/this.options.countY);
		this.ctx.fillStyle = "rgb(255,255,255)";
		this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
		for (var y=0;y<this.options.countY;y++){
			var drawY = Math.floor(height*y);
			var n = this._getPrime(y+1);
			for (var x=0;x<this.options.countX;x++){
				var i = this._getNumber(x);
				var drawX = Math.floor(width*x);
				var color = null;

				if (y === 0 && this.optimus.isPrime(i)) {
					this.ctx.fillStyle = "rgb(220,220,255)";
					this.ctx.fillRect(drawX,0,width,this.canvas.height);
				}

				if (i===n) color = "rgb(0,0,0)"; //prime
				else if (i%n===0) {
					if (!elim[i]) {
						color = "rgb(255,0,0)";
						elim[i] = true;
					} else {
						color = "rgb(255,200,200)";
					}
				}
				if (color) {
					this.ctx.fillStyle = color;
					this.ctx.fillRect(drawX,drawY,width,height);
				}
			}
		}
	},
	_getPrime: function(y){
		return this.optimus.getPrime(y);
	},
	_getNumber: function(x){
		return +x + +this.options.startX;
	}
};
