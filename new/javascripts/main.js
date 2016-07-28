$(document).ready(function(){
	$("#w-x").hide();
	$("#n-x").hide();
	$("#c-x").hide();
	$(".work").click(function(){
		$("html").css('background', 'url(images/bg_work.png) no-repeat center center fixed');
		$(".abt-container").fadeOut();
		$("#a-x").hide();
		$("#w-x").fadeIn();
	})
	$(".about").click(function(){
		$("html").css('background', 'url(images/bg_about.png) no-repeat center center fixed');
		$("#a-x").fadeIn();
		$(".abt-container").fadeIn();
	})

});
