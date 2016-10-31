// JavaScript Document
//提示性弹窗
function Prompt(spanContent){
	var PromptId=document.createElement('section');//添加外框架标签
	var PromptSpan=document.createElement('span');//添加内容框架标签
	var bodys=document.body;
	PromptId.setAttribute('id','tsh');
	PromptId.setAttribute('class','tsh');
	bodys.appendChild(PromptId);
	PromptId.appendChild(PromptSpan);
	PromptSpan.innerHTML=spanContent;
	var tsh=document.getElementById('tsh');
	time=setTimeout(function(){
		bodys.removeChild(PromptId);
		},2000);
	
}
/*选择性弹窗*/
function selectivity(selectivityNr,selectivityInput1,selectivityInput2,truesj){
	var bodys=document.body;
	var selectivityId=document.createElement('section');
	selectivityId.setAttribute('class','selectivity');
	selectivityId.setAttribute('id','selectivityId')
	selectivityId.innerHTML='<div class="selectivity-content" id="selectivity-content"><span>'+selectivityNr+'</span><p><input type="button" value="'+selectivityInput1+'" id="falses"><input type="button" value="'+selectivityInput2+'" id="trues"></p></div>' 
	bodys.appendChild(selectivityId);
	var selectivity=document.getElementById('selectivity-content');
	var selectivityTop=selectivity.offsetHeight;
	selectivity.style.marginTop='-'+selectivityTop/2+'px';
	var falses=document.getElementById('falses');
	var trues=document.getElementById('trues');
	falses.onclick=function(){
		bodys.removeChild(selectivityId)
	}	
	trues.onclick=function(){
		bodys.removeChild(selectivityId);	
		truesj;
	};
}
