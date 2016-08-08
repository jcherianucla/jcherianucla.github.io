$(document).ready(function(){
	$("#w-x").hide();
	$("#n-x").hide();
	$("#c-x").hide();
	$(".work-container").hide();
	$(".work").click(function(){
		//$("html").css('background', 'url(images/bg_work.png) no-repeat center center fixed');
		$(".abt-container").fadeOut();
		$(".work-container").fadeIn();
		$("#a-x").hide();
		$("#w-x").fadeIn();
	});
	$(".about").click(function(){
		//$("html").css('background', 'url(images/bg_about.png) no-repeat center center fixed');
		$("#w-x").hide();
		$("#a-x").fadeIn();
		$(".work-container").fadeOut();
		$(".abt-container").fadeIn();
	});
	$("#code").click(function(){
		$(".software").removeClass("col-xs-6");
		$(".design").removeClass("col-xs-6");
		$(".software").css("width", "90%");
		$("#code").hide();
		$(".design").css("width", "10%");
	});
	// Instantiate the Bootstrap carousel
	$('.multi-item-carousel').carousel({
		interval: false
	});

	// for every slide in carousel, copy the next slide's item in the slide.
	// Do the same for the next, next item.
	$('.multi-item-carousel .item').each(function(){
		var next = $(this).next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));

		if (next.next().length>0) {
			next.next().children(':first-child').clone().appendTo($(this));
		} else {
			$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
		}
	});

});
