
$(function(){
    $("#count").numberRock({
        lastNumber:5456445646,		//终止数字
        duration:10000,
        easing:'swing',  	//慢快慢
    });
});
(function($){
    $.fn.numberRock=function(options){
        var defaults={
            lastNumber:100,
            duration:2000,
            easing:'swing'  //swing(默认 : 缓冲 : 慢快慢)  linear(匀速的)
        };
        var opts=$.extend({}, defaults, options);

        $(this).animate({
            num : "numberRock",
        },{
            duration : opts.duration,
            easing : opts.easing,
            complete : function(){
                console.log("success");
            },
            step : function(a,b){  //可以检测我们定时器的每一次变化
                $(this).html(parseInt(b.pos * opts.lastNumber));
            }
        });

    }

})(jQuery);
