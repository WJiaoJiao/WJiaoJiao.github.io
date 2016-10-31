// JavaScript Document
$(document).ready(function(e) {	
	$(".tc-big").click(function(){
		$(this).hide();
	})
	$(".tc").click(function(e){
    	var ev = e || window.event;
        if(ev.stopPropagation){
        	ev.stopPropagation();
        }
        else if(window.event){
        	window.event.cancelBubble = true;//兼容IE
        }
	})
	$('#ch').click(function(){
	})
});
function Prepaid(){
	$('.Prepaid').show();
	$('.Prepaid-content').addClass('Prepaid-animation');
	if($('#number').val()==''){
		clicks()
	}
}
function Withdrawals(){
	$('.Withdrawals').show();
	$('.Withdrawals-content').addClass('Prepaid-animation');
	var yue=parseInt($('#yue').html());
	$('#Withdrawalsn').html('￥'+(yue.toFixed(2)));
}
function Prepaid(){
	$('.Prepaid').show();
	$('.Prepaid-content').addClass('Prepaid-animation');
	if($('#number').val()==''){
		clicks()
	}
}
function clicks(){
	$('#input').children('span').click(function(){
		$(this).addClass("current");
		$(this).nextAll('span').removeClass('current');
		$(this).prevAll('span').removeClass('current');
		$(this).children('input').prop('checked','checked');
	}) 
}
function qxClose(bigId){
	bigId.hide();
}
function Prepaids(id,idcontent){
	id.show();
	idcontent.addClass('Prepaid-animation');
}
/*申请提现成功弹窗*/
function success(){
	var bodys=document.body;
	var success=document.createElement('section');
	success.setAttribute('class','success');
	success.setAttribute('id','success');
	success.innerHTML='<div class="success-content tc"><div class="success-top"><p>提现<i>￥40</i>申请已提交</p><span>工作日13:00前提现，当日19:00到账</span><span>工作日13:00后提现，次日19:00到账</span></div><input type="button" value="查看提现纪录" onClick="clicko()"></div>';
	bodys.appendChild(success);

}
function liji(){
	var Withdrawals=document.getElementById('Withdrawals');
	Withdrawals.style.display='none';
	success();
}
function clicko(){
	location.href="record.html";
}