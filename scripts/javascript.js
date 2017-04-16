//Make a grid out of divs, append with jQuery//
$(document).ready(function() {
	var num = prompt("How many grids would you like to play with?");
	for(var i = 0; i < num; i++) {
		$("<div class='unit'></div>").appendTo(".container");
	}

});


