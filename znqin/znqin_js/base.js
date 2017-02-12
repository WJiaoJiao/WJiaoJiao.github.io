/*选项卡切换*/
function showitem1(obj,itemdl,setvalid,idcount,objcss){
	var fodinfo=document.getElementById(itemdl).getElementsByTagName("li");
	var ii = 0;
	for(var i=0;i<fodinfo.length;i++){
		if(obj==fodinfo[i]){
			fodinfo[i].className=objcss+(i+1)+'2';
			ii=i+1;
			document.getElementById(setvalid+ii).style.display="";
		}
		else{
			fodinfo[i].className=objcss+(i+1)+'1';
			ii=i+1;
			document.getElementById(setvalid+ii).style.display="none";
		}
	}
}
$(".part9_each").hover(
	function(){
		var content=$(this);
		var part9_each_hide=content.children(".part9_each_hide");
		part9_each_hide.css("display","block");
	},
	function(){
		var content=$(this);
		var part9_each_hide=content.children(".part9_each_hide");
		part9_each_hide.css("display","none");
	}
);
/*图片懒加载*/
$(function() {     
	$("img").lazyload({
		placeholder:"znqin_img/ccc.gif",
		loading:true,
		effectspeed:10,
		threshold:20,
		effect : "fadeIn"		 
	});
});
/*part6_scroll切换*/
jQuery(".part6_scroll").slide({mainCell:".gd",effect:"fade",autoPlay:false});
/*part7_scroll切换*/
jQuery(".part7_scroll").slide({mainCell:".gd",effect:"fade",autoPlay:false});