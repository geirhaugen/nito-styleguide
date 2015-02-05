/**
 * Created by geirhaugen on 04/02/15.
 */
$().ready(function () {
//HTML toggler
    $(".html-toggler").click(function () {
        $(this).parent().parent().toggleClass("activated");
        $(".styleguide").toggleClass("viewHtml");
    });

    $(".helper-toggler").click(function () {
        $(this).parent().parent().toggleClass("viewHelpers");
    });

    $(".js-menuToggler").click(function () {
        $(".js-mainNavigationList").slideToggle();
    });
});
