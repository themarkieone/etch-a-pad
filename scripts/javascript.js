//Make 600 grids and append to container div
$(document).ready(function() {
		for(var i = 0; i < 600; i++) {
			$("<div class='unit'></div>").appendTo(".container");
		}

	
	//Add permanent background color for when you hover over grids
	$('.unit').one("mouseover", function() {
			$(this).addClass('enter');
	});
	
	$('.button').click(function () {
		$('.unit').css("background-color", "white");
		var reset = alert("Board is being reset!");
	});
});


