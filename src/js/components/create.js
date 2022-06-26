$(".create__select-current").click(function() {
    $(this).toggleClass("create__select-current--active")
})

$(".create__select-category").click(function() {
    let selected = $(this).clone()
    $(".create__select-current").html(selected)
    $(".create__select-current").removeClass("create__select-current--active")
})

$(document).mouseup(function(e) {
    var div = $('.create__select-dropdown');
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $(".create__select-current").removeClass("create__select-current--active")
    }
});