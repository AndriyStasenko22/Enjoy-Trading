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
            // if($(this).closest('.mobile-menu').hasClass('open')){
            //     console.log('mobile-menu.open');
            // }
            if($('.mobile-menu').hasClass('open')){
                $('.mobile-menu').removeClass('open');
            }

            e.preventDefault();
            var link_href = $(this).attr('href');
            var contact_block = $(link_href);
            var contact_block_position = contact_block.offset().top;
            $("html, body").animate({scrollTop: contact_block_position}, 500);
        }
    });

    var menu_selector = ".navigation-list";
    var home_height = $('#home').outerHeight();

    function onScroll() {
        var scroll_top = $(document).scrollTop();
        if (scroll_top > home_height + 25) {
            $(menu_selector).removeClass('not-showin').addClass('showin');
        }
        else {
            $(menu_selector + '.showin').removeClass('showin').addClass('not-showin');
        }
        $(menu_selector + " a").each(function () {
            var hash = $(this).attr("href");
            var target = $(hash);

            if ((target.offset().top <= scroll_top) && (target.offset().top + target.outerHeight() > scroll_top)) {
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
            var hash = $(this).attr("href");
            var target = $(hash);
            $(document).off("scroll");
            if (hash == "#home") {
                $(menu_selector).removeClass('showin').addClass('not-showin');
            }
            else {
                $(menu_selector + " li.active").removeClass("active");
                $(this).parent().addClass("active");
            }
            $("html, body").animate({
                scrollTop: target.offset().top + 1
            }, 500, function () {
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