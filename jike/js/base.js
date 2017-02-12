$(function(){
	$('.search').click(function(){
		$('.search_hide').addClass('scale');
	});
	$('.close_btn').click(function(){
		$('.search_hide').removeClass('scale');
	});
	
	var html_width = $(document).width();
	var html_height = $(document).height();
	$('.application_bg').css({'width':html_width,'height':html_height+100});
	
	$('.join_btn').click(function(){
		$('.application_bg').addClass('animated fadeIn');
		$('.application_bg').show();		
		$('.application_form').addClass('animated fadeIn');
		$('.application_form').show();
		
		
		var scrollTop = $(document).scrollTop();
		$('.application_form').css('top',scrollTop+60);
	});
	$(".close_form_btn").click(function(){
		$('.application_bg').hide();
		$('.application_form').hide();
		
	});
	$('input[type=checkbox]').click(function(){
		$(this).attr('checked','checked');
		if($("input[type='checkbox']:checked").length > 0){
			$('.form_area').animate({'opacity':'1','height':'82px','margin-top':'20px'},'0.3s');
		}else{
			console.log("none");
			$('.form_area').animate({'opacity':'0','height':'0px','margin-top':'0'},'0.3s');
		}
	});
	$('.application_form form .expand').click(function(){
		$('.expand_arrow').toggleClass('rotate_down');
		$('.form_down_container').toggleClass('form_down_container_show');
	});
	
})
