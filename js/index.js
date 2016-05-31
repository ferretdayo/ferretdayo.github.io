$(document).ready(function(){
    //<a href="#id">をクリックすると
    //#idのついている場所に自動スクロールを行う
    $('a[href*=#]').click(function(){
        var target = $(this.hash);
        if(target){
            var position = target.offset().top;
            console.log(position);
            $('body,html').animate({    
                scrollTop: position
            }, {
                queue: false
            });
            return false;
        }
    });
});
$(document).ready(function(){
    $('.nav-anime').mouseover(function(e){
        e.preventDefault();
        console.log("aaa");
        $('.nav-anime').addClass('animated');
    });
});