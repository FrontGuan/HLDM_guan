
$(function(){
	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		indicators: false
	});

	//给所有页面顶部的返回图标添加返回到上一页的功能
	$('.hl_header span.fa-chevron-left').click(function(){
		window.history.back();
	})
})