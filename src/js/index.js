/**
 * Created by hll on 2017/12/7.
 */
$(function () {
    //�ص�������ť�̶���λ
    $(window).scroll(function () {
        var scrollY = $(window).scrollTop();
        if (scrollY > 100) {
            $(".dv").addClass("fixed");
        } else {
            $(".dv").removeClass("fixed");
        }

    });
    $(".dv").click(function(){
        //var h=$(window).scrollTop();
        $('body,html').animate({scrollTop:0},500);
    })

    //�������̶���λ
    $(window).scroll(function () {
        var scrollY = $(window).scrollTop();
        if (scrollY >80) {
            $(".top").addClass("top-nav");
            $(".top").removeClass("top-replace");
            //$(".top").css({"position":"relative"})
            $(".message").css("marginTop","80px")
        } else {
            $(".top").removeClass("top-nav");
            $(".top").addClass("top-replace");
        }

    });


});

$(function(){
    //ê�㶨λ
    $('#nav_fr ul li a[href^="#"]').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: $(this.hash).offset().top}, 1000);

    });
})
