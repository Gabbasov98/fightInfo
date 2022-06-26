let containerWidth = $(".container").width()
let innerWidth = window.innerWidth
console.log(containerWidth, innerWidth);
$(".alerts").css("right", `${(innerWidth - containerWidth - 50) / 2}px`)


$(".user-alert__close").click(function() {
    $(this).parents(".user-alert").remove()
})