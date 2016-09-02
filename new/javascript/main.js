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
function changeContent(event){
	var nav_elem_list = $('.items').children();
	for(var i = 0; i < nav_elem_list.length; i++){
		var temp_elem = nav_elem_list[i];
		select(temp_elem, false);
	}
	var target = event.target;
	console.log(target);
	select(target, true);
	hideAllContent();
	var content_list = $('.main-content').children();
	for(var i = 0; i < content_list.length; i++){
		if(target.hash === ("#"+content_list[i].id)){
			determineContent(content_list[i], false);
		}
		if(target.hash === "#work"){
			$('.work-contains').fadeIn();
		} else {
			$('.work-contains').hide();
		}
	}

};
$(document).ready(function () {
	$('.on').hide();
	hideAllContent();
	$('.about').show();
	$('.work-contains').hide();
	var active = $('.items').children().first();
	select(active, true);

});

