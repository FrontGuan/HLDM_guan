
$(function(){
    $('span.fa-list-ul').click(function(){
        // 点击菜单按钮显示和隐藏菜单栏
        $('.menu-list').toggle();
    })
    //轮播图渲染
    $.get('http://127.0.0.1:9091/api/getlunbo',function(backData){
        // console.log(backData);
        $('.hl_content .mui-slider-group').html(template('lunboTmp',backData));
        //轮播图第一项和最后一项的问题
        $('.hl_content .mui-slider-item').last().children('a').find('img').attr('src',backData[0].img);
        $('.hl_content .mui-slider-item').last().children('a').find('span').html(backData[0].title);
        $('.hl_content .mui-slider-item').first().children('a').find('img').attr('src',backData[backData.length-1].img);
        $('.hl_content .mui-slider-item').first().children('a').find('span').html(backData[backData.length-1].title);
        //自动轮播
        var gallery = mui('.mui-slider');
        gallery.slider({
          interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
        });
    })
    //点击标签渲染对应的数据到页面
    $('.nav li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index =  $(this).index() + 1;
        $.ajax({
            url:'http://127.0.0.1:9091/api/gethometab/' + index,
            success:function(backData){
                // console.log(backData);
                // console.log(template('animeList',backData));
                $('.content ul').html(template('animeList',backData));
            }
        })
    })
    //默认渲染第一个导航的数据
    $.ajax({
        url:'http://127.0.0.1:9091/api/gethometab/1', 
        success:function(backData){
            console.log(backData);
            $('.content ul').html(template('animeList',backData));
        }
    })
})