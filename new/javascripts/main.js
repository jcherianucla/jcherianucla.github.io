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
		$(".software").animate({ width: '+= 10%'}, 10);
		$(".desgin").animate({ width: '-=10%'}, 10);
	});

});
