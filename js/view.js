$(document).ready(function () {
    $('#birthday').mobiscroll({
        preset: 'date',
        display: 'bottom',
        mode: 'scroller',
        dateFormat: 'yyyy-mm-dd',
        dateOrder: 'yymmdd',
        showLabel: true,
        lang: 'zh',
        setText: '确定',
        cancelText: '取消',
        endYear:(new Date()).getFullYear(),
        startYear:1900,
        maxDate:new Date()
    });
    $('#server_area').mobiscroll({
        display: 'bottom',
        mode: 'scroller',
        group: true,
        lang: 'zh',
        setText: '确定',
        cancelText: '取消',
        showInput: false,
        showLabel: false,
        wheels: [
            [
                {
					label: '服务地区',
					keys: ['北京地区','上海地区','广东地区'],
					values: ['北京地区','上海地区','广东地区'],
				}
            ]
        ],
        headerText: "请选择服务地区" ,
        formatResult: function (data) {
            return data;
        },
        onSelect: function(data){
            console.log('在这个地方处理回执动作');
            //在这个地方处理回执动作
        }
    });
    $('.radio-box label').each(function(){
        if($(this).children('[type="radio"]').attr('checked')){
            $(this).addClass('checked');
        }
    });
    $('.radio-box').on('click','label',function(){
        $(this).addClass('checked').siblings('label').removeClass('checked');
    });



    $('.js-askform').on('click',function(){
        $('.container').removeClass('unfixform');
    });
    $('.fixform-cancle').on('click',function(){
        $('.container').addClass('unfixform');
    });
});
