$(document).ready(function() {



});

$(".header__user-toggler").click(function() {
    $(this).addClass("header__user-toggler--active")
})


$(document).mouseup(function(e) {
    var div = $('.header__user-dropdown');
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        if ($(".header__user-toggler").hasClass("header__user-toggler--active")) {
            $(".header__user-toggler").removeClass("header__user-toggler--active")
        }
    }
});