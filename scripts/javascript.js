//Make a grid out of divs, append with jQuery//
$(document).ready(function() {
		var grid = $("<div class="class"></div>");
		for(var x = 0; x < 2; x+){
			for(var y= 0; y < 2; y++){
				grid.appendTo('container');
			}
		}
});