$(document).ready(function () {
    $("#headerContent").hide()

    $(window).load(function () {
        $("#headerContent").delay(1000).fadeIn(2000)
    })

    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect
        $(document).scroll(function() {
            var $nav = $("#mainNavbar");
            $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        });


