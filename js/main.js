$(function(){
	var canvas = document.getElementById("graph");

	var graph = new PrimeGraph(canvas);

	graph.render();



	var $memText = $(".mem-text");
	var $startx = $("#startx");
	var $starty = $("#starty");
	var $countx = $("#countx");
	var $county = $("#county");

	setInterval(function(){
		$memText.html(graph.optimus.primes.length + " primes in memory");

		graph.options.startX = $startx.val();
		graph.options.startY = $starty.val();
		graph.options.countX = $countx.val();
		graph.options.countY = $county.val();
		graph.cachedRender();
	},1000);
})