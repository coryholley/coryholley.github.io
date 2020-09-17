$().ready(function () {
    $("#headerContent").hide()
    $(".colorGifDiv").removeClass("gif")

    $(window).load(function () {
        $("#headerContent").delay(1000).fadeIn(2000)
    })

    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect
$(document).scroll(function () {
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
});



var btnText = ""
$(".btn-outline-secondary").on("mouseenter", function() {
    btnText = $(this).html()
    $(this).addClass("gif")
    $(this).html("VISIT THE SITE")
})
$(".btn-outline-secondary").on("mouseleave", function() {
    $(this).removeClass("gif")
    $(this).html(btnText)
})



