
$(function(){
    $.get('http://127.0.0.1:9091/api/gettopics',function(backData){
        // console.log(backData);
        $('.hl_content ul').html(template('topicsTmp',backData));
    })
})