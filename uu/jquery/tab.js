// JavaScript Document
$(document).ready(function(){
   tab(".tab_title",".tab_nr",".tab_block");
   //标题div的class ，内容div的class，内容块的class
});

function tab(o1,o2,o3){
	$(o1+">ul>li").click(function(){
	     var  shuzi=$(this).index();//点击的哪一个li
		 var  uls = $(this).parent();
		uls.parent().next(o2).children(o3).hide();
		uls.parent().next(o2).children(o3).eq(shuzi).show();
		uls.children("li").removeClass("current");
		$(this).addClass("current");
	});
}