(function($){
    $('body').append('<div class="bankselect-box" id="bankselect"><div class="bankselect-cover"></div><div class="bankselect-panle"><div class="bankselect-panle-header">银行选择<div class="cancel"></div></div><ul class="bankselect-panle-body"><li data-val="中国工商银行"><img src="images/bank-1.png">中国工商银行</li><li data-val="中国农业银行"><img src="images/bank-2.png">中国农业银行</li><li data-val="浦发银行"><img src="images/bank-9.png">中国建设银行</li><li data-val="中国建设银行"><img src="images/bank-3.png">浦发银行</li><li data-val="中国银行"><img src="images/bank-4.png">中国银行</li><li data-val="邮政储蓄银行"><img src="images/bank-5.png">邮政储蓄银行</li><li data-val="招商银行"><img src="images/bank-6.png">招商银行</li><li data-val="光大银行"><img src="images/bank-7.png">光大银行</li><li data-val="广发银行"><img src="images/bank-8.png">广发银行</li></ul></div></div>');
    $.fn.bankselect = function(){
        var _self=$(this);
        $(this).on('click',function(){
            $('#bankselect').show();
        });
        $('#bankselect').on('click','li',function(){
            _self.val($(this).data('val'));
            $('#bankselect').hide();
        });
        $('#bankselect').on('click','.cancel',function(){
            $('#bankselect').hide();
        });
    };
})(jQuery);
