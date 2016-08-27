$(document).ready(function(){
	$('.projects').hide();
	$("#w-x").hide();
	$("#n-x").hide();
	$("#c-x").hide();
	$(".project-info").hide();
	$(".work-container").hide();
	$(".work").click(function(){
		//$("html").css('background', 'url(images/bg_work.png) no-repeat center center fixed');
		$("#current_section").fadeOut(500, function(){
			$(this).text("Work").fadeIn(500);
		});
		$(".abt-container").fadeOut();
		$(".work-container").fadeIn();
		$("#a-x").hide();
		$("#w-x").fadeIn();
	});
	$(".about").click(function(){
		//$("html").css('background', 'url(images/bg_about.png) no-repeat center center fixed');
		$("#current_section").fadeOut(500, function(){
			$(this).text("About").fadeIn(500);
		});
		$("#w-x").hide();
		$("#a-x").fadeIn();
		$(".work-container").fadeOut();
		$(".abt-container").fadeIn();
	});
	$("#code").click(function(){
		$(".software").removeClass("col-xs-6");
		$(".design").removeClass("col-xs-6");
		$(".software").css("width", "100%");
		$("#design").hide();
		$(".design").fadeIn();
		$("#code").hide();
		$('.projects').show();
	});
	$(".projectCell").click(function(){
		$(".project-container").hide();
		$(".project-info").fadeIn();
	});
	$(".cancel").click(function(){
		$(".project-info").fadeOut();
		$(".project-container").fadeIn();
	});

});
