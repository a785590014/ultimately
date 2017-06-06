'use strict';
var allpic = document.querySelector('.allpic');
var pic = document.querySelectorAll('.pic');
var w_w = window.innerWidth;
for(var i = 0; i < pic.length ; i ++){
    pic[i].style.width = w_w + 'px';
}
allpic.style.width = pic.length * w_w + 'px';
window.addEventListener('resize',function(){
    w_w = window.innerWidth;
    for(var i = 0; i < pic.length ; i ++){
        pic[i].style.width = w_w + 'px';
    }
    allpic.style.width = pic.length * w_w + 'px';
})