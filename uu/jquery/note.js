function ok(){
	var input=document.getElementById("file");
	var result=document.getElementById("filebg");
	var p1=document.getElementById('p1');
	if(typeof FileReader=="undefined"){
		result.innerHTML="抱歉您的浏览器不支持  FileReader";
		input.setAttribute("disabled","disabled")
	}
	else
	{
		input.addEventListener("change",function(){
			var file = this.files[0];
			if(!/image\/\w+/.test(file.type)){
				alert("文件必须为图片");
				return false;
			}
			var reader=new FileReader();//HTML5接口本地预览图片
			reader.readAsDataURL(file);
			reader.onload=function(e){
				if(result.children.length>7){
					 Prompt('最多添加7张图片')
				}else{
					var span=document.createElement("span");
					result.insertBefore(span,p1);
					span.style.background='url('+this.result+') center no-repeat';
					span.style.backgroundSize='100%';
				}
				//if(result.){}
			//result.innerHTML="<span><img src="+this.result+" alert=''/></span>";
			console.info(this.result)
			}
		},false);
	}
}
function fu(){
	var j=$("#l").attr("checked");
	if(undefined==j){
		$("#l").attr("checked",true);
		}else{
		$("#l").attr("checked",false);
	}	
}
function fu2(){
	var j=$("#e").attr("checked");
	if(undefined==j){
		$("#e").attr("checked",true);
		}else{
		$("#e").attr("checked",false);
	}	
}
function note(way){
	var note=document.createElement("section");
	note.setAttribute('id','peisong');
	note.setAttribute('class','peisong');
	var bodys=document.body;
	bodys.appendChild(note);
	var peiSong=document.getElementById('peisong');
	var windwHeight=window.innerHeight;
	var sc=document.getElementById("sc").innerHTML;
	peiSong.style.height=windwHeight+'px';
	var note2=document.getElementById('note2');
	if(way=='take'){
		note.innerHTML=sc
	}else{
		note.innerHTML=sc
	}
	$('#peisong').css('right','0px');
	$('.classification-input').children('span').click(function(){
		if($(this).children("input[name=classification2]").is(":checked")){
			 $(this).children("input[name=classification2]").prop('checked','')
			 $(this).children("strong").removeClass("current");
		}else{
			$(this).children("input[name=classification2]").prop('checked','checked');
			$(this).children("strong").addClass("current");
			$(this).prevAll("span").children("strong").removeClass("current");
			$(this).nextAll("span").children("strong").removeClass("current")
		}
	})
	$("#Distribution-message").children("p").children("span").click(function(){
		var spanNR=$(this).html();
		$("#textareaC").val(spanNR);
	})
	$(".Distribution-list").children("ul").children("li").children("select").change(function(){
		$(this).next("i").html($(this).val())
	})
	$("#note2").click(function(){
		$("#classificationd").show();
		$("#classificationc").addClass('Prepaid-animation')	
	})
	$("#qx").click(function(){
		$("#classificationd").hide();
	})
	$("#headers").click(function(){
		$("#peisong").css("right","-1000px");
		bodys.removeChild(note)
	})
	ok();
}
