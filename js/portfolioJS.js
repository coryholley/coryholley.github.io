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


var btnTextColor = ""
var btnText = ""
$(".btn-outline-secondary").on("mouseenter", function() {
    btnText = $(this).html()
    btnTextColor = $(this).css("color")
    $(this).html("VISIT THE SITE")
    $(this).css("color", "#d6079f")
})
$(".btn-outline-secondary").on("mouseleave", function() {
    $(this).html(btnText)
    $(this).css("color", btnTextColor)
})



