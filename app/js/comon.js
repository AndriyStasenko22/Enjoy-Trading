$(document).ready(function () {

    // кнопка "На верх"
    $('.up-button').on('click', function (e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, '800');
    })

    // активний пункт головно меню
    $(document).on('click', '.menu-list .menu-item', function (e) {
        $('.menu-list li.active').removeClass('active');
        $(this).parent('li').addClass('active');
        if ($(this).attr('href') == '#contact') {
            e.preventDefault();
            var link_href = $(this).attr('href');
            var contact_block = $(link_href);
            var contact_block_position = contact_block.offset().top;
            $("html, body").animate({scrollTop: contact_block_position}, 500);
        }
    });

    var menu_selector = ".navigation-list";

    function onScroll() {
        var scroll_top = $(document).scrollTop();
        $(menu_selector + " a").each(function () {
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
        $(menu_selector + " a").click(function (e) {
            e.preventDefault();
            $(document).off("scroll");
            $(menu_selector + " li.active").removeClass("active");
            $(this).parent().addClass("active");
            var hash = $(this).attr("href");
            var target = $(hash);
            $("html, body").animate({
                scrollTop: target.offset().top
            }, 500, function () {
                window.location.hash = hash;
                $(document).on("scroll", onScroll);
            });
        });
    });

    $(document).on('click', '.menu-mobile-button', function (e) {
        e.preventDefault();
        $('.mobile-menu').addClass('open');
    });

    $(document).on('click', '.mobile-menu.open .menu-close-button', function (e) {
        e.preventDefault();
        $('.mobile-menu.open').removeClass('open');
    });
});