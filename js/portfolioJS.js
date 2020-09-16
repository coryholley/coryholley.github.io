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

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }


})

