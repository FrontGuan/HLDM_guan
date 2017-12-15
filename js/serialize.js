
$(function(){
    $.get('http://127.0.0.1:9091/api/getlianzai',function(backData){
        console.log(backData);
        // console.log(template('serializeTmp',backData));
        $('.hl_content ul.mui-table-view').html(template('serializeTmp',backData));
    })
})