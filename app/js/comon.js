$(document).ready(function() {

    $('.up-button').on('click', function (e) {
        e.preventDefault();

        $("html, body").animate({scrollTop:0}, '800');
    })


    var menu_selector = ".navigation-list";
    function onScroll(){
        var scroll_top = $(document).scrollTop();
        $(menu_selector + " a").each(function(){
            var hash = $(this).attr("href");
            var target = $(hash);
            if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
                $(menu_selector + " li.active").removeClass("active");
                $(this).parent('li').addClass("active");
            } else {
                $(this).parent('li').removeClass("active");
            }
        });
    }
    $(document).ready(function () {
        $(document).on("scroll", onScroll);
        $(menu_selector +" a").click(function(e){
            e.preventDefault();
            $(document).off("scroll");
            $(menu_selector + " li.active").removeClass("active");
            $(this).parent().addClass("active");
            var hash = $(this).attr("href");
            var target = $(hash);
            $("html, body").animate({
                scrollTop: target.offset().top
            }, 500, function(){
                window.location.hash = hash;
                $(document).on("scroll", onScroll);
            });
        });
    });
});