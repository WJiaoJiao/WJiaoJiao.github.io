$(function(){
	/*首页子导航切换 begin*/
	$('.index_nav_attention').tap(function(){
		$('.index_nav_question').addClass('index_line_move');
		$('.index_question_container').hide();
		$('.index_attention_container').show();
	});
	$('.index_nav_question').tap(function(){
		$('.index_nav_question').removeClass('index_line_move');
		$('.index_question_container').show();
		$('.index_attention_container').hide();
	});
	$('.index_question_container').swipeLeft(function(){
		$('.index_nav_question').addClass('index_line_move');
		$('.index_question_container').hide();
		$('.index_attention_container').show();
	});
	$('.index_attention_container').swipeRight(function(){
		$('.index_nav_question').removeClass('index_line_move');
		$('.index_attention_container').hide();
		$('.index_question_container').show();
	})
	/*首页子导航切换 end*/
	
	/*点击加关注 begin*/
	$('.index_attention_content_hunterAtt a').click(function(){
		var self = $(this);
		if(self.hasClass('a_click')){
			self.removeClass('a_click');
			self.html('关注');
		}else{
			self.addClass('a_click');
			self.html('已关注');
		}
	});
	/*点击加关注 end*/
	
	/*header返回按钮 begin*/
	$('.arrow_back').tap(function(){
		history.back(-1);
	});
	/*header返回按钮 end*/
	
	/*teachers.html导师子导航切换 begin*/
	$('.teachers_nav_recommend').tap(function(){
		$(this).siblings().removeClass('teachers_line_move');
		$(this).addClass('teachers_line_move');
		$('.teachers_lasted_container').hide();
		$('.teachers_attention_container').hide();
		$('.teachers_recommend_container').show();
	});
	
	$('.teachers_nav_lasted').tap(function(){
		$(this).siblings().removeClass('teachers_line_move');
		$(this).addClass('teachers_line_move');
		$('.teachers_recommend_container').hide();
		$('.teachers_attention_container').hide();
		$('.teachers_lasted_container').show();
	});
	
	$('.teachers_nav_attention').tap(function(){
		$(this).siblings().removeClass('teachers_line_move');
		$(this).addClass('teachers_line_move');
		$('.teachers_recommend_container').hide();
		$('.teachers_lasted_container').hide();
		$('.teachers_attention_container').show();
	});
	/*teachers.html导师子导航切换 end*/
	
	/*mine.html我的 二维码 begin*/
	var html_width = $(document).width();
	var html_height = $(document).height();
	$('.mine_code_link').css({'width':html_width,'height':html_height});
	$('.mine_code').tap(function(){
		$('.mine_code_link').show();
	});
	$('.mine_code_link').tap(function(){
		$('.mine_code_link').hide();
	});
	/*mine.html我的 二维码 end*/
	
	/*mine.html我的子导航切换 begin*/
	$('.mine_nav_to_answer').tap(function(){
		$(this).siblings().removeClass('mine_nav_line_move');
		$(this).siblings().removeClass('mine_nav_highlight');
		$(this).addClass('mine_nav_line_move');
		$(this).addClass('mine_nav_highlight');
		
		$('.mine_nav_to_answer_container').show();
		$('.mine_nav_answer_container').hide();
		$('.mine_nav_buy_container').hide();
	});
	
	$('.mine_nav_answer').tap(function(){
		$(this).siblings().removeClass('mine_nav_line_move');
		$(this).siblings().removeClass('mine_nav_highlight');
		$(this).addClass('mine_nav_line_move');
		$(this).addClass('mine_nav_highlight');
		
		$('.mine_nav_answer_container').show();
		$('.mine_nav_to_answer_container').hide();		
		$('.mine_nav_buy_container').hide();
	});
	
	$('.mine_nav_buy').tap(function(){
		$(this).siblings().removeClass('mine_nav_line_move');
		$(this).siblings().removeClass('mine_nav_highlight');
		$(this).addClass('mine_nav_line_move');
		$(this).addClass('mine_nav_highlight');
		
		$('.mine_nav_buy_container').show();
		$('.mine_nav_answer_container').hide();
		$('.mine_nav_to_answer_container').hide();
	});
	/*mine.html我的子导航切换 end*/
	
	/*write_info.html子导航切换 begin*/
	$('.write_info_record').tap(function(){
		$(this).siblings().removeClass('color_highLight');
		$(this).addClass('color_highLight');
		$('.write_info_text_container').hide();
		$('.write_info_record_container').show();
	});
	
	$('.write_info_text').tap(function(){
		$(this).siblings().removeClass('color_highLight');
		$(this).addClass('color_highLight');
		$('.write_info_record_container').hide();
		$('.write_info_text_container').show();
	});
	/*write_info.html子导航切换 end*/
	
	/*write_info.html 价格切换  begin*/
	$('.write_info_price_choice_each').tap(function(){
		$(this).siblings().removeClass('write_info_price_choice_on');
		$(this).addClass('write_info_price_choice_on');
	});
	/*write_info.html 价格切换  end*/
})
