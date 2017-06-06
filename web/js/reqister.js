$(function(){
    var zz = /^1[34578]\d{9}$/;
    var math;
    var set;
    cha('.phone input','.move i',true);
    $('.phone input').on('keyup',function(){
        if($(this).val() !== ''){
            $('.move i').show();
        }else{
            $('.move i').hide();
        }
        if_();
    });
    $('.mes span').on('click',function(){
        if(!zz.test($('.phone input').val())){
            fixed('请检查格式');
            $('.mes span').attr('name',0);
        }else{
            $('.mes span').attr('name',1);
            math = '';
            if($('.mes').attr('alt') == 0){
                var j = 60;
                $('.mes').attr('alt',1);
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
                        $('.mes').attr('alt',0);
                        $('.mes span').text('重新获取验证码').css('background','#36bfd1');
                        $('.mes a').css({'border-right':'0.5rem solid #36bfd1'});
                    }
                },1000);
            }
        }
    })
    cha('.hide input','.hide i',true);
    $('.hide input').on('input change',function(){
        var vals = $(this).val();
        if(vals !== ''){
            $('.hide i').show();
        }else{
            $('.hide i').hide();
        }
        if(vals == math){
            $('.hide input').attr('name',1);
        }else{
            $('.hide input').attr('name',0);
        }
        if_();
    });
    cha('.show input','.show i',false);
    $('.show input').on('keyup',function(){
        if($(this).val() !== ''){
            $('.show input').attr('name',1);
            $('.show i').show();
        }else{
            $('.show input').attr('name',0);
            $('.show i').hide();
        }
        if_();
    });


    $('.yes label').on('click',function(){
        if($('.yes i').text() == ''){
            $('.yes i').html('&#xe601;');
            $('.yes label').attr('name',1);
        }else{
            $('.yes i').html('');
            $('.yes label').attr('name',0);
        }
        if_();
    });

    $('button').on('click',function(){
        var num = 0;
        for(var i = 0; i < $('[name]').length; i ++){
            if($('[name]').eq(i).attr('name') == 1){
                num ++;
            }
        }
        if(num == 4){
            fixed('注册成功');
        }else{
            fixed('注册失败');
        }
    });

    function if_() {
        if($('.phone input').val() !== '' && $('.hide input').val() !== '' && $('.show input').val() !== '' && $('.yes i').html() !== ''){
            $('button').css('background','#ff6640');
            $('button').attr('disabled',false);
        }else{
            $('button').css('background','#d8d8d8');
            $('button').attr('disabled',true);
        }
    }

    //fixed
    function fixed(a){
        if($('.fixed').css('display') == 'none'){
            $('.fixed').text(a).fadeIn(500);
            $('.fixed').delay(500).fadeOut(500);
        }
    }

    function cha(class_,icon,status) {
        var input_ = $(class_);
        var icon = $(icon);
        if(status){
            icon.on('click',function(){
                input_.val('');
                icon.hide();
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
})