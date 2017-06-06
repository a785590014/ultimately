'use strict';
$(function(){
    var zz = /^1[34578]\d{9}$/;
    var math;
    var set;
    cha('.phone input','.phone i',true);
    cha('.psd input','.psd i',false);
    $('.phone input').on('keyup',function(){
        var vals = $(this).val();
        if(vals !== ''){
            $('.phone i').show();
            if(!zz.test(vals)){
                $('.move').animate({'right': -10 + 'rem'});
                $(this).attr('name',0);
            }else{
                $(this).attr('name',1);
                $('.move').stop(true).animate({'right': 0});
            }
        }else{
            $('.phone i').hide();
        }
        if_();
    });
    $('.psd input').on('keyup',function(){
        var vals = $(this).val();
        if(vals !== ''){
            $('.psd i').show();
        }else{
            $('.psd i').hide();
        }
        if(vals == math){
            $(this).attr('name',1);
        }else{
            $(this).attr('name',0);
        }
        if_();
    });
    $('.mes span').on('click',function(){
        if($('.move').css('right') < 0){
        }else{
            math = '';
            if($('.mes').attr('name') == 0){
                var j = 60;
                $('.mes').attr('name',1);
                $('.mes span').text(j + 'S').css('background','red');
                $('.mes a').css({'border-right':'0.5rem solid red'});
                for(var i = 0; i < 4; i ++){
                    math += Math.round(Math.random()*9) + '';
                }
                alert(math);
                set = setInterval(function(){
                    if(j > 0){
                        j --;
                        $('.mes span').text(j + 'S');
                    }else{
                        clearInterval(set);
                        math = null;
                        j = 60;
                        $('.mes').attr('name',0);
                        $('.mes span').text('重新获取验证码').css('background','#36bfd1');
                        $('.mes a').css({'border-right':'0.5rem solid #36bfd1'});
                    }
                },1000);
            }
        }
    });
    $('button').on('click',function(){
        var num = 0;
        for(var i = 0; i < $('input').length; i ++){
            if($('input').eq(i).attr('name') == 1){
                num ++;
            }
        }
        if(num == 2){
            fixed('登录成功');
        }else{
            fixed('登录失败');
        }
    });
    function cha(class_,icon,status) {
        var input_ = $(class_);
        var icon = $(icon);
        if(status){
            icon.on('click',function(){
                input_.val('');
                icon.hide();
                $('.move').stop(true).animate({'right': -10 + 'rem'});
            })
        }else{
            icon.on('click',function(){
                if(icon.attr('name') == 0){
                    input_.attr('type','text');
                    icon.html('&#xe615;');
                    icon.attr('name',1);
                }else{
                    input_.attr('type','password');
                    icon.html('&#xe6a4;');
                    icon.attr('name',0);
                }
            })
        }
    }
    //fixed
    function fixed(a){
        if($('.fixed').css('display') == 'none'){
            $('.fixed').text(a).fadeIn(500);
            $('.fixed').delay(500).fadeOut(500);
        }
    }
    function if_() {
        if($('input').val() !== '' && $('.psd input').val() !== ''){
            $('button').css('background','#ff6640');
            $('button').attr('disabled',false);
        }else{
            $('button').css('background','#d8d8d8');
            $('button').attr('disabled',true);
        }
    }
})