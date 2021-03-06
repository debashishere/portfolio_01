$(document).ready((event) => {

    setTimeout(() => {
        $(".loader").fadeOut();
        $(".loader").fadeOut("slow");
        $(".loader").fadeOut(1000);
        $(".loader_container").fadeOut();
        $(".loader_container").fadeOut("slow");
        $(".loader_container").fadeOut(1500);
        $('.loader_container').removeClass('active');
    }, 1000)

    $('.hambarger').on("click", (event) => {
        $('.hambarger').toggleClass('active');
        $('.navigation').toggleClass('active');
        $('.nav_overlay').toggleClass('active');
    })


    const reveal = gsap.utils.toArray('.reveal');
    reveal.forEach((text, i) => {
        ScrollTrigger.create({
            trigger: text,
            toggleClass: 'active',
            start: "top 90%",
            end: "top 3%",
            // markers: true
        })
    })

    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
        },
        loop: true,
    });


    $(".homeBtn").click(function () {
        $('html, body').animate({
            scrollTop: $("#particles-js").offset().top
        }, 700);
    });

    $(".projectBtn").click(function () {
        $('html, body').animate({
            scrollTop: $("#project").offset().top
        }, 700);
    });

    $(".aboutBtn").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 700);
    });

    $(".contactBtn").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 700);

    });



    let topMenuHeight = 0;
    var lastId,
        topMenu = $(".nav_link"),
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    let flag = false;
    menuItems.click(function (e) {
        if ($(this).attr("href") == '#project') {
            topMenuHeight = -10;
        }
        if ($(this).attr("href") == '#about' || $(this).attr("href") == '#contact') {
            topMenuHeight = -25;
        }
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight - 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
        $('.nav_link a').removeClass('active');
        const target = e.target
        $(target).addClass('active');
        setTimeout(() => {
            $('.hambarger').removeClass('active');
            $('.navigation').removeClass('active');
            $('.nav_overlay').removeClass('active');
            flag = false;
        }, 700)
        flag = true;
        topMenuHeight = 0;
    });

    // Bind to scroll
    $(window).scroll(function () {
        if (!flag) {
            // Get container scroll position
            var fromTop = $(this).scrollTop() + topMenuHeight;
            // Get id of current scroll item
            var cur = scrollItems.map(function () {
                if ($(this).offset().top < fromTop)
                    return this;
            });
            // Get the id of the current element
            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id : "";
            if (lastId !== id) {
                lastId = id;
                // Set/remove active class
                menuItems.each((index, item) => {
                    $(item).removeClass("active");
                    $(item).filter("[href='#" + id + "']").addClass("active");
                })

            }
        }

    })

})