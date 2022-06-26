$(".news-card__more-toggler").click(function() {
    $(this).addClass("news-card__more-toggler--active")
})

$(document).mouseup(function(e) {
    var div = $('.news-card__dropdown');
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $(".news-card__more-toggler").removeClass("news-card__more-toggler--active")
    }
});

$(".news-card__share-toggler").click(function() {
    $(this).addClass("news-card__share-toggler--active")
})

$(document).mouseup(function(e) {
    var div = $('.news-card__share-dropdown');
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $(".news-card__share-toggler").removeClass("news-card__share-toggler--active")
    }
});


$(".copy").click(function() {
    var text = $(this).attr("data-copy-text")
    var $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val(text).select();
    document.execCommand("copy");
    $tmp.remove();

    $("body").append(`<div class="copy-alert">Скопировано в буфер обмена</div>`)
    $(".copy-alert").addClass("copy-alert--active")
    setTimeout(() => {
        $(".copy-alert").removeClass("copy-alert--active")
        setTimeout(() => {
            $(".copy-alert").remove()
        }, 2250);
    }, 3000);
})

$(".news-card__like").click(function() {
    $(this).toggleClass("news-card__like--active")
})

$(".news-card__favourite").click(function() {
    $(this).toggleClass("news-card__favourite--active")
})