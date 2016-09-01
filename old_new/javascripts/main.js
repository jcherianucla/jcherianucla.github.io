$(document).ready(function(){
	var distance = Math.abs($('.abt-container').offset().top - $('.bottom-nav').offset().top);
	$('.projects').hide();
	$("#w-x").hide();
	$("#n-x").hide();
	$("#c-x").hide();
	$(".project-info").hide();
	$(".abt-container").css("height", distance);
	$(".work-container").css("height", distance);
	$(".work-container").hide();
	$(".work").click(function(){
		$("#current_section").fadeOut(500, function(){
			$(this).css("color", "#7ED321");
			$(this).text("Work").fadeIn(500);
		});
		$(".abt-container").fadeOut();
		$(".work-container").fadeIn();
		$("#a-x").hide();
		$("#w-x").fadeIn();
	});
	$(".about").click(function(){
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
