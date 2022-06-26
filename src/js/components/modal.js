$(".modal__tab").click(function() {
    let path = $(this).attr("data-tabs-path")
    $(".modal__tab").removeClass("modal__tab--active")
    $(this).addClass("modal__tab--active")
    $(".modal__tab-content").removeClass("modal__tab-content--active")
    $(`.modal__tab-content[data-tabs-path="${path}"]`).addClass("modal__tab-content--active")
})


$(".form-validate input").on("input", function() {
    let form = $(this).parents(".form-validate")
    let inputsValue = []

    $(form).find(".form-group--required input").each(function(index, el) {
        inputsValue.push($(el).val())
    });

    if (inputsValue.indexOf("") === -1) {
        $(form).find(".js-submit").prop("disabled", false)
    }

})