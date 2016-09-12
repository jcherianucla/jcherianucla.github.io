var videos = ["https://www.youtube.com/embed/26U_seo0a1g", "https://www.youtube.com/embed/z1PSbDmV8Gw","https://www.youtube.com/embed/UNQhuFL6CWg",
"https://www.youtube.com/embed/ja-n5qUNRi8", "https://www.youtube.com/embed/H1sXTmaqRHU","https://www.youtube.com/embed/Cz3q1R0oHmE", "https://www.youtube.com/embed/xHZ7BFBoYCQ",
"https://www.youtube.com/embed/Ps4hAQ_Fp5k", "https://www.youtube.com/embed/cZjtRQMEOmI","https://www.youtube.com/embed/WDf757QwXpk","https://www.youtube.com/embed/CMm6tDavSXg",
"https://www.youtube.com/embed/ZOy0YgUDwDg", "https://www.youtube.com/embed/K-4A1hi-DuA", "https://www.youtube.com/embed/g-jwWYX7Jlo", "https://www.youtube.com/embed/mgmVOuLgFB0",
"https://www.youtube.com/embed/TNRldP18bH8", "https://www.youtube.com/embed/dRl8EIhrQjQ", "https://www.youtube.com/embed/q0qD2K2RWkc", "https://www.youtube.com/embed/itvnQ2QB4yc"]
function cycleVideos(index){
	$('#vidFrame').attr("src", videos[index]);
}
function determineContent(elem, should_hide){
	if(should_hide){
		$(elem).hide();
	} else {
		$(elem).fadeIn(500);
	}
};
function hideAllContent(){
	var content_list = $('.main-content').children();
	for(var i = 0; i < content_list.length; i++){
		determineContent(content_list[i], true);
	}
};
function select(elem, sel){
	if(sel){
		$(elem).children('.off').hide();
		$(elem).children('.on').show();
	} else {
		$(elem).children('.on').hide();
		$(elem).children('.off').show();
	}
};
function hideNav(){
	var nav_elem_list = $('.items').children();
	for(var i = 0; i < nav_elem_list.length; i++){
		var temp_elem = nav_elem_list[i];
		select(temp_elem, false);
	}
};
function goHome(event){
	hideNav();
	$('.work-contains').hide();
	hideAllContent();
	select($('.items').children().first(), true);
	$('.about').fadeIn();
};
function changeContent(event){
	hideNav();
	var nav_elem_list = $('.items').children();
	select($('.sub-items').children().first(), true);
	var target = event.target;
	hideAllContent();
	select(target, true);
	var content_list = $('.main-content').children();
	for(var i = 0; i < content_list.length; i++){
		if(target.hash === ("#"+content_list[i].id)){
			determineContent(content_list[i], false);
		}
		if(target.hash === "#foryou"){
			var idx = Math.floor((Math.random() * videos.length));
			cycleVideos(idx);
		}
		if(target.hash === "#work"){
			select($(nav_elem_list[1]), true);
			$('.work-contains').fadeIn();
			$('.code').show();
			$('.design').hide();
		} else {
			$('.project-info').hide();
			$('.projects').show();
			$('.work-contains').hide();
		}
	}
};
function switchWorkContent(event) {
	sub_items = $('.sub-items').children();
	var target = event.target;
	select(target, true);
	console.log(target.hash);
	if(target.hash === sub_items[0].hash){
		$('.design').hide();
		$('.code').fadeIn();
		select(sub_items[0], true);
		select(sub_items[1], false);	
	} else {
		$('.code').hide();
		$('.design').fadeIn();
		select(sub_items[1], true);
		select(sub_items[0], false);	
	}
};
function cancel(event) {
	$('.project-info').hide();
	$('.projects').fadeIn();
};
function showDetail(event){
	var detailsList = $('.project-info').children().slice(1);
	var target = event.target;
	$('.projects').hide();
	$('.project-info').fadeIn();
	for(var i = 0; i < detailsList.length; i++){
	  var title_text = $(detailsList[i]).children().find('h3').text();
		if(target.alt === title_text) {
			$(detailsList[i]).children().show();
		} else {
			$(detailsList[i]).children().hide();
		}
	}
};
$(document).ready(function () {
	$('.on').hide();
	$('.project-info').hide();
	hideAllContent();
	$('.about').show();
	$('.design').hide();
	select($('.sub-items').children().first(), true);
	$('.work-contains').hide();
	var active = $('.items').children().first();
	select(active, true);

});

