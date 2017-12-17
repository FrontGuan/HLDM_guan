
$(function(){
	//获取屏幕的宽
    var window_width = $(window).width();
    console.log(window_width);
    var html_size = (window_width / 375) * 100 ;
    //设置html跟结点的fontSize大小
    document.querySelector('html').style.fontSize = html_size + 'px';
    // console.log(document.querySelector('html').style.fontSize);

	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		indicators: false
	});

	//给所有页面顶部的返回图标添加返回到上一页的功能
	$('.hl_header span.fa-chevron-left').click(function(){
		window.history.back();
	})
})