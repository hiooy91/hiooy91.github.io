//툴팁 스크립트


function closeLayer( obj ) {
    $(obj).parent().parent().hide();
}
 
$(function(){
 
    /* 클릭 클릭시 클릭을 클릭한 위치 근처에 레이어가 나타난다. */
    $('.Select').click(function(e)
    {
        var sWidth = window.innerWidth;
        var sHeight = window.innerHeight;
 
        var oWidth = $('.popupLayer').width();
        var oHeight = $('.popupLayer').height();
 
        // 레이어가 위치 셋팅
        var divLeft = e.clientX + 10;
        var divTop = e.clientY + 5;
 
        // 레이어가 화면 크기를 벗어나면 위치를 바꾸어 배치한다.
        if( divLeft + oWidth > sWidth ) divLeft -= oWidth;
        if( divTop + oHeight > sHeight ) divTop -= oHeight;
 
        // 레이어 위치를 바꾸었더니 상단기준점(0,0) 밖으로 벗어난다면 상단기준점(0,0)에 배치하자.
        if( divLeft < 0 ) divLeft = 0;
        if( divTop < 0 ) divTop = 0;
 
        $('.popupLayer').css({
            "top": divTop,
            "left": divLeft,
            "position": "absolute"
        }).show();
    });
 
});
 