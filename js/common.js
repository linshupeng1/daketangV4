/**
 * Created by Administrator on 2015/7/23.
 */
$(function(){
    //抵用卷滑动模块
    vouchersState();
    //遮罩层点击事件
    maskState();
    function vouchersState(){
        /*var vouchLength=$('.ui-vouchers-box').find('a').length;
        $('.ui-vouchers-box').css('width', $('.ui-vouchers-box').width()/vouchLength*$('.ui-vouchers-box').children().length|0);
        myScroll = new IScroll('#ui-vouchers-request', {
            scrollX: true,
            scrollY: false,
            mouseWheel: true,
            click: true
        });
        document.getElementById('ui-vouchers-request').addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
         */
        var vouchLength=$('.ui-vouchers-box').find('a').length;

        $('.ui-vouchers-box').css('width', $('.ui-vouchers-box').width()/vouchLength*$('.ui-vouchers-box').children().length|0);
        myScroll = new IScroll('#ui-sort-box', {
            scrollX: true,
            scrollY: false,
            mouseWheel: true,
            click: true
        });
        document.getElementById('ui-sort-box').addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    }
    function maskState(){
        //抵用卷点击置灰
        $('.ui-vouchers').on('click',function(){
            $('.ui-pop-box').show();
            $('.ui-now-btn').on('click',function(){
                $('.ui-vouchers').parents('.ui-vouchers-box').addClass('active');
                $('.ui-pop-box').hide();
            });
        });
        //遮罩层消失隐藏
        $('.ui-close-box').on('click',function(){
            $('.ui-pop-box').hide();
        })
    }
	document.body.addEventListener('touchstart',function(){},false);
});
