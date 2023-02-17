$(".menu i").click(function (e) {
    $(".menu i").toggleClass("open fa-close");
    $(".menu i").toggleClass("fa-bars");
    $(".list").toggleClass("list_toggle");
})
$(".list_item a").click(function () {
    $(".menu i").toggleClass("open fa-close");
    $(".menu i").toggleClass("fa-bars");
    $(".list").toggleClass("list_toggle");
})