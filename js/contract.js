$(document).ready(function(){
    $('.contract-body').on('click','h3',function(){
        $(this).parents('section').toggleClass('closed');
    });
    $('.contract-body').on('click','h6',function(){
        $(this).parents('section').removeClass('closed');
    });

});
